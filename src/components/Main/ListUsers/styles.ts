import styled from 'styled-components'
import Image from 'next/image'

export const ListUserTitle = styled.h3`
  font: 600
    ${(props) => props.theme.measures.large + ` ` + props.theme.font.primary};
  margin: 1.5rem auto;
  width: 100%;
  text-align: center;
`

export const ListUsers = styled.ul`
  width: 100%;
  max-width: 100rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  list-style: none;
  padding: 1rem;
`

export const UserForList = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  box-shadow: 0 0 5px 1px ${(props) => props.theme.colors.boxShadow};
  border: 1px solid ${(props) => props.theme.colors.boxShadow};
  width: 15rem;
  min-height: 15rem;

  .u-text__bold {
    font-weight: bold;
  }

  @media (min-width: 767px) {
    display: grid;
    grid-template: 'image info';
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0.5rem;
    width: 25rem;
  }
`

export const ContentUserInfo = styled.figure`
  grid-area: image;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 767px) {
    flex-direction: column;
  }
`

export const UserImage = styled(Image)`
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  background: ${(props) => props.theme.colors.boxShadow};

  @media (min-width: 767px) {
    margin-bottom: ${(props) => props.theme.measures.small};
  }
`

export const UserName = styled.figcaption`
  text-align: center;
  font: 400
    ${(props) => props.theme.measures.small + ` ` + props.theme.font.primary};
`

export const UserRepoInfo = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  height: 100%;
  padding: 1rem 0;
`

export const UserText = styled.p`
  font: 400
    ${(props) => props.theme.measures.small + ` ` + props.theme.font.primary};
`

export const UserPerfil = styled.a`
  padding: ${(props) => props.theme.measures.bigSmall};
  text-decoration: none;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.white};
  transition: 0.2s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
  }

  svg {
    margin-right: 0.5rem;
  }
`
