import { CaretRight } from 'phosphor-react'

interface BannerButtonProps {
  icon: React.ReactNode
  label: string
  description: string
}

export default function BannerButton({
  icon,
  label,
  description
}: BannerButtonProps) {
  return (
    <a
      href=""
      className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors"
    >
      <div className="bg-green-700 h-full p-6 flex items-center">{icon}</div>
      <div className="py-6 leading-relaxed">
        <strong className="text-2xl">{label}</strong>
        <p className="text-sm text-gray-200 mt-2">{description}</p>
      </div>
      <div className="h-full p-6 flex items-center">
        <CaretRight size={24} className="text-blue-500" />
      </div>
    </a>
  )
}
