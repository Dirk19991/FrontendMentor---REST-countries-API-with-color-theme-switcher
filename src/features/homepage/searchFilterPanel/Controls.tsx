import { useEffect } from 'react';
import { Search } from './Search';
import { CustomSelect } from './CustomSelect';
import { Wrapper } from './ControlsStyles';
import { useSelector, useDispatch } from 'react-redux';
import { setRegion } from './searchSlice';
import { RootState } from '../../../app/store';
import { ActionMeta } from 'react-select';

const options = [
  { value: 'Africa', label: 'Africa' },
  { value: 'America', label: 'America' },
  { value: 'Asia', label: 'Asia' },
  { value: 'Europe', label: 'Europe' },
  { value: 'Oceania', label: 'Oceania' },
];

interface ControlsProps {
  onSearch: (search?: string, region?: string) => void;
}

interface SelectEvent {
  value?: string;
  label?: string;
}

export const Controls = ({ onSearch }: ControlsProps) => {
  const searchValue = useSelector((state: RootState) => state.search.search);
  const regionValue = useSelector((state: RootState) => state.search.region);

  const dispatch = useDispatch();

  const handleChange = (
    option: SelectEvent | null,
    actionMeta: ActionMeta<SelectEvent>
  ) => {
    dispatch(setRegion(option ? option.value : ''));
  };

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
        // @ts-ignore
        onChange={handleChange}
      />
    </Wrapper>
  );
};
