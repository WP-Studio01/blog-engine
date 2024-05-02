import React from 'react'
import './write.css'

class Write extends React.Component
{
    onsubmit(e)
    {
        // let tg=e.target;
        let writeform=document.getElementsByClassName('writeform')[0];
        let title,content,token;
        for(let i of writeform.children)
        {
            switch(i.name)
            {
                case 'title':
                    title=i.value;
                    break;
                case 'content':
                    content=i.value;
                    break;
                case 'token':
                    token=i.value;
                    window.localStorage.setItem('token',i.value);
                    break;
            }
        }
        let user='WP-Studio01',repo='blogdata';
        let xhr=new XMLHttpRequest();
        xhr.open('POST','https://api.github.com/repos/'+user+'/'+repo+'/issues');
        let data={
            title: title,
            body: content,
        };
        xhr.setRequestHeader('Content-Type','application/json');
        xhr.setRequestHeader('Authorization', 'token '+token);
        xhr.send(JSON.stringify(data));
        xhr.onreadystatechange = ()=>{
            if(xhr.readyState==4)
            {
                if(xhr.status==201)
                {
                    window.location.hash='#/blog';
                    return;
                }
                else
                {
                    window.alert('error '+xhr.status);
                }
            }
        };
        e.target.style.display='none';
    }
    render()
    {
        return <>
            <div className='writeform'>
                <label>Title:</label>&emsp;<input type={'text'} name='title' /><br />
                <label>Content:</label>&emsp;<textarea rows={10} cols={30} name='content'></textarea><br />
                <label>Token:</label>&emsp;<input type={'password'} name='token' value={window.localStorage.getItem('token')} /><br />
                <button onClick={this.onsubmit}>Submit</button>
            </div>
        </>;
    }
}

export default Write;