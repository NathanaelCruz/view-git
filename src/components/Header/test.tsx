import { fireEvent, render, screen } from '@testing-library/react'
import Header from './index'
import { ViewGitProvider } from '../../contexts/ViewGitContext'
import { ThemeProvider } from 'styled-components'
import theme from '../../styles/theme'

describe('Component Header', () => {
  it('Deverá renderizar um header', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    )

    expect(container.firstChild).toMatchSnapshot()
    expect(screen.getByRole('banner')).toBeInTheDocument()
  })

  it('Deverá renderizar um h1', () => {
    render(
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    )

    expect(screen.getByRole('heading')).toBeInTheDocument()
  })

  it('Deverá renderizar um input search e três botões', () => {
    render(
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    )

    expect(screen.getByRole('search')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /starred/i }))
    expect(screen.getByRole('button', { name: /repos/i }))
    expect(screen.getByTestId('button-search-name-user'))
  })

  it('Deverá renderizar o pop-up de campo não preenchido ao pesquisar usuário vazio', () => {
    render(
      <ThemeProvider theme={theme}>
        <ViewGitProvider>
          <Header />
        </ViewGitProvider>
      </ThemeProvider>
    )

    fireEvent.click(screen.getByTestId('button-search-name-user'))

    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })

  it('Deverá renderizar o pop-up de campo não preenchido ao pesquisar repositórios de usuário vazio', () => {
    render(
      <ThemeProvider theme={theme}>
        <ViewGitProvider>
          <Header />
        </ViewGitProvider>
      </ThemeProvider>
    )

    fireEvent.click(screen.getByRole('button', { name: /repos/i }))
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    fireEvent.click(screen.getByTestId('button-close-modal'))
    fireEvent.click(screen.getByRole('button', { name: /starred/i }))
    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })
})
