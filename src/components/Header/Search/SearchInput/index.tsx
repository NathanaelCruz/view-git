import React, { useContext } from 'react'
import { FolderSpecial, Folder, Search } from '@styled-icons/material'
import * as S from './styles'
import { ButtonSearch } from '../SearchButton/styles'
import { ViewGitContext } from '../../../../contexts/ViewGitContext'

const SearchInput: React.FC = () => {
  const {
    searchUser,
    userSearch,
    setUserSearch,
    isOpenModalError,
    setListForRepos,
    setListForReposStarred
  } = useContext(ViewGitContext)

  const setUserName = (str: string) => {
    str === ''
      ? isOpenModalError('Por favor, preencha o campo de usuário do GitHub.')
      : searchUser(str)
  }

  const searchReposUser = () => {
    userSearch === ''
      ? isOpenModalError('Por favor, preencha o campo de usuário do GitHub.')
      : setListForRepos()
  }

  const searchRepoStarredUser = () => {
    userSearch === ''
      ? isOpenModalError('Por favor, preencha o campo de usuário do GitHub.')
      : setListForReposStarred()
  }

  return (
    <S.ContainerSearch role="search" className="c-search">
      <S.InputSearchContent role="group">
        <S.InputSearch
          type="search"
          value={userSearch}
          placeholder="Usuário GitHub Aqui!"
          onChange={(e) => setUserSearch(e.target.value.replace(/ +/g, ''))}
        />
        <S.InputSearchButton
          type="button"
          onClick={() => setUserName(userSearch)}
          data-testid="button-search-name-user"
        >
          <Search size={16} />
        </S.InputSearchButton>
      </S.InputSearchContent>
      <S.ContentButtons role="group" className="c-search__buttons">
        <ButtonSearch
          type="button"
          className="c-search__repo"
          onClick={() => searchReposUser()}
        >
          <Folder size={16} />
          Repos
        </ButtonSearch>
        <ButtonSearch
          type="button"
          className="c-search__starred"
          onClick={() => searchRepoStarredUser()}
        >
          <FolderSpecial size={16} />
          Starred
        </ButtonSearch>
      </S.ContentButtons>
    </S.ContainerSearch>
  )
}

export default SearchInput
