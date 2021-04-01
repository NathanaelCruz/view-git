import styled from 'styled-components'

export const ContainerSearch = styled.form`
  grid-area: search;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: ${(props) => props.theme.measures.bigSmall};
`

export const InputSearchContent = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  @media (min-width: 767px) {
    width: 50%;
  }
`

export const InputSearch = styled.input`
  padding: 0.9rem 1.3rem 0.9rem 0.9rem;
  border-radius: 5px;
  width: 95%;
`

export const InputSearchButton = styled.button`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.black};
  transition: 0.2s ease-in-out;
  border: none;
  color: ${(props) => props.theme.colors.white};
  position: absolute;
  z-index: 5;
  right: 0;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
  }
`

export const ContentButtons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.5rem;

  @media (min-width: 767px) {
    width: 45%;
    margin-top: 0;
  }
`
