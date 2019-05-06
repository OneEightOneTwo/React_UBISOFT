import React from 'react';
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Games from '../../components/Games/Games'
function Gamelist() {
    return (
        <div>
            <Header />
            <Games />
            <Footer />
        </div>
    );
}

Gamelist.propTypes = {
};

export default Gamelist;