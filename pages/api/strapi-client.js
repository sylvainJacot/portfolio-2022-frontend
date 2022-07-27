export default class StrapiClient {
  constructor() {}

  async fetchData(path) {
    const requestUrl = this._getStrapiURL(path);
    const response = await fetch(requestUrl);
    const data = await response.json();
    console.log(data);
    return data;
  }

  _getStrapiURL(path = "") {
    return `${process.env.NEXT_PUBLIC_STRAPI_URL}${path}`;
  }
}
