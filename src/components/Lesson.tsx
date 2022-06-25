import { CheckCircle, Lock } from 'phosphor-react'
import { isPast } from 'date-fns'

import { formatLessonAvailbleAt } from '../lib/date'

interface LessonProps {
  title: string
  slug: string
  availableAt: Date
  type: 'live' | 'class'
}

export default function Lesson({
  title,
  slug,
  availableAt,
  type
}: LessonProps) {
  return (
    <a href="" className="group">
      <span className="text-gray-300">
        {formatLessonAvailbleAt(availableAt)}
      </span>
      <div className="rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500">
        <header className="flex items-center justify-between">
          {isPast(availableAt) ? (
            <span className="flex items-center gap-2 text-sm text-blue-500 font-medium">
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="flex items-center gap-2 text-sm text-orange-500 font-medium">
              <Lock size={20} />
              Em breve
            </span>
          )}
          <span className="text-xs rounded py-[0.125rem] px-2 text-white border border-green-300 font-bold uppercase">
            {type === 'live' ? 'ao vivo' : 'Aula prática'}
          </span>
        </header>
        <strong className="text-gray-100 mt-5 block">{title}</strong>
      </div>
    </a>
  )
}
