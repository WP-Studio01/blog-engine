import React from 'react'
import Home from '../home/home'
import Bloglist from '../bloglist/bloglist'

class Body extends React.Component
{
    constructor(props)
    {
        super(props);
        window.onhashchange = () => {
            this.setState({hash: window.location.hash});
        };
        this.state={};
    }
    render()
    {
        let hash=this.state.hash;
        let element=<></>;
        switch(hash)
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
        }
        return element;
    }
}

export default Body;