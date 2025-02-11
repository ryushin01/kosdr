import Image from "next/image";
import { SpinnerImage } from "@images";

const Spinner = () => {
  return (
    <div className="_spinner-backdrop">
      <Image src={SpinnerImage} alt="스피너 아이콘" className="_spinner" />
    </div>
  );
};

export default Spinner;
