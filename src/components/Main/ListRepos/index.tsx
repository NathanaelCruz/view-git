import { ViewGitContext } from '../../../contexts/ViewGitContext'
import React, { useContext } from 'react'
import { validateForAmountCharacteres } from '../../../utils/utils'
import { StarRate, Visibility } from '@styled-icons/material'
import * as S from './styles'

const ListRepos: React.FC = () => {
  const { listRepos, classNameList } = useContext(ViewGitContext)

  return (
    <>
      <S.ListRepoTitle>
        {classNameList === 'u-list__repoOnly'
          ? 'LISTA DE REPOSIÓRIOS'
          : 'LISTA DE REPOSITÓRIOS STARRED'}
      </S.ListRepoTitle>
      <S.ListRepositories className="l-list__repos">
        {listRepos.map((repo) => {
          return (
            <S.ListRepositoryItem
              className="c-list__repo"
              key={`repo-${repo.repoName}`}
            >
              <S.ListRepositoryLink
                href={repo.RepoLink}
                target="_blank"
                className="c-repo__link"
              >
                <S.ListRepositoryOwnerGroup
                  role="group"
                  className={`c-repo__ownerContent ${classNameList}`}
                >
                  <S.ListRerositoryOwnerImage
                    src={repo.image}
                    width={25}
                    height={25}
                    alt={repo.repoName}
                    className="c-repo__ownerImage"
                  />
                  <S.ListRerositoryOwnerName
                    className="c-repo__ownerName"
                    title={repo.login}
                  >
                    {validateForAmountCharacteres(repo.login, 25)}
                  </S.ListRerositoryOwnerName>
                </S.ListRepositoryOwnerGroup>
                <S.ListRepositoryText className="c-repo__name u-text__bold">
                  {repo.repoName}
                </S.ListRepositoryText>
                <S.ListRepositoryText className="c-repo__state">
                  Repositório {repo.privateOrPublic}
                </S.ListRepositoryText>
                {repo.fork !== null && repo.fork !== '' && (
                  <S.ListRepositoryText className="c-repo__language u-text__bgGray u-text__tag">
                    {repo.fork}
                  </S.ListRepositoryText>
                )}
                {repo.language !== null && (
                  <S.ListRepositoryText className="c-repo__language u-text__bgGray">
                    {repo.language}
                  </S.ListRepositoryText>
                )}
                <S.ListRepositoryText className="c-repo__watchesStars">
                  <StarRate
                    size={16}
                    className="c-repo__star"
                    title="Estrelas"
                  />
                  {repo.stars} |
                  <Visibility
                    size={16}
                    className="c-repo__watcher"
                    title="Observadores"
                  />{' '}
                  {repo.watchers}
                </S.ListRepositoryText>
              </S.ListRepositoryLink>
            </S.ListRepositoryItem>
          )
        })}
      </S.ListRepositories>
    </>
  )
}

export default ListRepos
