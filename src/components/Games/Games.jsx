import React from 'react';
import styles from './Games.css';
import json from '../../assets/data/data'
class Games extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    handleClick(event){
        console.log(event.currentTarget.getAttribute("data-id"))
        let num =event.currentTarget.getAttribute("data-id")
        window.open('www.baidu.com/'+num)
    }


    render() {
        const usersElements = []
        for (let item of json) {
            var url = item.id
            usersElements.push(
                <div onClick={this.handleClick} data-id={item.id} key={item.id} className={styles.game_item}>
                    <a href="">
                        <img src={require('../../assets/img/'+url+'.jpg')} alt={item.name} />
                    </a>
                    <div className={styles.caption}>
                        <h3>{item.name}</h3>
                        <p>发布时间：{item.date}</p>
                        <div className={styles.icon}>
                            <img src={require('../../assets/img/pc.png')} alt="" />
                            <img src={require('../../assets/img/cons.png')} alt="" />
                        </div>
                        <img className={styles.bd} src={require('../../assets/img/bd.jpg')} alt="" />
                    </div>
                </div>
            )
        }
        return (
            <div>
                    <div className={styles.games}>
                        <h1>育碧游戏</h1>
                        <p className={styles.p1}>
                            排序方式：&nbsp;
                        <span>发布时间</span>
                        </p>
                    </div>
                    <div className={styles.gamelist}>
                        {/* <div className={styles.game_item}>
                        <a href="">
                            <img src={require('../../assets/img/1.jpg')} alt="全境封锁2" />
                        </a>
                        <div className={styles.caption}>
                            <h3>全境封锁2</h3>
                            <p>发布时间：2019-3-15</p>
                            <div className={styles.icon}>
                                <img src={require('../../assets/img/pc.png')} alt="" />
                                <img src={require('../../assets/img/cons.png')} alt="" />
                            </div>
                            <img className={styles.bd} src={require('../../assets/img/bd.jpg')} alt="" />
                        </div>
                    </div> */}
                    {usersElements}
                    </div>
            </div>
        );
    }
}

export default Games;