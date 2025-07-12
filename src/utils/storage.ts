import Cookies from 'js-cookie';

export const getCookies = <T>(key: string): T | undefined => {
  const cookie = Cookies.get(key);

  if (cookie) return JSON.parse(cookie);

  return undefined;
};

export const removeCookies = (key: string) => {
  Cookies.remove(key, { path: '/', secure: true });
};

export const setCookies = (key: string, data: unknown, expiredDay = 1) => {
  if (data)
    Cookies.set(key, JSON.stringify(data), {
      expires: expiredDay,
      path: '/',
      secure: true,
      sameSite: 'None',
    });
};

export const getStorage = <T>(key: string): T | undefined => {
  const data = localStorage.getItem(key);

  if (data) {
    const parsedData = JSON.parse(data);
    if (new Date(parsedData.expirationDate) > new Date()) {
      return parsedData.value as T;
    }
    localStorage.removeItem(key);
  }

  return undefined;
};

export const removeStorage = (key: string) => {
  localStorage.removeItem(key);
};

export const setStorage = (
  key: string,
  data: unknown,
  expiredMinute = 1440
) => {
  if (data !== undefined) {
    const expirationDate = new Date(
      new Date().getTime() + expiredMinute * 60000
    ).toISOString();
    const storedData = {
      value: data,
      expirationDate: expirationDate,
    };
    localStorage.setItem(key, JSON.stringify(storedData));
  }
};
