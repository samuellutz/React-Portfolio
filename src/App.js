import Intro from "./components/intro/intro";
import Projectlist from "./components/projectlist/projectlist"
import Navbar from "./components/navbar/navbar"
import Contact from "./components/contact/contact";


function App() {
  return (
    <div className="app">
      <Navbar />
      <Intro/>
      <Projectlist />
      <Contact />
    </div>
  );
}

export default App;
