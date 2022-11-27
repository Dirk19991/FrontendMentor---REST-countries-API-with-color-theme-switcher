import { useParams, useNavigate } from 'react-router-dom';
import { Oval } from 'react-loader-spinner';
import { useEffect } from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { Wrapper } from './DetailsStyles';
import { Button } from './Button';
import { Info } from './Info';
import { setCountry } from './detailsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { AppDispatch } from '../../app/store';

export const Details = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const country = useSelector((state: RootState) => state.details.country);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(setCountry(name));
  }, [name, dispatch]);

  return (
    <div style={{ position: 'relative', minHeight: '500px' }}>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </Button>
      {country ? (
        <Info navigate={navigate} {...country} />
      ) : (
        <Wrapper>
          <Oval />
        </Wrapper>
      )}
    </div>
  );
};
