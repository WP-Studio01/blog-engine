var cb=function() {
    if(window.location.href.split('?').length!=1)
    {
        let querystr=window.location.href.split('?').at(1);
        let code;
        for(let i of querystr.split('&'))
        {
            let k=i.split('=')[0];
            let v=i.split('=')[1];
            if(k=='code') code=v;
        }
        if(code)
        {
            let token;
            let xhr=new XMLHttpRequest();
            xhr.open('POST','https://github.com/login/oauth/access_token');
            let body={
                "client_id": "61b8c3eac94265562945",
                "client_secret": "87ffd9dc7ec363649ed8c18ea352738d0bedc3ec",
                "code": code,
                "redirect_uri": "https://blog.wpgzs.top",
            }
            xhr.send(body);
            xhr.onreadystatechange=()=>{
                if(xhr.readyState==4)
                {
                    if(xhr.status==200)
                    {
                        let res=JSON.parse(xhr.responseText);
                        window.localStorage.setItem('token',res['access_token']);
                        alert('Login successed');
                    }
                    else
                    {
                        alert('error '+xhr.status);
                    }
                }
            };
        }
    }
}

export default cb;