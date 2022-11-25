import { useEffect } from 'react';
import { Search } from './Search';
import { CustomSelect } from './CustomSelect';
import { Wrapper } from './ControlsStyles';
import { useSelector, useDispatch } from 'react-redux';
import { setRegion } from './searchSlice';
const options = [
  { value: 'Africa', label: 'Africa' },
  { value: 'America', label: 'America' },
  { value: 'Asia', label: 'Asia' },
  { value: 'Europe', label: 'Europe' },
  { value: 'Oceania', label: 'Oceania' },
];

export const Controls = ({ onSearch }) => {
  const searchValue = useSelector((state) => state.search.search);
  const regionValue = useSelector((state) => state.search.region);

  const dispatch = useDispatch();

  useEffect(() => {
    onSearch(searchValue, regionValue);
  }, [searchValue, regionValue, onSearch]);
  return (
    <Wrapper>
      <Search />
      <CustomSelect
        options={options}
        placeholder='Filter by region'
        isClearable
        isSearchable={false}
        onChange={(e) => {
          dispatch(setRegion(e === null ? '' : e.value));
        }}
      />
    </Wrapper>
  );
};
