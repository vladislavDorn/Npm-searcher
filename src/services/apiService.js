export default class ApiService {
  __baseUrl = "http://registry.npmjs.com/-/v1/search";

  getData = async (name, offset=0) => {
    const data = await fetch(
      `${this.__baseUrl}?text=${name}&size=10&from=${offset}`
    );

    if (!data.ok) {
      throw new Error(`Error: ${data.status}`);
    } else {
      return data.json();
    }
  };
}
