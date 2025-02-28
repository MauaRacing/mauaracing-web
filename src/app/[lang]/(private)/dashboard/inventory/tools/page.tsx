import { columns } from "./ui/columns";
import { Tool, ToolWithPlacement } from "../lib/util/tool";
import { DataTable } from "./ui/dataTable"

async function getData() : Promise<Array<ToolWithPlacement>>{
  const fetch_data = await fetch(`${process.env.API_URL}/tool/placement`, {
    cache: 'no-store',
    method: "GET"
  });
  const fetched_data = await fetch_data.json();
  const data : Array<ToolWithPlacement> = [];
  fetched_data.map((array : Array<ToolWithPlacement>) => {
    array.map((el) => {
      data.push(el);
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