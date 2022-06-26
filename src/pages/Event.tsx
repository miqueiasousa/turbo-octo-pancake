import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import Player from '../components/Player'
import Sidebar from '../components/Sidebar'

type Params = {
  slug: string
}

export default function Event() {
  const { slug } = useParams<Params>()

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        {slug ? <Player lessonSlug={slug} /> : <div className="flex-1"></div>}
        <Sidebar />
      </main>
    </div>
  )
}
