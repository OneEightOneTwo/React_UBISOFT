import React from 'react';
import styles from './Header.css';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '头部',
            tab: 0
        }
    }
    render() {
        return (
            <div>
                <header className={styles.header}>
                    <nav>
                        <div >
                            <a className={styles.logo} href="/">UBISOFT</a>
                        </div>
                        <div className={styles.nav}>
                            <ul>
                                <li><a href="/home">首页</a></li>
                                <li><a href="/home">游戏</a></li>
                                <li><a href="/home">商城</a></li>
                                <li><a href="/home">支持</a></li>
                            </ul>
                        </div>
                        <div className={styles.seek}>
                            <a className={styles.uplay} href="/">
                                <img src={require('../../assets/img/uplay.png')} alt="" />
                            </a>
                            <span className={styles.seek_span}>
                                <i></i>
                            </span>
                            <input className={styles.seek_input} type="text" />
                        </div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default Header