import './navbar.css'

export function NavBar ({ isInHome }) {
  return (
    <div id='navContainer'>
      <div id='container'>
        <div id='imgContainer'>
          <img id='logo' src='https://uploads-ssl.webflow.com/643458de4c12c42a070ce23a/64dcc8c9fad4ead0c55b75ed_Vectors-Wrapper.svg' />
          <h1>Challenge</h1>
        </div>
        <nav id='nav'>
          {isInHome.res === false ? <a href='/' className='commonA'>Home</a> : <></>}
          <a href='/repos' className='commonA'>My repos</a>
          <a href='/techs' id='techBtn'>Technologies</a>
        </nav>
      </div>
    </div>
  )
}
