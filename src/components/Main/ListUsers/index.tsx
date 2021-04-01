import React, { useContext } from 'react'
import { validateForAmountCharacteres } from '../../../utils/utils'
import { Visibility } from '@styled-icons/material'
import * as S from './styles'
import { ViewGitContext } from '../../../contexts/ViewGitContext'

const ListUsers: React.FC = () => {
  const { listUsers } = useContext(ViewGitContext)
  return (
    <>
      <S.ListUserTitle>LISTA DE USUÁRIOS</S.ListUserTitle>
      <S.ListUsers className="l-list">
        {listUsers.map((user) => {
          return (
            <S.UserForList className="c-list__user" key={`user-${user.login}`}>
              <S.ContentUserInfo className="c-list__contentPerfil">
                <S.UserImage
                  src={user.image}
                  width={70}
                  height={70}
                  alt={user.name}
                  className="c-list__imageUser"
                />
                <S.UserName
                  className="c-list__text u-text__bold"
                  title={user.name}
                >
                  {validateForAmountCharacteres(user.name, 25)}
                </S.UserName>
              </S.ContentUserInfo>
              <S.UserRepoInfo
                role="group"
                className="c-list__contentRepositoryInfo"
              >
                <S.UserText className="c-list__text">
                  <strong>
                    {validateForAmountCharacteres(user.login, 14)}
                  </strong>
                </S.UserText>
                <S.UserText className="c-list__text">
                  <strong>{user.followers}</strong> Seguidores
                </S.UserText>
                <S.UserText className="c-list__text">
                  <strong>{user.repositories}</strong> Repositórios
                </S.UserText>
                <S.UserPerfil
                  target="_blank"
                  href={user.perfilLink}
                  className="c-list__linkPerfil"
                >
                  <Visibility size={16} />
                  Ver Perfil
                </S.UserPerfil>
              </S.UserRepoInfo>
            </S.UserForList>
          )
        })}
      </S.ListUsers>
    </>
  )
}

export default ListUsers
