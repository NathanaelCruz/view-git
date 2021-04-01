import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Main from './Main'
import Header from '../Header/index'
import { ThemeProvider } from 'styled-components'
import theme from '../../styles/theme'
import { ViewGitProvider } from '../../contexts/ViewGitContext'

describe('Componente de Listagem', () => {
  it('Deverá renderizar um main', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <ViewGitProvider>
          <Main />
        </ViewGitProvider>
      </ThemeProvider>
    )

    expect(container.firstChild).toMatchSnapshot()
    expect(screen.getByRole('main')).toBeInTheDocument()
  })

  it('Deverá renderizar uma lista de usuários', async () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <ViewGitProvider>
          <>
            <Header />
            <Main />
          </>
        </ViewGitProvider>
      </ThemeProvider>
    )

    userEvent.type(screen.getByRole('searchbox'), 'NathanaelCruz')
    userEvent.click(screen.getByTestId('button-search-name-user'))

    await waitFor(() => {
      screen.getByRole('heading', { level: 3 })
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('Deverá renderizar uma lista de repositórios', async () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <ViewGitProvider>
          <>
            <Header />
            <Main />
          </>
        </ViewGitProvider>
      </ThemeProvider>
    )

    userEvent.type(screen.getByRole('searchbox'), 'NathanaelCruz')
    userEvent.click(screen.getByRole('button', { name: /repos/i }))

    await waitFor(() => {
      screen.getByRole('heading', { level: 3 })
    })

    expect(container.firstChild).toMatchSnapshot()
  })
})
