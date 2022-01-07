import React from "react";
import { Link } from "react-router-dom";
const Forgotpassword=()=>{
    return (
        <div class="wrapper">
        <h2>Reset Password</h2>
        <form action="backend.php" >
            <div class="input-box">
                <input type="text" name="username" placeholder="Enter your Register Mobile Number"
                    required />
            </div>
       
            <div class="input-box button">
              <h3><Link to="/reset"  label="Reset" >Reset Now</Link></h3>
            </div> 
           
           

            {/* <div class="input-box button">
                <input type="Submit" value="Reset Now" />
            </div> */}
           
        </form>
    </div>
    )
}
export default Forgotpassword;