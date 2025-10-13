"use server";

const API_URL = process.env.API_URL;

export async function contactAction(formData: FormData) {
  emailAction(formData, "contact");
}

export async function becomeMemberAction(formData : FormData){
  emailAction(formData, "become-member");
}

export async function becomeSponsorAction(formData : FormData){
  emailAction(formData, "become-sponsor");
}

export async function emailAction(formData : FormData, endPoint : String){
  const rawFormData = Object.fromEntries(formData);
  console.log(rawFormData);
  const fetchData = await fetch(`${API_URL}/email/${endPoint}`, {
    cache: "no-store",
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(rawFormData),
  });
  const data = await fetchData.json();
  console.log(data);
  return;
}
