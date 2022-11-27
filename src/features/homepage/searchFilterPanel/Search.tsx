import { IoSearch } from 'react-icons/io5';
import { Input, InputContainer } from './SearchStyles';
import { useDispatch, useSelector } from 'react-redux';
import { setSearch } from './searchSlice';
import { RootState } from '../../../app/store';

export const Search = () => {
  const searchValue = useSelector((state: RootState) => state.search.search);
  const dispatch = useDispatch();
  return (
    <InputContainer>
      <IoSearch />
      <Input
        onChange={(e) => dispatch(setSearch(e.target.value))}
        value={searchValue}
      />
    </InputContainer>
  );
};
