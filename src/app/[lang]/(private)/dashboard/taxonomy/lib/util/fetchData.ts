"use server"
import { Team } from "./utilTypes";

export async function fetchData() : Promise<Team[] | null>{
  const api_url = getAPIURL();
  const fetch_data = await fetch(`${api_url}/assembly`, {
    cache: 'no-store',
    method: "GET"
  });
  const data = await fetch_data.json();
  console.log(typeof data)
  if(data?.message){
    return null;
  }
  return data;
}

function getAPIURL(){
  return process.env.API_URL;
}
  
