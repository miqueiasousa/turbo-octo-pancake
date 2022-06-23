enum Variant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

interface ButtonProps {
  children: React.ReactNode
  variant?: `${Variant}`
}

const VARIANT_MAPS: Record<Variant, string> = {
  [Variant.PRIMARY]: 'bg-green-500  hover:bg-green-700',
  [Variant.SECONDARY]:
    'border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-gray-500'
}

export default function Button({
  children,
  variant = Variant.PRIMARY
}: ButtonProps) {
  return (
    <a
      href=""
      className={`p-4 text-sm flex items-center rounded font-bold uppercase gap-2 justify-center transition-colors ${VARIANT_MAPS[variant]}`}
    >
      {children}
    </a>
  )
}
