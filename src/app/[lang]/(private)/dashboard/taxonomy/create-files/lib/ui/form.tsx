"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Dispatch, FormEvent, FormEventHandler, SetStateAction, useEffect, useState } from "react";
import {
    assembly,
    fileType,
    seasonProps,
    subsystem,
    team
} from "../../../lib/util/selectorProps";
import { formAction } from "../actions/formAction";
import { DivSelector } from "./divSelectors";
import { fileTypesArray } from "../../../lib/util/consts";
import { fetchData } from "../../../lib/util/fetchData";
import { Assembly, Subsystem, Team } from "../../../lib/util/utilTypes";
import { getFileNumber } from "../actions/getFileNumber";

const firstSeason = 2027;
const seasonInit: Entity[] = [{
    entityId: firstSeason,
    entityName: `${firstSeason}`
}];
for (let i = firstSeason; i < new Date().getFullYear() + 1; i++) {
    seasonInit.push({
        entityId: i,
        entityName: `${i}`
    });
}

type Setters = {
    setTeam: Dispatch<SetStateAction<Entity[]>>;
    setSubsystem: Dispatch<SetStateAction<Entity[]>>;
    setAssembly: Dispatch<SetStateAction<Entity[]>>;
}

export type SelectedIdsType = {
    file_type: string;
    team: string;
    subsystem: string;
    assembly: string
    season: string
};

const selectedIdsInit: SelectedIdsType = {
    file_type: "",
    team: "",
    subsystem: "",
    assembly: "",
    season: ""
};

export type Entity = {
    entityId: number;
    entityName: string;
}

function updateFileName(fileName: string, setGeneratedFileName: Dispatch<SetStateAction<string>>, teamAndProps: Team[], selectedIds: SelectedIdsType, fileNumber: number | null) {
    const team = teamAndProps.find((team) => team.team_id == +selectedIds.team)
    const subsystem = team?.subsystem.find((subs) => subs.subsystem_id == +selectedIds.subsystem);
    const assembly = subsystem?.assembly.find((assembly) => assembly.assembly_id == +selectedIds.assembly);
    let generatedName = "MR";
    if (team) {
        generatedName += team.team_name[0];
    }
    if (selectedIds.season) {
        generatedName += selectedIds.season;
    }
    if (subsystem) {
        generatedName += "_";
        generatedName += subsystem.subsystem_acronym;
    }
    if (assembly) {
        generatedName += "_";
        generatedName += assembly.assembly_number.toString().padStart(3, "0");
    }
    if (subsystem && assembly) {
      generatedName += "-";
      if((selectedIds.file_type)){
        switch(fileTypesArray.find((file_type) => file_type.entityId == +selectedIds.file_type)?.entityName){
          case fileTypesArray[1].entityName:
            generatedName += "A";
            break;
        }
      }
      if(fileNumber)
        generatedName += fileNumber.toString().padStart(2, "0");
        generatedName += "_";
        generatedName += fileName;
        generatedName += "_V1.0"
    }
    setGeneratedFileName(generatedName);
}


function onFormChange(event: FormEvent<HTMLFormElement>, setters: Setters, data: Team[], setSelectedIds: Dispatch<SetStateAction<SelectedIdsType>>, selectedIds: SelectedIdsType, setFileNumber:Dispatch<SetStateAction<number| null>>) {
    if (event.target instanceof HTMLSelectElement) {
        const selectEvent = event.target as HTMLSelectElement;
        let tempMap = selectedIds;
        switch (event.target.name) {
            case team.name:
                setters.setAssembly([]);
                tempMap[subsystem.name] = "";
                tempMap[assembly.name] = "";
                if (selectEvent.value == "") {
                    setters.setSubsystem([]);
                    break;
                }
                let filteredTeam = data.find((team) => team.team_id == +selectEvent.value);
                let subsystems: Entity[] = filteredTeam!.subsystem.map((subsystem) => {
                    return {
                        entityId: subsystem.subsystem_id,
                        entityName: subsystem.subsystem_acronym
                    }
                });
                setters.setSubsystem(subsystems);
                break;
            case subsystem.name:
                tempMap[assembly.name] = "";
                if (selectEvent.value == "") {
                    setters.setAssembly([]);
                    break;
                }
                let filteredTeamWithSubsystem = data.find((team) => team.subsystem.find((selectedSubsystem) => selectedSubsystem.subsystem_id == +selectEvent.value));
                let filteredSubsystem = filteredTeamWithSubsystem?.subsystem.find((selectedSubsystem) => selectedSubsystem.subsystem_id == +selectEvent.value);
                let assemblies: Entity[] = filteredSubsystem!.assembly.map((selectedAssembly) => {
                    return {
                        entityId: selectedAssembly.assembly_id,
                        entityName: selectedAssembly.assembly_name
                    }
                })
                setters.setAssembly(assemblies);
              break;
          case assembly.name:
            if (selectEvent.value == "") {
              break;
            }
            getFileNumber(+selectEvent.value).then(
              (value) => {
                console.log(value);
                if(!value) return;
                if(selectedIds.file_type == fileTypesArray[0].entityName){
                  console.log("part")
                  if(typeof value.lastIndexPart == 'number'){
                    setFileNumber(value.lastIndexPart + 1);
                  }
                  else{
                    setFileNumber(1);
                  }
                }
                else{
                  console.log("assembly")
                  if(typeof value.lastIndexAssembly == 'number'){
                    setFileNumber(value.lastIndexAssembly + 1);
                  }
                  else{
                    setFileNumber(1);
                  }
                }
              }
            );
        }
        setSelectedIds({ ...tempMap });
    }
}

