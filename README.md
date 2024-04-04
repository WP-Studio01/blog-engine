# 博客引擎

这个引擎可以随意修改

master分支更新慢，但是稳定，develop更新快，可能有bug

用这行代码克隆这个仓库

```
git clone https://github.com/WP-Studio01/blog-engine.git
```

windows和linux都可以运行

接下来，这些地方可以修改

`/src/index.js`

```js
行 4
import App from './App';

let title='Blog'; //可以修改，页面标题
document.title=title;
const root = ReactDOM.createRoot(document.getElementById('root'));
```

`/src/components/body/body.jsx`

```js
行 6
let repos='blogdata';
let user='WP-Studio01';
```

这两个都可以改，第一个是存储issue的存储库名称，第二个是存储库的主人用户名

```js
行 34
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
else
{
    window.location.hash='#/home';
}
```

这些地方都可以改，如果要新增页面就新增一个逻辑就可以了，顺便说一句，页面使用Ajax动态更新，不用url只用锚记

```js
行 38
else if(hash=="#/blog")
{
    element=<Bloglist repos={repos} user={user} showother />;
}
```

这里如果允许别人发帖就加上`showother`，显示已关闭帖子就加上`showclose`

就像这样

```javascript
else if(hash=="#/blog")
{
    element=<Bloglist repos={repos} user={user} showother showclose />;
}
```

`/src/App.jsx`

```js
行 4
function App() {
  return (
    <>
      <Nav title={['Home','Blogs']} hrefs={['#/home','#/blog']} /> //这里可以改
      <Body />
    </>
  );
}
```

`title`数组为导航栏中的显示文字

`hrefs`数组为导航栏指向的链接

如果这里改了那么页面逻辑那里也要新增逻辑