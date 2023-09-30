import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './src/home'
import { Repos } from './src/repos'
import { Techs } from './src/techs'

export default function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/repos' element={<Repos />} />
        <Route path='/techs' element={<Techs />} />
      </Routes>
    </BrowserRouter>
  )
}
const root = createRoot(document.getElementById('app'))

root.render(<App />)
