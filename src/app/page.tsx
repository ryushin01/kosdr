import { ResponsiveGridSystem } from "@components/common";

export default function Home() {
  return (
    <div>
      <ResponsiveGridSystem mobile={1} tablet={2} desktop={3}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </ResponsiveGridSystem>
    </div>
  );
}
