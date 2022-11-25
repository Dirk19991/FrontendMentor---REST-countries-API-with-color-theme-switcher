import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchCountries } from './countriesSlice';
import { Controls } from './searchFilterPanel/Controls';

import { List } from './List';
import { Card } from '../card/Card';
import { useDispatch, useSelector } from 'react-redux';
import { filterCountries } from './countriesSlice';
import React from 'react';
import { useCallback } from 'react';

export const Homepage = () => {
  const countries = useSelector((state) => state.countries.countries);
  const filteredCountries = useSelector(
    (state) => state.countries.filteredCountries
  );

  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleSearch = useCallback(
    (search, region) => {
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

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    handleSearch();
    // eslint-disable-next-line
  }, [countries]);

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
