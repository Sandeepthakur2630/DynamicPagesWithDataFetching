import { post } from "..";

export const loginApi = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  const data = new FormData();
  data.append("username", username);
  data.append("password", password);

  return post({ route: "/api/v1/login", data });
};
