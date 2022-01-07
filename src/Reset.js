import React from "react";
import { Link } from "react-router-dom";
const Reset = (props) => {
    return (<div class="wrapper">
        <h2>Reset Password</h2>
        <form action="backend.php" >
            <div class="input-box">
                <input type="number" name="otp" placeholder="Enter OTP"
                    required />
            </div>

            <div class="input-box button">
                <h3><Link to="/reset" label="Reset" >Reset Now</Link></h3>
            </div>

           <div class="input-box button">
                 
                     <h3>I am {props.name}</h3>
           </div>



        </form>
    </div>)
}
export default Reset;