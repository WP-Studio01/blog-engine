import React from 'react'
import './blog.css'

class Blog extends React.Component
{
    constructor(props)
    {
        super(props);
        this.id=props.id;
        this.repos=props.repos;
        this.user=props.user;
        this.list=!!props.list;
        this.showauthor=!!props.showauthor;
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
        let json=JSON.parse(this.fetch(url));
        this.setState({title: json['title']});
        this.setState({body: json['body']});
        let userpro=JSON.parse(this.fetch(json['user']['url']));
        this.setState({author: userpro['name']})
    }
    /*componentDidMount()
    {
        let url = "https://api.github.com/repos/" + this.user + "/" + this.repos + "/issues/" + this.id;
        fetch(url)
            .then(response => response.json())
            .then(json => this.setState({ title: json['title'], body: json['body'] }))
            .catch(error => console.error(error));
    }*/
    render()
    {
        /*let a;
        if(this.list)
        {
            console.log('list');
            a=<><br /><h2><a className="blogitem" href={"#/blog/"+this.id}>{this.state.title}</a></h2></>
        }
        else
        {
            console.log('body');
            a=<><br /><h1>{this.state.title}</h1><p>{this.state.body}</p></>;
        }*/
        let tit=this.state.title;
        if(this.showauthor)
        {
            tit+=' - ';
            tit+=this.state.author;
        }
        const a = this.list ? (
            <>
                <center><h2>
                    <a className="blogitem" href={"#/blog/" + this.id}>
                        {tit}
                    </a>
                </h2></center>
            </>
        ) : (
            <>
                <h1>{this.state.title}</h1>
                <p>{this.state.body}</p>
            </>
        );
        return a;
    }
}

export default Blog;