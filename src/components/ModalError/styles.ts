import styled from 'styled-components'

export const ContainerModal = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`

export const ModalError = styled.div`
  width: 100%;
  max-width: 42rem;
  height: 15rem;
  padding: ${(props) => props.theme.measures.small};
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

export const ModalErrorHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
`

export const ModalErrorTitle = styled.h3`
  font: 600
    ${(props) => props.theme.measures.medium + ` ` + props.theme.font.primary};
`

export const ModalErrorClose = styled.button`
  border: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.black};
  transition: 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
  }
`

export const ModalErrorBody = styled.p`
  line-height: 1.5;
`
