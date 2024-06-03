import { useState } from 'react';
import { useSearchStr } from '../lib/useSearchStr';
const SearchForm = ({ onSearch }) => {
  const [searchOption, setSearchOption] = useState('shows');
  const [SearchStr, setSearchStr] = useSearchStr();

  const onRadioChange = ev => {
    setSearchOption(ev.target.value);
  };

  const onSearchInputChane = ev => {
    setSearchStr(ev.target.value);
  };

  const onSubmit = ev => {
    ev.preventDefault();

    const options = {
      q: SearchStr,
      searchOption,
    };
    onSearch(options);
  };

  return (
    <form onSubmit={onSubmit}>
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
  );
};

export default SearchForm;
