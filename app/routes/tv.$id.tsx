import { useParams } from "@remix-run/react";

const TvDetail = () => {
  const { id } = useParams();

  return <div>tv.{id}</div>;
};

export default TvDetail;
