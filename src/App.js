import Intro from "./components/intro/intro";
import Projectlist from "./components/projectlist/projectlist"
import Navbar from "./components/navbar/navbar"


function App() {
  return (
    <div className="app">
      <Navbar />
      <Intro/>
      <Projectlist />
    </div>
  );
}

export default App;
