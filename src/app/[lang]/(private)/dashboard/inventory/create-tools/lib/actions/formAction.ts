"use server";

import {
  bench_drawer,
  bench_locker,
  locker,
  locker_drawer,
  locker_shelf,
  subsystem,
  team,
  tool_bench,
  tool_type,
} from "../util/selectorProps";

export async function formAction(formData: FormData) {
  const rawFormData = {
    teamId: formData.get(team.name),
    subsystemId: formData.get(subsystem.name),
    lockerId: formData.get(locker.name),
    locker_drawerId: formData.get(locker_drawer.name),
    locker_shelfId: formData.get(locker_shelf.name),
    tool_benchId: formData.get(tool_bench.name),
    bench_drawerId: formData.get(bench_drawer.name),
    bench_lockerId: formData.get(bench_locker.name),
    tool_typeId: formData.get(tool_type.name),
  };

  console.log(JSON.stringify(rawFormData));
  const fetch_data = await fetch(`${process.env.API_URL}/tool-placement`, {
    cache: "no-store",
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(rawFormData),
  });
  const data = await fetch_data.json();
  return;
}
