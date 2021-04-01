import ListRepos from './ListRepos'
import ListUsers from './ListUsers'
import {
  TYPE_LIST_NOT_FOUND,
  TYPE_LIST_REPOS,
  TYPE_LIST_STARRED,
  TYPE_LIST_USERS
} from '../../constants/contants'
import { ViewGitContext } from '../../contexts/ViewGitContext'
import { useContext } from 'react'
import * as S from './styles'

const Main: React.FC = () => {
  const { listActive } = useContext(ViewGitContext)

  return (
    <S.Wrapper>
      {listActive === '' && (
        <S.MessageNoSearch>
          Procure por usuários do Git, por seus repositórios ou mesmo pelos
          repositórios mais acessado por este usuário.
        </S.MessageNoSearch>
      )}
      {listActive === TYPE_LIST_USERS && <ListUsers />}
      {(listActive === TYPE_LIST_REPOS || listActive === TYPE_LIST_STARRED) && (
        <ListRepos />
      )}
      {listActive === TYPE_LIST_NOT_FOUND && (
        <S.MessageNoSearch>Nenhum resultado encontrado.</S.MessageNoSearch>
      )}
    </S.Wrapper>
  )
}

export default Main
