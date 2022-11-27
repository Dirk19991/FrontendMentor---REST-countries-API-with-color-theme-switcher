import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchCountries } from './countriesSlice';
import { Controls } from './searchFilterPanel/Controls';
import { List } from './List';
import { Card } from '../card/Card';
import { useDispatch, useSelector } from 'react-redux';
import { filterCountries } from './countriesSlice';
import { RootState } from '../../app/store';
import { useCallback } from 'react';
import { AppDispatch } from '../../app/store';

export const Homepage = () => {
  const countries = useSelector(
    (state: RootState) => state.countries.countries
  );
  const filteredCountries = useSelector(
    (state: RootState) => state.countries.filteredCountries
  );

  const dispatch = useDispatch<AppDispatch>();
  let navigate = useNavigate();

  const handleSearch = useCallback(
    (search?: string, region?: string) => {
      console.log(search, region);
      let data = countries;

      if (region) {
        data = data.filter((country) => country.region.includes(region));
      }

      if (search) {
        data = data.filter((country) =>
          country.name.toLowerCase().includes(search.toLowerCase())
        );
      }
      dispatch(filterCountries(data));
    },
    [countries, dispatch]
  );

  useEffect(() => {
    if (!countries.length) {
      dispatch(fetchCountries());
    }
  }, [countries.length, dispatch]);

  useEffect(() => {
    handleSearch();
  }, [countries, handleSearch]);

  return (
    <>
      <Controls onSearch={handleSearch} />
      <List>
        {filteredCountries.map((country) => {
          const countryInfo = {
            img: country.flags.png,
            name: country.name,
            info: [
              {
                title: 'Population',
                description: country.population.toLocaleString(),
              },
              {
                title: 'Region',
                description: country.region,
              },
              {
                title: 'Capital',
                description: country.capital,
              },
            ],
          };

          return (
            <Card
              key={country.name}
              onClick={() => navigate(`/country/${country.name}`)}
              {...countryInfo}
            />
          );
        })}
      </List>
    </>
  );
};
