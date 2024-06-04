import { useState } from 'react';
import { useSearchStr } from '../lib/useSearchStr';
import CustomRadio from './CustomRadio';

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

      <CustomRadio
        label="Shows"
        name="search-option"
        checked={searchOption === 'shows'}
        onChange={onRadioChange}
        value="shows"
      />

      <CustomRadio
        label="Actors"
        name="search-option"
        checked={searchOption === 'actors'}
        onChange={onRadioChange}
        value="actors"
      />


      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
