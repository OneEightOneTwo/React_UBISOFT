import React from 'react';
import styles from './Pheader.css';

class Pheader extends React.Component {
    render() {
        return (
            <div id="header">
                <div className={styles.header}>
                    <h2>
                        <a href="">育碧</a>
                    </h2>
                    <div className={styles.search}>
                        <p>
                            <input type="text" placeholder="浏览游戏、周边等等..." />
                            <span></span>
                        </p>
                        <ul>
                            <li><a href="">游戏</a></li>
                            <li><a href="">额外内容</a></li>
                            <li><a href="">特卖</a></li>
                        </ul>
                    </div>
                    <div className={styles.hright}>
                        <a href="">登陆</a>
                        <a href="">购物</a>
                        <span>0</span>
                        <p><span>用</span><i></i>
                        <span>100</span>享<span>8</span>折优惠 
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Pheader