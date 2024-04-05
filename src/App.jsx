import Nav from './components/nav/nav'
import Body from './components/body/body'

function App() {
  return (
    <>
      <Nav title={['Home','Blogs','Write','Login']} hrefs={['#/home','#/blog','#/write','#/login']} />
      <Body />
    </>
  );
}

export default App;
