import { format } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'

const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const formatLessonAvailbleAt = (date: Date) => {
  const formattedDate = format(date, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
    locale: ptBr
  })

  return capitalizeFirstLetter(formattedDate)
}
