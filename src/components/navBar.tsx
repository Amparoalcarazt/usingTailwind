type NavItem = {
  label: string
  href: string
}

type NavbarProps = {
  title: string
  items: NavItem[]
}

export default function Navbar({ title, items }: NavbarProps) {
  return (
    <nav className="flex justify-between items-center px-6 py-3 bg-[#a2d170]">
      <div className = "font-bold text-4xl">{title}</div>

      <div className ="flex gap-4">
        {items.map((item) => (
          <a key={item.href} href={item.href} className ="flex rounded-lg 16px hover:text-white hover:bg-green-700" >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  )
}