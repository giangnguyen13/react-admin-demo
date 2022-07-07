import jsonServerProvider from "ra-data-json-server";
// import buildRestProvider from "ra-data-simple-rest";
// import buildStorageProvider from "ra-data-local-storage";
import { combineDataProviders } from "react-admin";
import fakeDataProvider from "ra-data-fakerest";
import { seed_data } from "../data/static_resource";

const dataProvider1 = jsonServerProvider(
  "https://jsonplaceholder.typicode.com"
);

const dataProvider2 = fakeDataProvider({
  static: seed_data(),
});

const dataProvider = combineDataProviders((resource) => {
  switch (resource) {
    case "static":
      return dataProvider2;
    default:
      return dataProvider1;
  }
});

export default dataProvider;

// import { fetchUtils } from "react-admin";
// import { stringify } from "query-string";

// const apiRoot = "https://my.api.com/";
// // const httpClient = fetchUtils.fetchJson;

// // Custom HTTPClient
// const httpClient = (url) => {
//   const options = {
//     headers: new Headers({ Accept: "application/json" }),
//   };
//   // const token = inMemoryJWT.getToken();
//   // if (token) {
//   //   options.headers.set("Authorization", `Bearer ${token}`);
//   // }

//   return fetchUtils.fetchJson(url, options);
// };

// export default {
//   getList: (resource, params) => {
//     const { page, perPage } = params.pagination;
//     const { field, order } = params.sort;
//     const query = {
//       sort: JSON.stringify([field, order]),
//       range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
//       filter: JSON.stringify(params.filter),
//     };
//     const endpoint = `${apiRoot}/${resource}?${stringify(query)}`;

//     return httpClient(endpoint).then(({ headers, json }) => ({
//       data: json,
//       total: parseInt(headers.get("content-range").split("/").pop(), 10),
//     }));
//   },

//   getList: (resource, params) => {
//     // transform a filter object to a filters array with operators
//     // filter is like { commentable: true, released_gte: '2018-01-01' }
//     const filter = params.filter;
//     const operators = {
//       _gte: ">=",
//       _lte: "<=",
//       _neq: "!=",
//       _lt_: "<",
//       _in_: "in",
//       _btw: "between",
//       _ctn: "contain",
//       _stw: "start_with",
//     };
//     // filters is like [
//     //    { field: "commentable", operator: "=", value: true},
//     //    { field: "released", operator: ">=", value: '2018-01-01'}
//     // ]
//     const filters = Object.keys(filter).map((key) => {
//       const operator = operators[key.slice(-4)];
//       return operator
//         ? { field: key.slice(0, -4), operator, value: filter[key] }
//         : { field: key, operator: "=", value: filter[key] };
//     });

//     const { page, perPage } = params.pagination;
//     const { field, order } = params.sort;
//     const query = {
//       sort: JSON.stringify([field, order]),
//       range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
//       pagination: params.pagination,
//       filter: filters,
//     };
//     const endpoint = `${apiRoot}/${resource}?${stringify(query)}`;
//     return httpClient(endpoint).then(({ json }) => ({
//       data: json,
//       total: parseInt(headers.get("content-range").split("/").pop(), 10),
//     }));
//   },

//   getOne: (resource, params) =>
//     httpClient(`${apiRoot}/${resource}/${params.id}`).then(({ json }) => ({
//       data: json,
//     })),

//   getMany: (resource, params) => {
//     const query = {
//       filter: JSON.stringify({ id: params.ids }),
//     };
//     const endpoint = `${apiRoot}/${resource}?${stringify(query)}`;
//     return httpClient(endpoint).then(({ json }) => ({ data: json }));
//   },

//   getManyReference: (resource, params) => {
//     const { page, perPage } = params.pagination;
//     const { field, order } = params.sort;
//     const query = {
//       sort: JSON.stringify([field, order]),
//       range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
//       filter: JSON.stringify({
//         ...params.filter,
//         [params.target]: params.id,
//       }),
//     };
//     const url = `${apiRoot}/${resource}?${stringify(query)}`;

//     return httpClient(url).then(({ headers, json }) => ({
//       data: json,
//       total: parseInt(headers.get("content-range").split("/").pop(), 10),
//     }));
//   },

//   update: (resource, params) =>
//     httpClient(`${apiRoot}/${resource}/${params.id}`, {
//       method: "PUT",
//       body: JSON.stringify(params.data),
//     }).then(({ json }) => ({ data: json })),

//   updateMany: (resource, params) => {
//     const query = {
//       filter: JSON.stringify({ id: params.ids }),
//     };
//     return httpClient(`${apiRoot}/${resource}?${stringify(query)}`, {
//       method: "PUT",
//       body: JSON.stringify(params.data),
//     }).then(({ json }) => ({ data: json }));
//   },

//   create: (resource, params) =>
//     httpClient(`${apiRoot}/${resource}`, {
//       method: "POST",
//       body: JSON.stringify(params.data),
//     }).then(({ json }) => ({
//       data: { ...params.data, id: json.id },
//     })),

//   delete: (resource, params) =>
//     httpClient(`${apiRoot}/${resource}/${params.id}`, {
//       method: "DELETE",
//     }).then(({ json }) => ({ data: json })),

//   deleteMany: (resource, params) => {
//     const query = {
//       filter: JSON.stringify({ id: params.ids }),
//     };
//     return httpClient(`${apiRoot}/${resource}?${stringify(query)}`, {
//       method: "DELETE",
//     }).then(({ json }) => ({ data: json }));
//   },
// };

// // // Authenticate API request with JWT token
// // (apiRoot) => {
// //   const httpClient = (url) => {
// //     const options = {
// //       headers: new Headers({ Accept: "application/json" }),
// //     };
// //     const token = inMemoryJWT.getToken();
// //     if (token) {
// //       options.headers.set("Authorization", `Bearer ${token}`);
// //     }

// //     return fetchUtils.fetchJson(url, options);
// //   };

// //   return {
// //     getList: (resource, params) => {
// //       const url = `${apiRoot}/${resource}`;
// //       return httpClient(url).then(({ headers, json }) => {
// //         return {
// //           data: json,
// //           total: headers.get("x-total-count"),
// //         };
// //       });
// //     },
// //     getOne: (resource, params) =>
// //       httpClient(`${apiRoot}/${resource}/${params.id}`).then(({ json }) => ({
// //         data: json,
// //       })),
// //     getMany: () => Promise.reject(),
// //     getManyReference: () => Promise.reject(),
// //     update: () => Promise.reject(),
// //     updateMany: () => Promise.reject(),
// //     create: () => Promise.reject(),
// //     delete: () => Promise.reject(),
// //     deleteMany: () => Promise.reject(),
// //   };
// // };
