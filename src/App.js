import { useSelector } from 'react-redux'
import { Title } from './styled/Title'
import { Section } from './styled/Section'
import Form from './Componets/Form/Form'
import Search from './Componets/Search/Search'
import Display from './Componets/Display/Display'
import { useGetContactsQuery } from './app/API/fetchMockApi'

function App() {
  const state = useSelector((state) => state)
  console.log('state', state)

  const { data, error, isLoading } = useGetContactsQuery('')

  console.log('data', data)
  console.log('error', error)
  console.log('isLoading', isLoading)

  return (
    <Section>
      {/*  */}
      <Title>Phonebook</Title>
      {/* <Form contacts={contacts} /> */}
      {/*  */}
      <Title as='h2'>Contacts</Title>
      <Search />
      {/* {isLoading ? <>loading</> : <Display contacts={[...data, filter]} />} */}
      {/*  */}
    </Section>
  )
}

export default App
