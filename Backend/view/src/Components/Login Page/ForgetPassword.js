import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import '../Styles/login.css'

function Forget() {

    const history = useHistory();
    const [email, emailSet] = useState("");
    const [loading, setLoading] = useState(false);
    const {user} = useContext(AuthContext);
    const {forgetPassword} = useContext(AuthContext);

    const handleForget = async () => {
        try {
            console.log(email)
            await forgetPassword(email)
            history.push("/resetPassword")
          } catch(err) {
            console.log(err);
          }
    }

    return (
        <div className="container-grey">
            <div className="form-container">
                <div className='h1Box'>
                    <h1 className='h1'>Forget Password</h1>
                    <div className="line"></div>
                </div>

                <div className="loginBox">
                    <div className="entryBox">
                        <div className="entryText">Email</div>
                        <input className="email input" type="text" name="email" placeholder="Your Email" required="" onChange={(e) => emailSet(e.target.value)} />
                    </div>
                    <button className="loginBtn  form-button" type="submit" onClick={handleForget}>
                        Reset
                    </button>
                </div>
            </div>
        </div>
    )

}

export default Forget;