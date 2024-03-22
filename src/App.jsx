import "./App.css";

import { Article, Brand, CTA, Feature, Navbar } from "./components";
import {
  Footer,
  Header,
  Features,
  Possibility,
  WhatGPT3,
  Blog,
} from "./containers";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar></Navbar>
        <Header></Header>
      </div>
      <Brand></Brand>
      <WhatGPT3></WhatGPT3>
      <Features></Features>
      <Possibility></Possibility>
      <CTA></CTA>
      <Blog></Blog>
      <Footer></Footer>
    </div>
  );
}

export default App;
