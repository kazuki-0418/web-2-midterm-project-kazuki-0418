import { useParams } from "@remix-run/react";

const Tv = () => {
  const { id } = useParams();

  return <div>tv.{id}</div>;
};

export default Tv;
