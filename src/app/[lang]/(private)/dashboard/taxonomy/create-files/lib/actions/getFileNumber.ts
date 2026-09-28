"use server"

export async function getFileNumber(assemblyId : number) : Promise<{
  lastIndexAssembly: [{
    cad_file_number: number
  }],
  lastIndexPart: [{
    cad_file_number : number
  }]
}>{
  const api_url = getAPIURL();
  const fetch_data = await fetch(`${api_url}/cad-files?assembly-id=${assemblyId}`, {
    cache: 'no-store',
    method: "GET"
  });
  const data = await fetch_data.json();
  console.log(data)
  if(data?.message){
    throw Error();
  }
  return data;
}

function getAPIURL(){
  return process.env.API_URL;
}
  
