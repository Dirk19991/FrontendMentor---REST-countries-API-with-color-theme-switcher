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
import { setNeighbors } from './neighborsSlice';
import { RootState } from '../../app/store';
import { AppDispatch } from '../../app/store';
import { NavigateFunction } from 'react-router-dom';

interface Currency {
  code: string;
  name: string;
  symbol: string;
}

interface Language {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}

export interface InfoProps {
  name: string;
  nativeName: string;
  flag: string;
  capital: string;
  population: number;
  region: string;
  subregion: string;
  topLevelDomain: string[];
  currencies: Currency[];
  languages: Language[];
  borders: string[];
  navigate: NavigateFunction;
}

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
}: InfoProps) => {
  const neighbors = useSelector(
    (state: RootState) => state.neighbors.neighbors
  );

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    if (borders.length) {
      dispatch(setNeighbors(borders));
    }
  }, [borders, dispatch]);

  console.log(
    currencies.reduce((acc, elem, index) => {
      return index === 0 ? acc : acc + ', ' + elem.name;
    }, currencies[0].name)
  );

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
                : currencies.map((currency, index) =>
                    index === 0 ? (
                      <span key={currency.code}>
                        {currencies.reduce((acc, elem, index) => {
                          return index === 0 ? acc : acc + ', ' + elem.name;
                        }, currencies[0].name)}
                      </span>
                    ) : (
                      ''
                    )
                  )}
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
