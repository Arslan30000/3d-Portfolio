import Hero from './components/sections/hero.jsx';
import NavBar from './components/NavBar.jsx';
import TechStack from './components/sections/TechStack.jsx';
import ShowcaseSection  from './components/sections/ShowcaseSection.jsx';
import Contact from './components/sections/Contacts.jsx';
const App = () => {
    return (
  <>
  <NavBar />
  <Hero />
  <br />
  <br />
 <div className="text-content my-12 text-center">
  <h2 className="text-4xl font-extrabold text-white tracking-tight mb-4">
    Major Projects & Highlights
  </h2>
  <div className="mx-auto w-24 h-1 bg-violet-500 rounded"></div>
</div>
  <ShowcaseSection />
   <TechStack />
   <Contact />
  </>
 
    )
}
export default App;
