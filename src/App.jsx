import Nav from './components/nav/nav'
import Body from './components/body/body'
import Dialog from './components/dialog/dialog'

function App() {
  return (
    <>
      <Dialog />
      <Nav title={['Home','Blogs','Write','Login']} hrefs={['#/home','#/blog','#/write','#/login']} />
      <Body />
    </>
  );
}

export default App;
