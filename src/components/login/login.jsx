import React from 'react'
import './login.css'

class Login extends React.Component
{
    handleclick()
    {
        let v=document.getElementById('tokenlogin').value;
        window.localStorage.setItem('token',v);
    }
    render()
    {
        return (<div className='loginform'>
            <label>Token:</label><input id='tokenlogin' type={'password'} /><br />
            <button onClick={this.handleclick}>Login</button>
        </div>);
    }
}

export default Login;