import "./App.css";
import Navbar from "./Pages/Navbar";
import Main from "./Pages/Main";
import Paste from "./Pages/Paste";
import How from "./Pages/How";
import Footer from "./Pages/Footer";
function App() {
  return (
    <div className="App">
      <div className="main1">
        <Navbar />
        <Main />
        <Paste />
        <How />
      </div>
      <Footer />
    </div>
  );
}

export default App;
