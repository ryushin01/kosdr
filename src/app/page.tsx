import { getHomeData } from "@services/home";

interface homeDataProps {
  id: number;
  title: string;
}

export default async function Home() {
  const { data: homeData } = await getHomeData();

  return (
    <ul>
      {homeData.map((item: homeDataProps) => {
        const { id, title } = item;
        return (<li key={id}>{title}</li>);
      })}
    </ul>
  );
}
