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
            <button onClick={this.handleclick}>Login</button><br />
            <a href="https://github.com/login/oauth/authorize?client_id=61b8c3eac94265562945&redirect_uri=https%3A%2F%2Fblog.wpgzs.top%2F&scope=repo">Oauth Login</a>
        </div>);
    }
}

export default Login;