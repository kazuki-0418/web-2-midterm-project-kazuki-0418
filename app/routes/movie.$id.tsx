import { useParams } from "@remix-run/react";

const MovieDetail = () => {
  const params = useParams();

  const { id } = params;

  return <div>movie.{id}</div>;
};

export default MovieDetail;
