import styled from 'styled-components'

export const ButtonSearch = styled.button`
  min-width: 46%;
  border: none;
  padding: ${(props) => props.theme.measures.bigSmall};
  border-radius: 5px;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.grayDark};
  transition: 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
  }

  svg {
    margin-right: 0.5rem;
  }
`
