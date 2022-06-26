import { DefaultUi, Player as PlayerVime, Youtube } from '@vime/react'
import { DiscordLogo, FileArrowDown, Image, Lightning } from 'phosphor-react'
import { gql, useQuery } from '@apollo/client'

import BannerButton from './BannerButton'
import Button from './Button'

import '@vime/core/themes/default.css'

interface GetLessonBySlugQueryResponse {
  lesson: {
    title: string
    videoId: string
    description: string
    teacher: {
      name: string
      avatarURL: string
      bio: string
    }
  }
}

interface PlayerProps {
  lessonSlug: string
}

const GET_LESSON_BY_SLUG_QUERY = gql`
  query GetLessonBySlug($slug: String) {
    lesson(where: { slug: $slug }) {
      title
      videoId
      description
      teacher {
        bio
        avatarURL
        name
      }
    }
  }
`

export default function Player({ lessonSlug }: PlayerProps) {
  const { data } = useQuery<GetLessonBySlugQueryResponse>(
    GET_LESSON_BY_SLUG_QUERY,
    {
      variables: {
        slug: lessonSlug
      }
    }
  )

  if (!data) {
    return (
      <div className="flex-1">
        <p>Carregando...</p>
      </div>
    )
  }

  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <PlayerVime>
            <Youtube videoId={data.lesson.videoId} />
            <DefaultUi />
          </PlayerVime>
        </div>
      </div>
      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">{data.lesson.title}</h1>
            <p className="mt-4 text-gray-200 leading-relaxed">
              {data.lesson.description}
            </p>
            <div className="flex items-center gap-4 mt-6">
              <img
                className="h-16 w-16 rounded-full border-2 border-blue-500"
                src={data.lesson.teacher.avatarURL}
                alt={data.lesson.teacher.name}
              />
              <div className="leading-relaxed">
                <strong className="font-bold text-2xl block">
                  {data.lesson.teacher.name}
                </strong>
                <span className="text-gray-200 text-sm block">
                  {data.lesson.teacher.bio}
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <Button>
              <DiscordLogo size={24} />
              Comunidade do Discord
            </Button>
            <Button variant="secondary">
              <Lightning size={24} />
              Acesse o desafio
            </Button>
          </div>
        </div>
        <div className="gap-8 mt-20 grid grid-cols-2">
          <BannerButton
            icon={<FileArrowDown size={40} />}
            label="Material complementar"
            description="Acesse o material complementar para acelerar o seu desenvolvimento"
          />
          <BannerButton
            icon={<Image size={40} />}
            label="Wallpapers exclusivos"
            description="Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina"
          />
        </div>
      </div>
    </div>
  )
}
