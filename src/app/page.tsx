import { getUserListData, getUserData } from "@services/home";

interface userListDataProps {
  id: number;
  email: string;
  "first_name": string;
  "last_name": string;
}

export default async function Home() {
  const sampleId = 10;
  const { data: userListData } = await getUserListData();
  const { data: userData } = await getUserData(sampleId);

  console.log(userData?.data);

  return (
    <>
      <ul className="flex flex-col gap-10">
        {userListData?.data.map((user: userListDataProps) => {
          const { id, email, first_name, last_name } = user;
          return (<li key={id}>
            <div>{first_name} {last_name}</div>
            <div>{email}</div>
          </li>);
        })}
      </ul>
    </>
  );
}
