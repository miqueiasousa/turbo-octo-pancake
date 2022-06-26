import { gql, useMutation } from '@apollo/client'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CREATE_SUBSCRIBER_MUTATION = gql`
  mutation CreateSubscriberMutation($name: String!, $email: String!) {
    createSubscriber(data: { name: $name, email: $email }) {
      id
    }
  }
`

export default function Form() {
  const [state, setState] = useState({
    name: '',
    email: ''
  })
  const [createSubscriber, { loading }] = useMutation(
    CREATE_SUBSCRIBER_MUTATION
  )
  const navigate = useNavigate()

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setState({
      ...state,
      [name]: value
    })
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    await createSubscriber({
      variables: state
    })

    navigate('/event')
  }

  return (
    <form action="" className="flex flex-col gap-2 w-full" onSubmit={onSubmit}>
      <input
        className="bg-gray-900 rounded px-5 h-14"
        type="text"
        placeholder="Seu nome completo"
        name="name"
        value={state.name}
        onChange={onChange}
      />
      <input
        className="bg-gray-900 rounded px-5 h-14"
        type="email"
        placeholder="Digite seu e-mail"
        name="email"
        value={state.email}
        onChange={onChange}
      />
      <button
        className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
        type="submit"
        disabled={loading}
      >
        Garantir minha vaga
      </button>
    </form>
  )
}
