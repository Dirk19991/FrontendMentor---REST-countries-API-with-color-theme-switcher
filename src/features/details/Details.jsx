import { useParams, useNavigate } from 'react-router-dom';
import { Oval } from 'react-loader-spinner';
import { useEffect } from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { Wrapper } from './DetailsStyles';
import { Button } from './Button.tsx';
import { Info } from './Info.tsx';
import { setCountry } from './detailsSlice';
import { useDispatch, useSelector } from 'react-redux';

export const Details = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const country = useSelector((state) => state.details.country);
  const dispatch = useDispatch();

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
