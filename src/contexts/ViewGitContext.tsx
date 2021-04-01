/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios'
import ModalError from '../components/ModalError'
import {
  TYPE_LIST_NOT_FOUND,
  TYPE_LIST_REPOS,
  TYPE_LIST_STARRED,
  TYPE_LIST_USERS,
  URL_GIT
} from '../constants/contants'
import { createContext, ReactNode, useEffect, useState } from 'react'

type ViewGitProviderProps = {
  children: ReactNode
}

type ListUser = {
  image: string
  name: string
  login: string
  followers: number
  repositories: number
  perfilLink: string
}

type ListRepos = {
  image: string
  login: string
  repoName: string
  privateOrPublic: string
  language: string
  RepoLink: string
  watchers: number
  stars: number
  fork: string
}

type ViewGitContextProps = {
  isOpenModalError: (msg: string) => void
  listUsers: Array<ListUser>
  listRepos: Array<ListRepos>
  searchUser: (str: string) => void
  listActive: string
  setUserSearch: (str: string) => void
  userSearch: string
  setListForRepos: () => void
  classNameList: string
  setListForReposStarred: () => void
}

export const ViewGitContext = createContext({} as ViewGitContextProps)

export function ViewGitProvider({ children }: ViewGitProviderProps) {
  const [isModalErroActive, setModalErrorActive] = useState(false)
  const [modalErrorMessage, setModalErrorMessage] = useState(
    'Preencha de forma válida'
  )
  const [listRepos, setListRepos] = useState<ListRepos[]>([])
  const [listUsers, setListUsers] = useState<ListUser[]>([])
  const [listActive, setListActive] = useState('')
  const [userSearch, setUserSearch] = useState('')
  const [classNameList, setClassNameList] = useState('')

  useEffect(() => {
    userSearch === '' && setListActive('')
  }, [userSearch])

  const isOpenModalError = (msg: string) => {
    setModalErrorActive(!isModalErroActive)
    setModalErrorMessage(msg)
  }

  const setListForUsers = async (name: string) => {
    const list = await axios.get(URL_GIT + name)

    const listUsers: ListUser[] = list.data.message
      ? []
      : [list.data].map((user) => {
          return {
            image: user.avatar_url,
            name: user.name,
            login: user.login,
            followers: user.followers,
            repositories: user.public_repos,
            perfilLink: user.html_url
          }
        })
    listUsers.length > 0
      ? setListActive(TYPE_LIST_USERS)
      : setListActive(TYPE_LIST_NOT_FOUND)
    setListUsers(listUsers)
  }

  const setListForRepos = async () => {
    const list = await axios.get(URL_GIT + userSearch + '/repos')

    const listRepos: ListRepos[] = list.data.message
      ? []
      : list.data.map((repo: any) => {
          return {
            image: repo.owner.avatar_url,
            login: repo.owner.login,
            repoName: repo.name,
            privateOrPublic: repo.private ? 'Privado' : 'Público',
            language: repo.language,
            RepoLink: repo.html_url,
            watchers: repo.watchers,
            stars: repo.stargazers_count,
            fork: repo.fork ? 'Fork' : ''
          }
        })
    listRepos.length > 0
      ? setListActive(TYPE_LIST_REPOS)
      : setListActive(TYPE_LIST_NOT_FOUND)

    setListRepos(listRepos)
    setClassNameList('u-list__repoOnly')
  }

  const setListForReposStarred = async () => {
    const list = await axios.get(URL_GIT + userSearch + '/starred')

    const listRepos: ListRepos[] = list.data.map((repo: any) => {
      return {
        image: repo.owner.avatar_url,
        login: repo.owner.login,
        repoName: repo.name,
        privateOrPublic: repo.private ? 'Privado' : 'Público',
        language: repo.language,
        RepoLink: repo.html_url,
        watchers: repo.watchers,
        stars: repo.stargazers_count,
        fork: repo.fork ? 'Fork' : ''
      }
    })
    listRepos.length > 0
      ? setListActive(TYPE_LIST_STARRED)
      : setListActive(TYPE_LIST_NOT_FOUND)

    setListRepos(listRepos)
    setClassNameList('u-list__repoStarred')
  }

  const searchUser = (str: string) => {
    setUserSearch(str)
    setListForUsers(str)
  }

  return (
    <ViewGitContext.Provider
      value={{
        isOpenModalError,
        listUsers,
        listRepos,
        searchUser,
        listActive,
        userSearch,
        setUserSearch,
        setListForRepos,
        classNameList,
        setListForReposStarred
      }}
    >
      {children}
      {isModalErroActive && <ModalError message={modalErrorMessage} />}
    </ViewGitContext.Provider>
  )
}
