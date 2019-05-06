import React from 'react';
import { connect } from 'dva';
import styles from './Particulars.css';
// import Header from '../../components/Header/Header';
import Ptop from '../../components/Ptop/Ptop';
import Pheader from '../../components/Pheader/Pheader';
import Pbottom from '../../components/Pbottom/Pbottom';

// tu
import cover1 from '../../assets/img/cover1.jpg'

function Particulars() {
    return (
        <div>
            <Ptop />
            <Pheader />
            <div>
                <div className={styles.banner}>
                {/* 遮罩 */}
                <div id={styles.zhe}></div>
                    <div className={styles.cover}>
                        <div className={styles.cleft}>
                            <img src={cover1} alt=""/>
                            <h2>Ubisoft<span>商店好礼</span></h2>
                        </div>
                    </div>
                </div>
                <div className={styles.white}></div>
            </div>
            <Pbottom />
        </div>
    );
}

Particulars.propTypes = {
};

export default connect()(Particulars);