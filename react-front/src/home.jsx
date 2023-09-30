import { useEffect, useState } from 'react'
import { NavBar } from './Components/NavBar'
import './home.css'

const url = 'http://localhost:3000/getRepoCommits/David-j787/FTF-Challenge-David'

export function Home () {
  const [commits, setCommits] = useState([])

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setCommits([...data]))
  }, [])

  return (
    <div>
      <NavBar isInHome={{
        res: true
      }}
      />
      <div id='titleContainer'>
        <h1>
          <span id='colorTitle'>The following </span>
          <span id='title'>commits were used for this challenge</span>
        </h1>
      </div>
      <div id='listContainer'>
        {
        commits.map(c => {
          return (
            <div key={c[0]} className='cardContainer'>
              <h1 key={c.commit.message}>{c.commit.message}</h1>
              <h2 key={c.commit.author.date}>Date: {c.commit.author.date}</h2>
              <h3>Comment count: {c.commit.comment_count}</h3>
            </div>
          )
        })
      }
      </div>
    </div>
  )
}
