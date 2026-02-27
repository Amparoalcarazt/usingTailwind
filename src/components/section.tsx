type SectionProps = {
  id: string
  title: string
  children: React.ReactNode
}

function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="py-16 px-6 ">
      <h2 className="text-2xl font-bold mb-6 text-center">{title}</h2>
      {children}
      <div className="flex justify-center">
        <a className="mt-6 px-6 py-2 rounded-lg bg-[#a2d170] hover:bg-green-700 transition" 
        href="https://smiski.com/e/products/">
          See more!</a>
      </div>
    </section>
  )
}

export default Section