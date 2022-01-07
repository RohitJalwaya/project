import React from "react";
import { Link } from "react-router-dom";
const Signup = (props) => {

    return (


        <div class="wrapper">
            <h2>SignUp</h2>
            <form action="backend.php" >
                <div class="input-box">
                    <input type="text" name="username" placeholder="Enter your name"
                        required />
                </div>
                <div class="input-box">
                    <input type="text" name="email" placeholder="Enter your email"
                        required />
                </div>
                <div class="input-box">
                    <input type="password" name="password" placeholder="Enter password"
                        required />
                </div>
                <div class="input-box">
                    <input type="date" name="dob" placeholder="Enter Your DOB"
                        required />
                </div>
                <div class="input-box">
                    <input type="text" name="gender" placeholder="Enter Your Gender" v
                        required />
                </div>

                <div class="input-box button">
                    <input type="Submit" value="Register Now" />
                </div>
                <div class="text">
                    <h3>Already have an account?<Link to="/login" label="Login" >Login</Link>
                    </h3>

                </div>
                {/* checking for props finctioning */}
                <div>
                    <h3>I am {props.name}</h3>
                </div>
            </form>
        </div>
    )
}
export default Signup;