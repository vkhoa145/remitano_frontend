import { getCookie } from "@/utils/cookie";

const api = process.env.NEXT_PUBLIC_API_BASE_URL;

export const getVideos = async () => {
  const res = await fetch(`${api}/video`, {
    method: 'GET'
  })

  if (!res.ok) {
    throw new Error(`Error: ${res.status}`)
  }

  return res.json()
}

export const shareVideos = async (url: string) => {
  const token = getCookie('accessToken');
  const response = await fetch(`${api}/video/share`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({ url })
  });

  console.log('response:', response)
  if (!response.ok) {
    throw new Error('share video failed');
  };

  const data = await response.json();
  return data;
}