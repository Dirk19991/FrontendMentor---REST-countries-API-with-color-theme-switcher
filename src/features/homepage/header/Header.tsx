import React from 'react';
import { useEffect } from 'react';
import { HeaderEl, Title, ModeSwitcher, Wrapper } from './HeaderStyles';
import { Container } from '../Container';
import { IoMoonOutline, IoMoon } from 'react-icons/io5';
import { useSelector, useDispatch } from 'react-redux';
import { changeTheme } from './themeSlice';
import { RootState } from '../../../app/store';

export const Header = () => {
  const dispatch = useDispatch();

  const theme = useSelector((state: RootState) => state.theme.theme);

  const toggleTheme = () =>
    dispatch(changeTheme(theme === 'light' ? 'dark' : 'light'));

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  });

  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title>Where is the world?</Title>
          <ModeSwitcher onClick={toggleTheme}>
            {theme === 'light' ? (
              <IoMoonOutline size='14px' />
            ) : (
              <IoMoon size='14px' />
            )}{' '}
            <span style={{ marginLeft: '0.75rem' }}>{theme} Theme</span>
          </ModeSwitcher>
        </Wrapper>
      </Container>
    </HeaderEl>
  );
};
