import { setCookie } from "@/utils/cookie";

const api = process.env.NEXT_PUBLIC_API_BASE_URL;

export const authenticate = async (email: string, password: string) => {
  const response = await fetch(`${api}/auth`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password })
  });

  if (!response.ok) {
    throw new Error('Login failed');
  };

  const data = await response.json();
  setCookie(data.token, 'accessToken')
  setCookie(email, 'email')
  return data;
}
