import React from 'react'
import SearchInput from './Search/SearchInput'
import Link from 'next/link'
import { GridView } from '@styled-icons/material'
import * as S from './styles'

const Header: React.FC = () => {
  return (
    <S.Header className="l-header">
      <Link href="/">
        <S.HeaderLink className="c-header__logo">
          <GridView size={24} />
          <S.HeaderTextTitle className="c-header__title">
            View Git
          </S.HeaderTextTitle>
        </S.HeaderLink>
      </Link>
      <SearchInput />
    </S.Header>
  )
}

export default Header
