import { useEffect, useState } from 'react'
import { NavBar } from './Components/NavBar'
import './repos.css'

const url = 'http://localhost:3000/getRepos/David-j787'

export function Repos () {
  const [repos, setRepos] = useState([])

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setRepos([...data]))
  }, [])

  return (
    <div>
      <NavBar isInHome={{
        res: false
      }}
      />
      <div id='titleContainerRepo'>
        <h1 id='title'>Here are some of my projects</h1>
      </div>
      <div id='listContainerRepo'>
        {
        repos.map((r) => {
          return (
            <div key={r[0]} className='cardContainer'>
              <h1 key={r.name}>{r.name[0].toUpperCase() + r.name.substring(1)}</h1>
              <h2>{r.visibility[0].toUpperCase() + r.visibility.substring(1)}</h2>
              <a href={r.html_url} id='btn_red' target='_blank' rel='noreferrer'>
                <button id='btn_text'>See this repository</button>
              </a>
            </div>
          )
        })
      }
      </div>
    </div>
  )
}
