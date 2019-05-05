import React from 'react';
import { connect } from 'dva';
import styles from './HomePage.css';
// import Header from '../../components/Header/Header';
import Ptop from '../../components/Ptop/Ptop';
import Pheader from '../../components/Pheader/Pheader';
import Pbottom from '../../components/Pbottom/Pbottom';

function HomePage() {
    return (
       <div>
           <Ptop/>  
           <Pheader/>   
           <div className={styles.banner}></div>
           <Pbottom/>
       </div>
    );
}

HomePage.propTypes = {
};

export default connect()(HomePage);