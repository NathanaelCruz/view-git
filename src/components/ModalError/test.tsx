import { render, screen } from '@testing-library/react'

import { ThemeProvider } from 'styled-components'
import theme from '../../styles/theme'

import ModalError from './index'

describe('Modal Error', () => {
  it('Deverá renderizar o modal de error', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <ModalError message="Preencha um campo válido" />
      </ThemeProvider>
    )

    expect(container).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('Deverá renderizar um role dialog', () => {
    render(
      <ThemeProvider theme={theme}>
        <ModalError message="Preencha um campo válido" />
      </ThemeProvider>
    )
    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })

  it('Deverá renderizar um role document', () => {
    render(
      <ThemeProvider theme={theme}>
        <ModalError message="Preencha um campo válido" />
      </ThemeProvider>
    )
    expect(screen.getByRole('document')).toBeInTheDocument()
  })

  it('Deverá renderizar uma message', () => {
    render(
      <ThemeProvider theme={theme}>
        <ModalError message="Preencha um campo válido" />
      </ThemeProvider>
    )
    expect(screen.getByText(/preencha um campo válido/i)).toBeInTheDocument()
  })
})
