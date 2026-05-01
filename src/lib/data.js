export async function getAnimalsData () {
  const res = await fetch(`${process.env.BETTER_AUTH_URL}/animals.json`);
  return await res.json();
}