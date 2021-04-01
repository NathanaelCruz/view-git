import Header from 'components/Header'
import Main from 'components/Main/Main'
import { ViewGitProvider } from '../contexts/ViewGitContext'

const HomeTemplate: React.FC = () => {
  return (
    <ViewGitProvider>
      <Header></Header>
      <Main></Main>
    </ViewGitProvider>
  )
}

export default HomeTemplate
