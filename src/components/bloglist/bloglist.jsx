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
        this.state={blogs: null};
    }
    componentDidMount()
    {
        // window.alert('666','666',(a)=>{},{showOK:1});
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
        let token=window.localStorage.getItem('token');
        let xhr=new XMLHttpRequest();
        xhr.open('GET',url,false);
        if(token) xhr.setRequestHeader('Authorization', 'token '+token);
        xhr.send(null);
        xhr.onreadystatechange=function(){
            console.log(xhr.readyState);
            if(xhr.readyState === xhr.DONE && xhr.status === 200)
            {
                let issues=xhr.responseText;
                let json=JSON.parse(issues);
                console.log(json);
                this.setState({blogs: json});
                console.log(this.render());
                this.forceUpdate();
            }
        };
    }
    render()
    {
        if(!this.state.blogs) return <center>Loading...</center>
        let arr=[];
        for(let i of this.state.blogs)
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