export function Form({ lang }: { lang: string }) {
    const [selectedIds, setSelectedIds] = useState(selectedIdsInit);
    const [disabled, setDisabled] = useState(true);
    const [teamsAndProps, setTeamsAndProps] = useState<Team[]>([]);
    const [teams, setTeams] = useState<Entity[]>([]);
    const [subsystems, setSubsystem] = useState<Entity[]>([]);
    const [season, setSeason] = useState<Entity[]>(seasonInit);
    const [assemblies, setAssembly] = useState<Entity[]>([]);
    const [fileName, setFileName] = useState<string>("");
    const [generatedFileName, setGeneratedFileName] = useState<string>("");
    const [fileNumber, setFileNumber] = useState<number | null>(null);

    useEffect(() => {
        let teams = fetchData();
        teams.then((teams) => {
            if (teams == null) return;
            setTeamsAndProps(teams);
            let teamsArray = [];
            for (let team of teams) {
                teamsArray.push({
                    entityId: team.team_id,
                    entityName: team.team_name
                });
            }
            setTeams(teamsArray);
        });
    }, []);

    useEffect(() => {
      updateFileName(fileName, setGeneratedFileName, teamsAndProps, selectedIds, fileNumber);
    }, [selectedIds, fileName, fileNumber]);

    return (
        <form
            className="flex flex-col gap-5 min-h-[600px] w-[600px] bg-gray-100 rounded-lg mt-10"
            action={(formData) => formAction(formData)}
            onChange={(e) => {
              onFormChange(e, { setSubsystem: setSubsystem, setTeam: setTeams, setAssembly: setAssembly }, teamsAndProps, setSelectedIds, selectedIds, setFileNumber);
            }}>
            <section>
                <div className="flex justify-between gap-4">
                    <Link
                        className="text-center p-2"
                        href={`/${lang}/dashboard/taxonomy`}
                    >
                        <ArrowLeft />
                    </Link>
                </div>
            </section>
            <section className="mt-2">
                <DivSelector selector={fileType} data={fileTypesArray} setSelectedIds={setSelectedIds} selectedIds={selectedIds} />
                <DivSelector selector={seasonProps} data={season} setSelectedIds={setSeason} selectedIds={selectedIds} />
                <DivSelector selector={team} data={teams} setSelectedIds={setSelectedIds} selectedIds={selectedIds} />
                <DivSelector selector={subsystem} data={subsystems} setSelectedIds={setSelectedIds} selectedIds={selectedIds} />
                <DivSelector selector={assembly} data={assemblies} setSelectedIds={setSelectedIds} selectedIds={selectedIds} />
                <div className="flex flex-col place-content-center items-center content-center mb-9">
                    <label htmlFor="fileNameInput" className="text-onPrimaryContainer place-self-start ml-12">Nome do Arquivo:</label>
                    <input name="fileNameInput" className="bg-onPrimaryContainer text-onPrimary rounded-lg px-9 py-1" type="text" onChange={(e) => setFileName(e.currentTarget.value)}
                        value={fileName} />
                </div>
                <div className="flex flex-col place-content-center items-center content-center mb-9">
                    <label htmlFor="" className="text-onPrimaryContainer place-self-start ml-12">Nome gerado:</label>
                    <p className="text-onPrimaryContainer">{generatedFileName}</p>
                </div>
                <div className="flex place-content-center items-center content-center mt-10">
                    <div className="flex flex-col md:flex-row justify-between gap-4">
                        <button
                            className="bg-secondary text-onSecondary border rounded-xl text-center w-56 p-2"
                            onClick={(e) => {
                                setSelectedIds({ ...selectedIdsInit });
                                e.preventDefault();
                            }}
                        >
                            Limpar
                        </button>
                        <button
                            className="disabled:bg-emerald-100 disabled:text-black bg-blue-500 border rounded-xl text-center w-56 p-2"
                            disabled={disabled}
                        >
                            Enviar
                        </button>
                    </div>
                </div>
            </section>
        </form>
    );
}
