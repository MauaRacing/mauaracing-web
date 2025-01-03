"use server";

export async function contactAction(formData: FormData) {
  const rawFormData = Object.fromEntries(formData);
  const fetchData = await fetch(`${process.env.API_URL}/email`, {
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
}
