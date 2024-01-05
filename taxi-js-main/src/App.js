import image1 from "./undraw_order_ride_re_372k.svg"
import Navbar from "./navbar.js";
import { Link } from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="app-imp">
        <div className="app-con">
          <h1>
            Your trust is our priority: Secure bookings, transparent policies,
            and responsive support for a worry-free taxi experience.
          </h1>
          <Link className="btn-primary" to="/signup">Book Now</Link>
        </div>
        <img src={image1} alt="pic" />
      </div>
    </div>
  )
}

export default App;
