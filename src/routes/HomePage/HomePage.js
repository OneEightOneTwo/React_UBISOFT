import React from 'react';
import { connect } from 'dva';
// import styles from './IndexPage.css';
import Header from '../../components/Header/Header';

function HomePage() {
    return (
       <div>
           <Header/>
       </div>
    );
}

HomePage.propTypes = {
};

export default connect()(HomePage);