// import "./App.css";
import Header from "./layouts/header";
import Routing from "./routing";
import "../src/sass/index.scss";
import Footer from "./layouts/footer";
import { useState } from "react";

function App() {
  const [wishlists, setWishlists] = useState([]);

  return (
    <div className="App">
      <Header />
      <Routing wishlists={wishlists} setWishlists={setWishlists} />
      <Footer />
    </div>
  );
}

export default App;
