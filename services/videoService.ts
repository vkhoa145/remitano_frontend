const api = process.env.NEXT_PUBLIC_API_BASE_URL;

export const getVideos = async () => {
  const res = await fetch(`${api}/video`, {
    method: 'GET'
  })

  if (!res.ok) {
    throw new Error(`Error: ${res.status}`)
  }

  console.log('jhhhhhhhhhhh')
  return res.json()
}