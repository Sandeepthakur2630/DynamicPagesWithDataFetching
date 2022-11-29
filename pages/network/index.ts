const ENDPOINT = "https://api.flowboard.skyrockets.space";
const LETS_QA_ENDPOINT = "https://api.letsqa.fun";

export const post = ({
  route,
  data,
  config,
  endpoint,
  token,
}: Params): Promise<any> => {
  return fetch((endpoint || ENDPOINT) + route, {
    method: "POST", // or 'PUT'
    headers: {
      ...config?.headers,
      Authorization: "Bearer " + token,
    },
    body: data,
  }).then((response) => response.json());
};

type Config = {
  headers: object;
};

type Params = {
  route: string;
  config?: Config;
  endpoint?: string;
  token?: string;
  data?: any;
};
