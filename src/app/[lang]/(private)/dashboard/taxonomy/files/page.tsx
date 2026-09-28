import { CADFile } from "../lib/util/cadFile";
import { columns } from "./ui/columns";
import { DataTable } from "./ui/dataTable"

type ResponseCadFile = {
  cad_file_name : string;
  cad_file_type : "PART" | "ASSEMBLY";
  cad_file_index_number : string;
  assembly : {
    assembly_name: string;
    subsystem: {
      team : {
        team_name : string;
      };
      subsystem_name : string;
    }
  }
}


async function getData() : Promise<Array<CADFile>>{
  const fetch_data = await fetch(`${process.env.API_URL}/cad-files/get-files`, {
    cache: 'no-store',
    method: "GET"
  });
  const fetched_data = await fetch_data.json();
  console.log(fetched_data);
  const data : Array<CADFile> = [];
  fetched_data.map((cadFile : ResponseCadFile) => {
    data.push({
      assembly: cadFile.assembly.assembly_name,
      file_type: cadFile.cad_file_type,
      part_name: cadFile.cad_file_name,
      part_number: cadFile.cad_file_index_number,
      subsystem: cadFile.assembly.subsystem.subsystem_name,
      team: cadFile.assembly.subsystem.team.team_name
    })
  }
  )
  return data;
}

export default async function Page(){
  const data = await getData();
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data}/>
    </div>
  )
}
