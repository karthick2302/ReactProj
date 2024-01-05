import App from "./App"
import { Link } from "react-router-dom";
import Navbar from "./navbar-sign";

const Login = () => {
    return (
      <div className="login">
        <Navbar></Navbar>
        <div className="login-container">
          <div className="login-para">
            <h1>Welcome back!</h1>
            <p>We're delighted to have you here.</p>
          </div>
          <form action={App} className="login-form">
            <label className="login-att">Email:</label>
            <input type="email" className="login-att box" placeholder="Email" />
            <label className="login-att">Password:</label>
            <input
              type="passsword"
              className="login-att box"
              placeholder="Password"
            />
            <input
              type="submit"
              name=""
              id=""
              className="login-att box btn-primary"
            />
          </form>
          <p>
            Don't have an account? <Link to="/signup">Signup</Link>
          </p>
        </div>
      </div>
    )
}
 
export default Login; 