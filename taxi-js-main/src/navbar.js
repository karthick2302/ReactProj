import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <h1 className="navbar-brand">Taxi</h1>
        <div className="right-side">
          <a className="nav-link">About</a>
          <Link to="/login" className='nav-link'>Login</Link>
          <Link to="/signup" className="btn btn-blue">
            Signup
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
