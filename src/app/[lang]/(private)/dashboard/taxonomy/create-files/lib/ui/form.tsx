"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
    assembly,
    fileType,
    subsystem,
    team
} from "../../../lib/util/selectorProps";
import { formAction } from "../actions/formAction";
import { DivSelector } from "./divSelectors";
import { fileTypesArray } from "../../../lib/util/consts";

const selectedIdsInit = new Map<string,string>([
  [fileType.name, ""],
  [team.name, ""],
  [subsystem.name, ""],
  [assembly.name, ""],
]);

export function Form({ lang }: { lang: string }) {
    const [selectedIds, setSelectedIds] = useState<Map<string,string>>(selectedIdsInit);
  const [disabled, setDisabled] = useState(true);

   useEffect(() => {
     setDisabled(!selectedIds.entries().every((value, index) => value[1] != ""));
   }, [selectedIds]);
    useEffect(() => {
      
    }, []);

    return (
        <form
            className="flex flex-col gap-5 min-h-[600px] w-[600px] bg-gray-100 rounded-lg mt-10"
          action={(formData) => formAction(formData)}
          onChange={(e) => e.target instanceof HTMLSelectElement ? console.log(e.target.name) : null}
        >
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
              <DivSelector selector={fileType} data={fileTypesArray} setSelectedIds={setSelectedIds} selectedIds={selectedIds}/>
              <DivSelector selector={team} data={[]} setSelectedIds={setSelectedIds} selectedIds={selectedIds}/>
              <DivSelector selector={subsystem} data={[]} setSelectedIds={setSelectedIds} selectedIds={selectedIds}/>
              <DivSelector selector={assembly} data={[]} setSelectedIds={setSelectedIds} selectedIds={selectedIds}/>
                <div className="flex place-content-center items-center content-center mt-10">
                    <div className="flex flex-col md:flex-row justify-between gap-4">
                        <button
                            className="bg-secondary text-onSecondary border rounded-xl text-center w-56 p-2"
                          onClick={(e) => {
                                setSelectedIds({...selectedIdsInit});
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
