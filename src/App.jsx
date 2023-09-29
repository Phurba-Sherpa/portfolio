import About from "./component/About";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Nav from "./layout/horizonal-nav/Nav";
import Experience from "./component/Experience";
import Project from "./component/Project";
import Contact from "./component/Contact";

function App() {
  return (
    <>
      <header className="flex flex-col lg:h-screen" id="home">
        <Nav />
        <Header />
      </header>
      <main className="mt-0 lg:mt-32">
        <About />
        <Experience />
        <Project />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
