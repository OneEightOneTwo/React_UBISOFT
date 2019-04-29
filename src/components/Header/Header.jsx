import React from 'react';
import styles from './Header.css';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tab: 0,
            switch: false,
            display: 'none',
            // 导航栏数据
            tabText: [{
                tab: '首页',
                routes: '/#/home'
            }, {
                tab: '游戏',
                routes: '/#/GamelistPage'
            }, {
                tab: '商城',
                routes: '/#/home'
            }, {
                tab: '支持',
                routes: '/#/home'
            }],
            //高亮
            active: 0,
            //搜索框状态
            inputState: 0,
        }
    }

    //点击切换高亮
    activeTab(index) {
        this.setState(() => ({
            active: index
        }))
    }



    //点击搜索框显示和隐藏
    seekClick() {
        this.setState(prevState => ({
            switch: !prevState.switch,
            display: prevState.switch ? 'none' : 'block',
            inputState: prevState.switch ? 0 : 1,
        })
        )
    }
    
    delInput(){
        this.setState(prevState=>({
            inputState:0,
            switch:false
        }))
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
                                {(() => {
                                    let arr = this.state.tabText.map((item, index) => {
                                        return <li key={index}><a href={item.routes} className={this.state.active === index ? styles.active : ''} onClick={this.activeTab.bind(this, index)}>{item.tab}</a></li>
                                    })
                                    return arr;
                                })()}
                                {/* <li><a href="/home">首页</a></li>
                                <li><a href="/home">游戏</a></li>
                                <li><a href="/home">商城</a></li>
                                <li><a href="/home">支持</a></li> */}
                            </ul>
                        </div>
                        <div className={styles.seek}>
                            <a className={styles.uplay} href="/">
                                <img src={require('../../assets/img/uplay.png')} alt="" />
                            </a>

                            <span className={styles.seek_span} onClick={this.seekClick.bind(this)}>
                                <i></i>
                            </span>
                            {(() => {
                                if (this.state.inputState) {
                                    let inputs = <input key='2' placeholder="请输入关键字" className={styles.seek_input} autoFocus={true} type="text" style={{ display: this.state.display }} ref={(input) => { this.textInput = input; }} />
                                    return inputs
                                } else {

                                }
                               
                            })()}
                            {(() => {
                                if (this.state.inputState) {
                                    let shade = <div className={styles.shade} onClick={this.delInput.bind(this)}></div>
                                    return shade
                                } else {

                                }
                            })()}

                        </div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default Header