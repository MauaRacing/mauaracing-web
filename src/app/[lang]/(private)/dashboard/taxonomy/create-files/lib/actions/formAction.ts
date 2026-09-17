"use server";

import {
    assembly,
  subsystem,
  team,
} from "../../../lib/util/selectorProps";

export async function formAction(formData: FormData) {
  const rawFormData = {
    teamId: formData.get(team.name),
    subsystemId: formData.get(subsystem.name),
    assemblyId: formData.get(assembly.name),
    fileName: formData.get("fileNameInput"),
  };

  console.log(JSON.stringify(rawFormData));
  // const fetch_data = await fetch(`${process.env.API_URL}/`, {
  //   cache: "no-store",
  //   method: "POST",
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(rawFormData),
  // });
  // const data = await fetch_data.json();
  return;
}
