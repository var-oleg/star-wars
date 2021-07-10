import { HTTP, HTTPS } from "@constants/api";

/** Заміна HTTP на HTTPS
 *
 * @param {String} url HTTP
 * @returns HTTPS
 */

export const changeHTTP = (url) => {
  const result = url ? url.replace(HTTP, HTTPS) : url;
  return result;
};

export const getApiResource = async (url) => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.error("ERROR", res.status);
      return false;
    }
    return await res.json();
  } catch (error) {
    console.error("ERROR!!!!!!!!!!!", error.message);
    return false;
  }
};

// Promise
// getApiResource('https://swapi.dev/api/people')
//         .then(res => console.log(res.results));

// (async() => {
//     const res = await getApiResource('https://swapi.dev/api/people');
//     console.log(res.results);
// })();

export const makeConcurrentRequest = async (url) => {
  const res = await Promise.all(
    url.map((res) => {
      return fetch(res).then((res) => res.json());
    })
  );

  return res;
};
