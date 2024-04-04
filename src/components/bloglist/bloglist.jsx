import React from 'react'
import Blog from '../blog/blog'

class Bloglist extends React.Component
{
    constructor(props)
    {
        super(props);
        this.repos=props.repos;
        this.user=props.user;
        this.showother=!!props.showother;
        this.showclose=!!props.showclose;
    }
    fetch(url)
    {
        let xhr=new XMLHttpRequest();
        xhr.open('GET',url,false);
        xhr.send(null);
        return xhr.responseText;
    }
    render()
    {
        let arr=[];
        let url='https://api.github.com/repos/'+this.user+'/'+this.repos+'/issues?';
        if(!this.showother)
        {
            url+='author=';
            url+=this.user;
        }
        if(!this.showclose)
        {
            if(!this.showother) url+='&';
            url+='state=open';
        }
        let issues=this.fetch(url);
        let json=JSON.parse(issues);
        for(let i of json)
        {
            let item;
            if(this.showother)
                item=<Blog id={i['number']} repos={this.repos} user={this.user} list showauthor />;
            else
                item=<Blog id={i['number']} repos={this.repos} user={this.user} list />;
            arr.push(item);
        }
        return <>{arr}</>;
    }
}

export default Bloglist;