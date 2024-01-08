import { Link } from 'react-router-dom'
import Navbar from "./navbar-sign"

const Signup = props => {
  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = '/login';
  }
  return (
    <div className="signup">
      <Navbar></Navbar>
      <div className="signup-container">
        <div className="signup-para">
          <h1>Sign Up!</h1>
          <p>Enter your details to get started.</p>
        </div>
        <form onSubmit={handleSubmit} className="signup-form">
          <label className="signup-first-att">First Name:</label>
          <input
            type="text"
            placeholder="First Name"
            name='firstName'
            className="signup-att box"
          />
          <label className="signup-att">Last Name:</label>
          <input
            type="text"
            name='lastName'
            placeholder="Last Name"
            className="signup-att box"
          />
          <label className="signup-att">Email:</label>
          <input type="email" name="email" className="signup-att box" placeholder="Email" />
          <label className="signup-att">Phone.no:</label>
          <input
            type="number"
            name='phoneNumber'
            className="signup-att box"
            placeholder="Phone.no"
          />
          <label className="signup-att">Password:</label>
          <input
            type="password"
            name='password'
            className="signup-att box"
            placeholder="Password"
          />
          <button
            type="submit"
            name=""
            id=""
            className="signup-att box btn-primary"
          >Submit</button>
        </form>
        <p>
          Already have a account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  )
}

export default Signup
