import React from 'react';
import '../../assets/css/base.css'
import styles from './Footer.css';
const Footer = () => {
    return (
        <div id={"footer"}>
            <div className={styles.f1}>
                <p className={styles.p1}></p>
                <div>
                    <img src={require('../../assets/img/wechat.png')} alt="" />
                    <img src={require('../../assets/img/weibo.png')} alt="" />
                    <img src={require('../../assets/img/bili.png')} alt="" />
                </div>
            </div>
            <h2>育碧游戏专区</h2>
            <p className={styles.p2}>
                <a href="https://www.ubisoft.com.cn/thedivision2">
                    *《全境封锁2》专区
                </a>
                <a href="https://www.ubisoft.com.cn/fcnd">
                    *《孤岛惊魂:新曙光》专区
                </a>
                <a href="https://www.ubisoft.com.cn/acod">
                    *《刺客信条:奥德赛》专区
                </a>
                <a href="https://www.ubisoft.com.cn/rainbow6">
                    *《彩虹六号:围攻》专区
                </a>
                <a href="https://www.ubisoft.com.cn/aco">
                    *《刺客信条:起源》专区
                </a>
                <a href="https://www.ubisoft.com.cn/assassinscreed">
                    * 《刺客信条》系列专区
                </a>
                <a href="https://www.ubisoft.com.cn/farcry5">
                    * 《孤岛惊魂5》专区
                </a>
                <a href="https://www.ubisoft.com.cn/farcry">
                    * 《孤岛惊魂》系列专区
                </a>
                <a href="https://www.ubisoft.com.cn/tc2">
                    * 《飙酷车神2》专区
                </a>
                <a href="https://www.ubisoft.com.cn/thedivision">
                    * 《全境封锁》专区
                </a>
            </p>
            <p className={styles.p2}>
                <a href="https://www.ubisoft.com.cn/jd2017">
                    * 《舞力全开2017》专区
                </a>
                <a href="https://www.ubisoft.com.cn/wd2">
                    * 《看门狗2》专区
                </a>
                <a href="https://www.ubisoft.com.cn/farcryprimal">
                    * 《孤岛惊魂:野蛮纪源》专区
                </a>
                <a href="https://www.ubisoft.com.cn/grw_index">
                    * 《幽灵行动：荒野》专区
                </a>
            </p>
            <p className={styles.p2} style={{ paddingTop: 33 }}>
                <img src={require('../../assets/img/china.png')} alt="" />
            </p>
            <p className={styles.p3}>
                <a href="">
                    关于育碧
                </a>
                &nbsp;
                   <span>/</span>
                &nbsp;
                <a href="">
                    加入我们
                </a>
            </p>
            <p className={styles.p4}>
                ©2006-2019 Ubisoft Entertainment. All Rights Reserved. Ubisoft, ubi.com, and the Ubisoft logo are trademarks of Ubisoft Entertainment in the U.S. and/or other countries.
            </p>
            <p className={styles.p4}>
                上海碧汉网络科技有限公司(关于我们) 公司地址：上海市徐汇区桂箐路7号3号楼3楼 客服电话:54075299
            </p>
            <p className={styles.p4}>
                沪网文（2016）0067-067号 沪ICP备10013909号-11 | 增值电信业务经营许可证: B2-20100035
            </p>
            <p className={styles.p2} >
                <a href="http://sq.ccm.gov.cn/ccnt/sczr/service/business/emark/toDetail/D6F465F0659D4237BE435962D8676027">
                    <img src={require('../../assets/img/footerimg1.png')} alt="" />
                </a>
            </p>
            <p className={styles.p5}>
                <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010402002141">
                    <img src={require('../../assets/img/footerimg2.png')} alt="" />
                    &nbsp;
                    沪公网安备&nbsp;31010402002141号
                </a>
            </p>
        </div>
    );
};

export default Footer;