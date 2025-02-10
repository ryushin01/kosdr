import { Error } from "@components/error-boundary";
import { FallbackProps } from "react-error-boundary";

const Fallback = ({ error }: FallbackProps) => {
  const status = error.response?.status || "500";
  console.log(status);

  return (
    <Error />
  );
};

export default Fallback;
