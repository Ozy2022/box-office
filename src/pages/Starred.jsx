import { useStarredShows } from '../lib/useStarredShows';

const Starred = () => {
  const [starredShows] = useStarredShows();

  return <div>Starred page, sttared {starredShows.length}</div>;
};

export default Starred;
