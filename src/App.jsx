import Nav from './components/nav/nav'
import Body from './components/body/body'

function App() {
  return (
    <>
      <Nav title={['Home','Blogs','Write']} hrefs={['#/home','#/blog','#/write']} />
      <Body />
    </>
  );
}

export default App;
