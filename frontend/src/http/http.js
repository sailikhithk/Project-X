/** post requests **/
export const post = (url = "", payload = {}) => {
  return new Promise(async (resolve, reject) => {
    const headers = {
      "Content-Type": "application/json",
    };
    const requestOptions = {
      headers,
      method: "POST",
      body: JSON.stringify(payload),
    };

    try {
      const response = await fetch(url, requestOptions);
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};
