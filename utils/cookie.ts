export const setCookie = (accessToken: string, type: string) => {
  document.cookie = `${type}=${accessToken}; path=/; max-age=${24 * 60 * 60}`;
}

export const getCookie = (type: string): string | null => {
  if (typeof window === 'undefined') {
    return null;
  }
  const parts = document.cookie.split(';');

  const ele = parts.find(item => item.includes(type))
  if (!ele) {
    return null
  }

  return ele.split('=')[1]
};

export const deleteCookie = (type: string) => {
  document.cookie = `${type}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}
