import './App.css'
import Display from "./components/display"
import Navbar from './components/navBar'
import Section from "./components/section"
import ContactForm from "./components/forms"

function App() {
  return (
    <div className='bg-[#f2eba2]'>
      <Navbar
        title="Smitski Collections"
        items={[
          { label: "Yoga", href: "#yoga" },
          { label: "Excercising", href: "#exercising" },
          { label: "Work", href: "#work" },
        ]}
      />
      <Section id="yoga" title="Yoga">
        <div className="p-6 flex flex-wrap gap-6 justify-center">
          <Display
            titulo="Lotus Pose"
            imagenUrl="https://smiski.com/e/wp-content/uploads/2019/09/img_yoga_01.png"
          />
          <Display
            titulo="Twist Pose"
            imagenUrl="https://smiski.com/e/wp-content/uploads/2019/09/img_yoga_02.png"
          />
          <Display
            titulo="Shouldstand Pose"
            imagenUrl="https://smiski.com/e/wp-content/uploads/2019/09/img_yoga_03.png"
          />
          <Display
            titulo="Triangle Pose"
            imagenUrl="https://smiski.com/e/wp-content/uploads/2019/09/img_yoga_04.png"
          />
          <Display
            titulo="Tree Pose"
            imagenUrl="https://smiski.com/e/wp-content/uploads/2019/09/img_yoga_05.png"
          />
          <Display
            titulo="Ship Pose"
            imagenUrl="https://smiski.com/e/wp-content/uploads/2019/09/img_yoga_06.png"
          />
      </div>
    </Section>
    <Section id="exercising" title="Exercising">
        <div className="p-6 flex flex-wrap gap-6 justify-center">
          <Display
            titulo="Doing Crunches"
            imagenUrl="https://smiski.com/e/wp-content/uploads/2023/05/img_doingcrunches.png"
          />
          <Display
            titulo="Aerobics"
            imagenUrl="https://smiski.com/e/wp-content/uploads/2023/05/img_aerobics.png"
          />
          <Display
            titulo="Little SMISKI Balance"
            imagenUrl="https://smiski.com/e/wp-content/uploads/2023/05/img_balance.png"
          />
          <Display
            titulo="Dumbbell"
            imagenUrl="https://smiski.com/e/wp-content/uploads/2023/05/img_dumbbell.png"
          />
          <Display
            titulo="Hoop"
            imagenUrl="https://smiski.com/e/wp-content/uploads/2023/05/img_hulahoop.png"
          />
          <Display
            titulo="Stretch"
            imagenUrl="https://smiski.com/e/wp-content/uploads/2023/05/img_stretch.png"
          />
      </div>
    </Section>
    <Section id="work" title="Work">
        <div className="p-6 flex flex-wrap gap-6 justify-center">
          <Display
            titulo="Approving"
            imagenUrl="https://smiski.com/wp-content/uploads/2022/02/img_work_products_01.png"
          />
          <Display
            titulo="Researching"
            imagenUrl="https://smiski.com/wp-content/uploads/2022/02/img_work_products_02.png"
          />
          <Display
            titulo="Presenting"
            imagenUrl="https://smiski.com/wp-content/uploads/2022/02/img_work_products_03.png"
          />
          <Display
            titulo="Good Idea"
            imagenUrl="https://smiski.com/wp-content/uploads/2022/02/img_work_products_04.png"
          />
          <Display
            titulo="On the Rord"
            imagenUrl="https://smiski.com/wp-content/uploads/2022/02/img_work_products_05.png"
          />
          <Display
            titulo="Little SMISKI Group Think"
            imagenUrl="https://smiski.com/wp-content/uploads/2022/02/img_work_products_06.png"
          />
      </div>
    </Section>
    <div className="p-6">
      <ContactForm />
    </div>
    <footer className="mt-4 rounded-lg bg-[#a2d170] p-3 text-sm">
    © 2026 Mi sitio
  </footer>
  </div>
  )
}

export default App
