import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Wrapper,
  InfoTitle,
  ListGroup,
  InfoImage,
  List,
  ListItem,
  Meta,
  Tag,
  TagGroup,
} from './InfoStyles';
import { setNeighborss } from './neighborsSlice';

export const Info = ({
  name,
  nativeName,
  flag,
  capital,
  population,
  region,
  subregion,
  topLevelDomain,
  currencies = [],
  languages = [],
  borders = [],
  navigate,
}) => {
  const neighbors = useSelector((state) => state.neighbors.neighbors);

  const dispatch = useDispatch();
  useEffect(() => {
    if (borders.length) {
      dispatch(setNeighborss(borders));
    }
  }, [borders, dispatch]);

  return (
    <Wrapper>
      <InfoImage src={flag} alt={name} />

      <div>
        <InfoTitle>{name}</InfoTitle>
        <ListGroup>
          <List>
            <ListItem>
              <b>Native Name:</b> {nativeName}
            </ListItem>

            <ListItem>
              <b>Population:</b> {population}
            </ListItem>
            <ListItem>
              <b>Region:</b> {region}
            </ListItem>
            <ListItem>
              <b>Subregion:</b> {subregion}
            </ListItem>
            <ListItem>
              <b>Capital:</b> {capital}
            </ListItem>
          </List>
          <List>
            <ListItem>
              <b>Top Level Domain:</b>{' '}
              {topLevelDomain.length < 2
                ? topLevelDomain.map((domain) => (
                    <span key={domain}>{domain}</span>
                  ))
                : topLevelDomain
                    .join(', ')
                    .split('')
                    .map((domain, index) => <span key={index}>{domain}</span>)}
            </ListItem>
            <ListItem>
              <b>Currency:</b>{' '}
              {currencies.length < 2
                ? currencies.map((currency) => (
                    <span key={currency.code}>{currency.name}</span>
                  ))
                : currencies
                    .join(', ')
                    .split('')
                    .map((currency) => (
                      <span key={currency.code}>{currency.name}</span>
                    ))}
            </ListItem>
            <ListItem>
              <b>Languages:</b>{' '}
              {languages.length < 2
                ? languages.map((language) => (
                    <span key={language.name}>{language.name}</span>
                  ))
                : languages
                    .map((language) => language.name)
                    .join(', ')
                    .split('')
                    .map((language, index) => (
                      <span key={index}>{language}</span>
                    ))}
            </ListItem>
          </List>
        </ListGroup>
        <Meta>
          <b>Border Countries</b>
          {!borders.length ? (
            <span>There are no countries that border this country</span>
          ) : (
            <TagGroup>
              {neighbors?.map((b) => (
                <Tag key={b} onClick={() => navigate(`/country/${b}`)}>
                  {b}
                </Tag>
              ))}
            </TagGroup>
          )}
        </Meta>
      </div>
    </Wrapper>
  );
};
