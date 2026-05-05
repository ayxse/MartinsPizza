import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Quality from "./components/Quality";
import Menu from "./components/Menu";
import Story from "./components/Story";
import Visit from "./components/Visit";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <Quality />
        <Menu />
        <Story />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
