import React from "react";
// import { useCookies } from 'react-cookie';
import Cookies from "universal-cookie";

export const saveCookie = (name: string, value: any) => {
  const expires = new Date();
  expires.setDate(expires.getDate() + 14);

  const valueString = JSON.stringify(value);

  const cookies = new Cookies();

  cookies.set(name, value, { expires });

  // const [cookie,setCookie] = useCookies([name])

  // setCookie(name,valueString)
};

export const getCookie = (name: string) => {
  // const [cookie,setCookie] = useCookies([name])

  const cookies = new Cookies();

  return cookies.get(name);
};

export const removeCookie = (name: string) => {
  const cookies = new Cookies();

  cookies.remove(name);
};
