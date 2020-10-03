import React , {useState}from 'react'
import './Login.css';
import {Link , useHistory} from 'react-router-dom';
import {auth} from "./firebase";

function Login() {

    const history = useHistory();
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");

    const login = (event)=>{
        event.preventDefault(); //this stops the refresh
        //do the login logic
        auth.signInWithEmailAndPassword(email,password).then((auth) =>{
            //logged in, redirect to home page
            history.push("/");
        }).catch( e => alert(e.message));

    }

    const register = (event) =>{
        event.preventDefault();
        // do register logic
        auth.createUserWithEmailAndPassword(email , password).then((auth)=>{
            //create a user and logged in ,redirect to homepage 
        }).catch(e => alert(e.message));
    };

    return (
        <div className="login">
            <Link to ="/">
                <img 
                    className="login_logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    alt=""
                />
            </Link>
             
            <div className="login_container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="email" value = {email} onChange ={event => setEmail(event.target.value)}/>
                    <h5>Password</h5>
                    <input type="password" value ={password} onChange = {event => setPassword(event.target.value)}/>
                    <button className="login_signInButton" onClick ={login} type="submit">Sign In</button>
                </form>
                <p>Copy and paste these scripts into the bottom of your ut before you use any Firebase services</p>
                <button className="login_registerButton" onClick = {register} type="submit">Create Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
