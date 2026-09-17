"use server"

export async function getFileNumber(assemblyId : number) : Promise<{
  lastIndexAssembly: number | null,
  lastIndexPart: number | null
} | null>{
  const api_url = getAPIURL();
  const fetch_data = await fetch(`${api_url}/cad-files?assembly-id=${assemblyId}`, {
    cache: 'no-store',
    method: "GET"
  });
  const data = await fetch_data.json();
  console.log(data)
  if(data?.message){
    return null;
  }
  return data;
}

function getAPIURL(){
  return process.env.API_URL;
}
  
