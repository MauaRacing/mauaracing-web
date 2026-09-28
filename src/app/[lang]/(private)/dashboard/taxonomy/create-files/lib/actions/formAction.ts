"use server";

import { fileTypesArray } from "../../../lib/util/consts";
import {
  assembly,
  fileType,
  seasonProps,
  subsystem,
  team,
} from "../../../lib/util/selectorProps";

export async function formAction(formData: FormData, generatedFileName: string) {
  const rawFormData = {
    teamId: +formData.get(team.name)!,
    subsystemId: +formData.get(subsystem.name)!,
    assemblyId: +formData.get(assembly.name)!,
    season: +formData.get(seasonProps.name)!,
    fileName: generatedFileName,
    fileType: fileTypesArray.find((entity)=> entity.entityId == +formData.get(fileType.name)!)?.entityName,
  };

  console.log(JSON.stringify(rawFormData));
  const fetch_data = await fetch(`${process.env.API_URL}/cad-files`, {
    cache: "no-store",
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(rawFormData),
  });
  const data = await fetch_data.json();
  console.log(data);
  return;
}
