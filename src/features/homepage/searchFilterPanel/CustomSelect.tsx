import styled from 'styled-components';
import Select, { CSSObjectWithLabel } from 'react-select';
import { OptionProps } from 'react-select';
import { GroupBase } from 'react-select';

export const CustomSelect = styled(Select).attrs({
  styles: {
    control: (provided: CSSObjectWithLabel) => ({
      ...provided,
      backgroundColor: 'var(--colors-ui-base)',
      color: 'var(--colors-text)',
      borderRadius: 'var(--radius)',
      padding: '0.25rem',
      border: 'none',
      boxShadow: 'var(--shadow)',
      height: '50px',
    }),
    option: (
      provided: CSSObjectWithLabel,
      state: OptionProps<unknown, boolean, GroupBase<unknown>>
    ) => ({
      ...provided,
      cursor: 'pointer',
      color: 'var(--colors-text)',
      backgroundColor: state.isSelected
        ? 'var(--colors-bg)'
        : 'var(--colors-ui-base)',
    }),
    clearIndicator: (styles: CSSObjectWithLabel) => ({
      ...styles,
      cursor: 'pointer',
    }),
    dropdownIndicator: (styles: CSSObjectWithLabel) => ({
      ...styles,
      cursor: 'pointer',
    }),
  },
})`
  width: 200px;
  border-radius: var(--radius);
  font-family: var(--family);
  border: none;

  & > * {
    box-shadow: var(--shadow);
  }

  & * {
    color: var(--colors-text) !important;
  }

  & input {
    padding: 0.25rem;
  }

  & > div[id] {
    background-color: var(--colors-ui-base);
  }
`;
