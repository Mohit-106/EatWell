import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import '../Styles/login.css'

function Reset() {

    const history = useHistory();
    const [otp, otpSet] = useState("")
    const [password, passwordSet] = useState("");
    const [confirmPassword, confirmPasswordSet] = useState("")
    const [email, emailSet] = useState("");
    const [loading, setLoading] = useState(false);
    const {login, user} = useContext(AuthContext);
    const {ResetPassword} = useContext(AuthContext);


    const handleReset = async () => {
        try {
            // console.log(email,password)
            await ResetPassword(otp,password,confirmPassword,email)
            history.push("/")
          } catch(err) {
            console.log(err);
          }
    }

    return (
        <div className="container-grey">
            <div className="form-container">
                <div className='h1Box'>
                    <h1 className='h1'>Reset Password</h1>
                    <div className="line"></div>
                </div>

                <div className="loginBox">
                    <div className="entryBox">
                        <div className="entryText">OTP</div>
                        <input className="email input" type="text" name="otp" placeholder="Your Email" required="" onChange={(e) => otpSet(e.target.value)} />
                    </div>
                    <div className="entryBox">
                        <div className="entryText">Password</div>
                        <input className="password input" type="password" name="Password" placeholder="**********" onChange={(e) => passwordSet(e.target.value)} />
                    </div>
                    <div className="entryBox">
                        <div className="entryText">Confirm Password</div>
                        <input className="password input" type="password" name="Password" placeholder="**********" onChange={(e) => confirmPasswordSet(e.target.value)} />
                    </div>
                    <div className="entryBox">
                        <div className="entryText">Email</div>
                        <input className="password input" type="password" name="Password" placeholder="**********" onChange={(e) => emailSet(e.target.value)} />
                    </div>
                    <button className="loginBtn  form-button" type="submit" onClick={handleReset}>
                        Reset
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Reset;