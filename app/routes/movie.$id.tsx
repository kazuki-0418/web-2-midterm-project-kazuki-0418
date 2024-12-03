import { useParams } from "@remix-run/react";

const movie = () => {
  const params = useParams();

  const { id } = params;

  return <div>movie.{id}</div>;
};

export default movie;
