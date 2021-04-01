import styled from 'styled-components'

export const Wrapper = styled.main`
  background-color: transparent;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 2em;
  margin-top: ${(props) => props.theme.measures.bigSmall};
`
export const MessageNoSearch = styled.p`
  text-align: center;
  font: 400
    ${(props) => props.theme.measures.large + ` ` + props.theme.font.primary};
  margin: 5rem auto;
  max-width: 100rem;
`
