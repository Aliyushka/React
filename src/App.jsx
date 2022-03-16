import React from "react";
import Header from "./Header";
import Container from "./Container";
import Footer from "./Footer";

const App = () =>{
    return(
        <div className="w3-content" style={{maxWidth: '1400px'}}>;
        <Header/>
        <Container/>
        <Footer/>
        </div>
    );
};

export default App;