import { useParams } from 'react-router-dom';
import { getShowById } from '../api/tvmaze';
import { useQuery } from '@tanstack/react-query';

//#1 fetch show data solution by useEffect() logic

// const useShowById = showId => {
//   const [showData, setShowData] = useState(null);
//   const [showError, setShowError] = useState(null);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const data = await getShowById(showId);
//         setShowData(data);
//       } catch (err) {
//         setShowError(err);
//       }
//     }
//     fetchData();
//   }, [showId]);

//   return [showData, showError];
// };

const Show = () => {
  const { showId } = useParams();
  //  1- S => const { showData, showError } = useShowById(showId);

  //#2 fetch show data solution by useQuery() hook
  //and that would avoide the repetition logic
  //and the <React.StrictMode> fetch data 
  //issue which would fetch the data only ones

  const { data: showData, error: showError } = useQuery({
    queryKey: ['show', showId],
    queryFn: () => getShowById(showId),
  });

  if (showError) {
    return <div>We have an error: {showError.message}</div>;
  }

  if (showData) {
    return <div>Got show data: {showData.name}</div>;
  }

  return <div>Data is Loading</div>;
};

export default Show;
