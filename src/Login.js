import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div class="wrapper">
      <h2>Login</h2>
      <form action="backend.php" >
        <div class="input-box">
          <input type="text" name="username" placeholder="Enter your name"
            required />
        </div>

        <div class="input-box">
          <input type="password" name="password" placeholder="Enter password"
            required />
        </div>



        <div class="input-box button">
          <input type="Submit" value="Login Now" />
        </div>
        <div class="text">
          <h3>Forgot Password?<Link to="/forgotpassword" label="Forgotpassword" >Reset Password</Link></h3>
          <h3>New User?<Link to="/" label="Signup" >Signup</Link>
          </h3>

        </div>
      </form>
    </div>
  )
}
export default Login;