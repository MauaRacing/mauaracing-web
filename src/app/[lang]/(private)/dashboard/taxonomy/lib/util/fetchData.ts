"use server"
import { SelectorProps } from "./selectorProps";

export async function fetchData(props: SelectorProps) {
  const api_url = getAPIURL();
  if (props?.optionalId && props?.optionalURL) {
    props.url += `${props.optionalURL}/${props.optionalId}`;
  }
  else if(props?.optionalId){
    props.url += `/${props.optionalId}`;
  }
  console.log(`${api_url}${props?.url}`)
  const fetch_data = await fetch(`${api_url}${props?.url}`, {
    cache: 'no-store',
    method: "GET"
  });
  const data = await fetch_data.json();
  if(data?.message){
    return null;
  }
  return data;
}

function getAPIURL(){
  return process.env.API_URL;
}
  
