import { createAxiosInstance } from "@services";

// interface getHomeDataList {
//   title: string;
//   body: string;
//   userId: number;
// }

// GET
export const getUserListData = () => createAxiosInstance.get("/users");

// GET with param
export const getUserData = (id: number) => createAxiosInstance.get(`/users/${id}`);

// GET with multiple params


// POST
// export const createHomeData = ({ title, body, userId }: homeDataProps) => createAxiosInstance.post("/posts", {
//   title,
//   body,
//   userId,
// });