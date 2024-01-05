import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <h1 className="navbar-brand">Taxi</h1>
        <div className="sign-right-side">
          <Link to="/" className="btn btn-blue">
            Back
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
