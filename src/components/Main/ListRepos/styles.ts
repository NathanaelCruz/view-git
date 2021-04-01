import styled from 'styled-components'
import Image from 'next/image'

export const ListRepoTitle = styled.h3`
  font: 600
    ${(props) => props.theme.measures.large + ` ` + props.theme.font.primary};
  margin: 1.5rem auto;
  width: 100%;
  text-align: center;
`
export const ListRepositories = styled.ul`
  width: 100%;
  max-width: 100rem;
  padding: ${(props) => props.theme.measures.bigSmall};
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`

export const ListRepositoryItem = styled.li`
  width: 50%;
  max-width: 20rem;
  height: 20rem;
  margin-bottom: ${(props) => props.theme.measures.bigSmall};
  border-radius: 5px;
  box-shadow: 0 0 5px 1px ${(props) => props.theme.colors.boxShadow};
  border: 1px solid ${(props) => props.theme.colors.boxShadow};

  &:hover {
    .u-text__bgGray {
      background-color: ${(props) => props.theme.colors.primary};
    }

    .c-repo__star {
      color: ${(props) => props.theme.colors.gold};
    }

    .c-repo__watcher {
      color: ${(props) => props.theme.colors.blue};
    }
  }

  @media (min-width: 767px) {
    max-width: 24rem;
  }
`

export const ListRepositoryOwnerGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.5rem 0;

  &.u-list__repoStarred {
    background-color: ${(props) => props.theme.colors.gold};
    border-radius: 5px;
  }
`

export const ListRerositoryOwnerImage = styled(Image)`
  border-radius: 50%;
  background: ${(props) => props.theme.colors.boxShadow};
`

export const ListRerositoryOwnerName = styled.strong`
  font: 600
    ${(props) => props.theme.measures.small + ` ` + props.theme.font.primary};
  text-align: center;
`

export const ListRepositoryLink = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colors.text};
  padding: ${(props) => props.theme.measures.small};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`

export const ListRepositoryText = styled.p`
  font-size: ${(props) => props.theme.measures.small};
  margin-bottom: 1rem;

  &.u-text__bgGray,
  .c-repo__star,
  .c-repo__watcher {
    transition: 0.2s ease-in-out;
  }

  &.u-text__bold {
    font-weight: 600;
  }

  &.u-text__bgGray {
    background-color: ${(props) => props.theme.colors.grayDark};
    padding: 0.5rem;
    border-radius: 5px;
    color: ${(props) => props.theme.colors.white};
  }

  &.u-text__tag {
    width: 6rem;
  }

  &.c-repo__watchesStars {
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      margin-right: 0.5rem;
    }
  }
`
