import React from 'react';
import styles from './Pbottom.css';

class Pbottom extends React.Component {
    render() {
        return (
            <div>
                <div id={styles.bottom}>
                    <p>
                        快来官方育碧商城寻找你喜爱的英雄们。全年提供全新商品、专属典藏版和惊人促销优惠：只卖 Ubisoft 最棒产品！从 季票 到周边，让你享受完整的游戏体验。育碧商城让你在PC上体验精彩冒险：在《刺客信条：奥德赛》里写下你的奥德赛史诗，或在《全境封锁2》里化身国土战略局特工，或加入《彩虹六号：围攻》特勤小队。
                   </p>
                    <dl>
                        <dt>认识我们</dt>
                        <dd>关于Ubisoft</dd>
                        <dd>招聘信息</dd>
                        <dd>Ubisoft Club</dd>
                        <dd>Ubisoft.com</dd>
                        <dd>Support.com</dd>
                        <dd>关于商店</dd>
                        <dd>周边商城</dd>
                    </dl>
                    <dl>
                        <dt>发现更多</dt>
                        <dd>游戏</dd>
                        <dd>其他内容</dd>
                        <dd>特惠</dd>
                        <dd>商店好礼</dd>
                    </dl>
                    <dl>
                        <dt>让我们帮助你</dt>
                        <dd>常见回答/帮助</dd>
                        <dd>你的账户</dd>
                        <dd>你的账户</dd>
                        <dd>你的订单</dd>
                        <dd>隐私策略</dd>
                        <dd>条款于销售细则</dd>
                        <dd>法律声明</dd>
                        <dd>下载Uplay PC</dd>
                        <dd>退货与换货</dd>
                        <dd>撤销申请表格</dd>
                    </dl>
                </div>
                <div className={styles.btt}>
                    <div>
                        <h2>
                            <a href="">logo</a>
                        </h2>
                       <p> 
                            <span></span>
                            <span></span>
                            <span></span>
                        </p>
                    </div>
                    <p>2001-2019 Ubisoft Entertainment. All Rights Reserved. Ubisoft, Ubi.com and the Ubisoft logo are trademarks of Ubisoft Entertainment in the U.S and/or other countries</p>
                </div>
            </div>
        )
    }
}

export default Pbottom