import { createAxiosInstance } from "@services";

export const getHomeData = () => createAxiosInstance.get("/posts");