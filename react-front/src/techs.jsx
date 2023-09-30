import { NavBar } from './Components/NavBar'
import './techs.css'

export function Techs () {
  return (
    <div>
      <NavBar
        isInHome={{
          res: false
        }}
      />
      <h1>Techs</h1>
      <div id='titleContainerTechs'>
        <h1>
          <span id='titleTechs'> This technologies were used for the challenge</span>
        </h1>
      </div>
      <div className='sliderContainer'>
        <section>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png' />
          <img src='https://admin.davidson.fr/wp-content/uploads/nestjs-logo.png' />
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/2078px-Vitejs-logo.svg.png' />
          <img src='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png' />
        </section>
      </div>
    </div>
  )
}
