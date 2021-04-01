import React, { useContext } from 'react'
import { Close } from '@styled-icons/material'
import * as S from './styles'
import { ViewGitContext } from '../../contexts/ViewGitContext'

type ModalErrorProps = {
  message: string
}

const ModalError: React.FC<ModalErrorProps> = ({ message }) => {
  const { isOpenModalError } = useContext(ViewGitContext)

  return (
    <S.ContainerModal role="dialog">
      <S.ModalError role="document">
        <S.ModalErrorHeader>
          <S.ModalErrorTitle>Ops! Algo está errado</S.ModalErrorTitle>
          <S.ModalErrorClose
            type="button"
            onClick={() => isOpenModalError('')}
            data-testid="button-close-modal"
          >
            <Close size={24} title="Ícone de X" />
          </S.ModalErrorClose>
        </S.ModalErrorHeader>
        <S.ModalErrorBody>{message}</S.ModalErrorBody>
      </S.ModalError>
    </S.ContainerModal>
  )
}

export default ModalError
