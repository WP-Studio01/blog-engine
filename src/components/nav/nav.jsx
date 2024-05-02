import React from 'react'
import './nav.css'

class Nav extends React.Component
{
    constructor(props)
    {
        super(props);
        this.props=props;
        this.state={};
    }
    render()
    {
        let ar=[];
        for(let i=0;i<this.props.title.length;i++)
        {
            ar.push(<a key={i} className="menuitem" href={this.props.hrefs[i]}>{this.props.title[i]}</a>)
        }
        return <>{ar}</>;
    }
}

export default Nav;