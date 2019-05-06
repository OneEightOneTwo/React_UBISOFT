import React from 'react';
import { connect } from 'dva';

// import styles from './IndexPage.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import HomeMain from '../../components/HomeMain/HomeMain';


function HomePage() {
    return (
       <div>
           <Header/>
           <HomeMain/>
           <Footer/>
       </div>
    );
}

HomePage.propTypes = {
};

export default connect()(HomePage);