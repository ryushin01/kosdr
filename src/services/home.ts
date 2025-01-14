import { createAxiosInstance } from "@services";

// interface PassengerDataProps {
//   name: string;
//   trips: number;
//   airline: number;
// }

// GET
export const getAirlinesListData = () => createAxiosInstance.get("/airlines");

// GET with param
export const getAirlineData = (id: string) => createAxiosInstance.get(`/airlines/${id}`);

// GET with multiple params
export const getPassengerListData = ({
                                       page = 1,
                                       size = 10,
                                     }: {
  page: number,
  size: number,
}) => createAxiosInstance.get(`/passenger?page=${page}&size=${size}`);

// POST
export const postAirlineData = ({
                                  _id, name, country, logo, slogan, head_quarters, website, established,
                                }: {
  _id: string,
  name: string,
  country: string,
  logo: string,
  slogan: string,
  head_quarters: string,
  website: string,
  established: string,
}) => createAxiosInstance.post("/airlines", {
  _id, name, country, logo, slogan, head_quarters, website, established,
});

// POST
// export const createHomeData = ({ title, body, userId }: homeDataProps) => createAxiosInstance.post("/posts", {
//   title,
//   body,
//   userId,
// });