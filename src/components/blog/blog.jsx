import React from 'react'

class Blog extends React.Component
{
    constructor(props)
    {
        super(props);
        this.id=props.id;
        this.repos=props.repos;
        this.user=props.user;
        this.list=props.list;
        this.state={};
    }
    fetch(url)
    {
        let xhr=new XMLHttpRequest();
        xhr.open('GET',url,false);
        xhr.send(null);
        return xhr.responseText;
    }
    componentDidMount()
    {
        let url="https://api.github.com/repos/"+this.user+"/"+this.repos+"/issues/"+this.id;
        let json=JSON.parse(fetch(url));
        this.setState({title: json['title']});
        this.setState({body: json['body']});
    }
    render()
    {
        let a=<><h1>{this.state.title}</h1><p>{this.state.body}</p></>;
        return a;
    }
}

export default Blog;