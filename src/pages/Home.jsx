import { useState } from 'react';
import { searchForShows } from '../api/tvmaze';
import { searchForPeople } from '../api/tvmaze';
const Home = () => {
  const [SearchStr, setSearchStr] = useState('');
  const [apiData, setApiData] = useState(null);
  const [apiDataError, setApiDataError] = useState(null);
  const [searchOption, setSearchOption] = useState('shows');

  const onRadioChange = ev => {
    setSearchOption(ev.target.value);
  };

  const onSearchInputChane = ev => {
    setSearchStr(ev.target.value);
  };

  const onSearch = async ev => {
    ev.preventDefault();

    try {
      setApiDataError(null);

      if (searchOption === 'shows') {
        const results = await searchForShows(SearchStr);
        setApiData(results);
      } else {
        const results = await searchForPeople(SearchStr);
        setApiData(results);
      }
    } catch (error) {
      setApiDataError(error);
    }
  };

  const renderApiData = () => {
    if (apiDataError) {
      return <div>Error occuerd: {apiDataError.message}</div>;
    }

    if (apiData) {
      return apiData[0].show
        ? apiData.map(data => <div key={data.show.id}>{data.show.name}</div>)
        : apiData.map(data => (
            <div key={data.person.id}>{data.person.name}</div>
          ));
    }
    return null;
  };

  return (
    <div>
      <form onSubmit={onSearch}>
        <input type="text" value={SearchStr} onChange={onSearchInputChane} />

        <label>
          Shows
          <input
            type="radio"
            name="search-option"
            checked={searchOption === 'shows'}
            onChange={onRadioChange}
            value="shows"
          />
        </label>

        <label>
          Actors
          <input
            type="radio"
            name="search-option"
            checked={searchOption === 'actors'}
            onChange={onRadioChange}
            value="actors"
          />
        </label>

        <button type="submit">Search</button>
      </form>

      <div>{renderApiData()}</div>
    </div>
  );
};

export default Home;
