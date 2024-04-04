import Nav from './components/nav/nav'
import Body from './components/body/body'

function App() {
  return (
    <>
      <Nav title={['Home','Blogs']} hrefs={['#/home','#/blog']} />
      <Body />
    </>
  );
}

export default App;
