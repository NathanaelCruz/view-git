import React, { ReactNode } from 'react'
import * as S from './styles'

type SearchButtonProps = {
  children?: ReactNode
}

const SearchButton: React.FC<SearchButtonProps> = ({ children }) => {
  return (
    <S.ButtonSearch type="button" className="c-search__button">
      {children}
    </S.ButtonSearch>
  )
}

export default SearchButton
