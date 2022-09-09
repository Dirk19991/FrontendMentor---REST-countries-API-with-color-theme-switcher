import { useParams } from 'react-router-dom';

export const Details = () => {
  let { name } = useParams();

  return <div>Details for {name}</div>;
};
