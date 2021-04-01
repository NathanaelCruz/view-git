import styled from 'styled-components'

export const Header = styled.header`
  background-color: ${(props) => props.theme.colors.black};
  width: 100%;
  min-height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: ${(props) => props.theme.measures.bigSmall};

  @media (min-width: 767px) {
    display: grid;
    grid-template: 'logo . search search . .';
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 1rem;
  }
`

export const HeaderLink = styled.a`
  grid-area: logo;
  text-decoration: none;
  cursor: pointer;
  color: ${(props) => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
`

export const HeaderTextTitle = styled.h1`
  font: 600
    ${(props) => props.theme.measures.large + ` ` + props.theme.font.heading};
  color: ${(props) => props.theme.colors.heading};
`
