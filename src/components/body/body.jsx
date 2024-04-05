import React from 'react'
import Home from '../home/home'
import Bloglist from '../bloglist/bloglist'
import Blog from '../blog/blog'
import Write from '../write/write'
import Login from '../login/login'

let repos='blogdata';
let user='WP-Studio01';
class Body extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={hash: window.location.hash};
        window.onhashchange = () => {
            this.setState({hash: window.location.hash});
        };
    }
    render()
    {
        let hash=this.state.hash;
        let element=<></>;
        /*switch(hash)
        {
            case '#/home':
                element=<Home />;
                break;
            case '#/blog':
                element=<Bloglist />;
                break;
            default:
                window.location.hash='#/home';
                element=<Home />
        }*/
        if(hash=='#/home')
        {
            element=<Home />;
        }
        else if(hash=="#/blog")
        {
            element=<Bloglist repos={repos} user={user} showother />;
        }
        else if(/^#\/blog\/\d+$/.test(hash))
        {
            let id=hash.split('/').at(-1);
            element=<Blog id={id} repos={repos} user={user} />
        }
        else if(hash=='#/write')
        {
            element=<Write />;
        }
        else if(hash=='#/login')
        {
            element=<Login />;
        }
        else
        {
            window.location.hash='#/home';
        }
        return element;
    }
}

export default Body;