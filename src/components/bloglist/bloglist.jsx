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
        this.state={blogs: []};
    }
    fetch(url,token)
    {
        let xhr=new XMLHttpRequest();
        xhr.open('GET',url,false);
        xhr.setRequestHeader('Authorization', 'token '+token);
        xhr.send(null);
        return xhr.responseText;
    }
    componentDidMount()
    {
        setTimeout(async ()=>{
            return 0;
        },0);
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
        let issues=this.fetch(url,window.localStorage.getItem('token'));
        let json=JSON.parse(issues);
        // this.setState({blogs: json});
        for(let i of /*this.state.blogs*/json)
        {
            let item;
            if(this.showother)
                item=<Blog id={i['number']} repos={this.repos} user={this.user} list showauthor />;
            else
                item=<Blog id={i['number']} repos={this.repos} user={this.user} list />;
            arr.push(item);
        }
        if(arr.length==0) return <center>Loading...</center>
        return <>{arr}</>;
    }
}

export default Bloglist;