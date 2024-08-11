import React from 'react';
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Main from "./Main/Main";

const Home: React.FC = () => {
    return (
        <>
            <Header />
            <Main />
            <Footer /> 
        </>
    );
}

export default Home;