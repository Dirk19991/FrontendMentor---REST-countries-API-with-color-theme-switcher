import styled from 'styled-components';

export const InputContainer = styled.label`
  background-color: var(--colors-ui-base);
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  width: 100%;
  margin-bottom: 1.5rem;

  @media (min-width: 767px) {
    margin: 0;
    width: 280px;
  }
`;

export const Input = styled.input.attrs({
  type: 'search',
  placeholder: 'Search for ',
})`
  margin-left: 2rem;
  border: none;
  outline: none;
  color: var(--color-text);
  background-color: var(--colors-ui-base);
`;
