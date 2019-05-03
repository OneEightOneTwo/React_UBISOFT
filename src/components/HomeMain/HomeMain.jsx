import React from 'react';
import styles from './HomeMain.css';
import './HomeMain.css';

class HomeMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'main',
            slide: [{
                bigImg: require('../../assets/img/ACOD_DLC2_1_PC.jpg'),
                minLogo: require('../../assets/img/odyssey_logo.png'),
                Gname: '刺客信条：奥德赛',
                GnameColor: '#da1c5c',
                headline: '亚特兰蒂斯之命运',
                message: '第一章现已上线',
                class: '',
                borderColor: 'rgb(150, 15, 15)'
            }, {
                bigImg: require('../../assets/img/FH_Y3S2_PC.jpg'),
                minLogo: require('../../assets/img/forhonor_logo.png'),
                Gname: '荣耀战魂',
                GnameColor: '#f84f20',
                headline: '人终将逝，英魂永存',
                message: '第三年第二赛季“樱”5月3日上线',
                class: '',
                borderColor: 'rgb(248, 79, 32)'
            }, {
                bigImg: require('../../assets/img/tc2_desktop.jpg'),
                minLogo: require('../../assets/img/tc2_logo.png'),
                Gname: '飙酷车神2',
                GnameColor: '#ffdb15',
                headline: '峰拥而炙 现已上线',
                message: '4月25日-28日免费周末进行中',
                class: '',
                borderColor: '#ffdb15'
            }, {
                bigImg: require('../../assets/img/AN18_desktop.jpg'),
                minLogo: require('../../assets/img/AN18_logo.png'),
                Gname: '纪元1800',
                GnameColor: '#a11c1c',
                headline: '建立横跨两大洲的商业帝国',
                message: '4月16日正式发售',
                class: '',
                borderColor: '#ffb900'
            }, {
                bigImg: require('../../assets/img/original_1554690371.jpg'),
                minLogo: require('../../assets/img/tctd2_logo.png'),
                Gname: '全境封锁2',
                GnameColor: '#ff7e00',
                headline: '强敌入侵，激战特区',
                message: '大量全新内容及活动，快来一起体验',
                class: '',
                borderColor: 'rgb(255, 126, 0)'
            }, {
                bigImg: require('../../assets/img/R6_Y4S1_bg.jpg'),
                minLogo: require('../../assets/img/r6_logo_new.png'),
                Gname: '彩虹六号：围攻',
                GnameColor: '#f7bd0d',
                headline: '燃烧地平线行动',
                message: '一张位于澳大利亚沙漠中的新地图和两位来自SASR机动巡逻队的新干员。',
                class: '',
                borderColor: '#f7bd0d'
            }, {
                bigImg: require('../../assets/img/hse.jpg'),
                minLogo: require('../../assets/img/hse_logo.png'),
                Gname: '饥饿鲨：进化',
                GnameColor: '#fe9712',
                headline: '尼斯(水怪)带你开启任意门',
                message: '与萌宠尼斯塔一起，畅游《饥饿鲨：进化》',
                class: '',
                borderColor: '#ffdb15'
            }, {
                bigImg: require('../../assets/img/brawlhalla.jpg'),
                minLogo: require('../../assets/img/brawlhalla_logo.png'),
                Gname: '英灵乱战',
                GnameColor: '#f21413',
                headline: '与地狱男爵一起，体验地狱的力量吧！',
                message: '全新内容，颤栗开启！',
                class: '',
                borderColor: '#f21413'
            }],
            show: 0,
            liNum1: 0,
            liNum2: 1,
            liNum3: 2,
            liNum4: 3,
            liNum5: 4,
            liNum6: 5,
            liNum7: 6,
            liNum8: 7,
            // next
            opact: 1,
            opactw: 7,
            content: 4,
            // prve
            Popact: 7,
            Popactw: 5,
            Pcontent: 2,
            // next或prve
            NP: 0
        }

    }
    next() {
        this.setState(prevState => ({
            NP: 0,
            opact: ++prevState.opact >= 8 ? 0 : this.state.opact,
            opactw: ++prevState.opactw >= 8 ? 0 : this.state.opactw,
            content: ++prevState.content >= 8 ? 0 : this.state.content,
            Popact: ++prevState.Popact >= 8 ? 0 : this.state.Popact,
            Popactw: ++prevState.Popactw >= 8 ? 0 : this.state.Popactw,
            Pcontent: ++prevState.Pcontent >= 8 ? 0 : this.state.Pcontent,
            liNum1: ++prevState.liNum1 >= 8 ? 0 : this.state.liNum1,
            liNum2: ++prevState.liNum2 >= 8 ? 0 : this.state.liNum2,
            liNum3: ++prevState.liNum3 >= 8 ? 0 : this.state.liNum3,
            liNum4: ++prevState.liNum4 >= 8 ? 0 : this.state.liNum4,
            liNum5: ++prevState.liNum5 >= 8 ? 0 : this.state.liNum5,
            liNum6: ++prevState.liNum6 >= 8 ? 0 : this.state.liNum6,
            liNum7: ++prevState.liNum7 >= 8 ? 0 : this.state.liNum7,
            liNum8: ++prevState.liNum8 >= 8 ? 0 : this.state.liNum8,
        }));
        this.empty();
        this.later();
    }

    prve() {
        this.setState(prevState => ({
            NP: 1,
            Popact: --prevState.Popact < 0 ? this.state.slide.length - 1 : this.state.Popact,
            Popactw: --prevState.Popactw < 0 ? this.state.slide.length - 1 : this.state.Popactw,
            Pcontent: --prevState.Pcontent < 0 ? this.state.slide.length - 1 : this.state.Pcontent,
            opact: --prevState.opact < 0 ? this.state.slide.length - 1 : this.state.opact,
            opactw: --prevState.opactw < 0 ? this.state.slide.length - 1 : this.state.opactw,
            content: --prevState.content < 0 ? this.state.slide.length - 1 : this.state.content,
            liNum1: --prevState.liNum1 < 0 ? this.state.slide.length - 1 : this.state.liNum1,
            liNum2: --prevState.liNum2 < 0 ? this.state.slide.length - 1 : this.state.liNum2,
            liNum3: --prevState.liNum3 < 0 ? this.state.slide.length - 1 : this.state.liNum3,
            liNum4: --prevState.liNum4 < 0 ? this.state.slide.length - 1 : this.state.liNum4,
            liNum5: --prevState.liNum5 < 0 ? this.state.slide.length - 1 : this.state.liNum5,
            liNum6: --prevState.liNum6 < 0 ? this.state.slide.length - 1 : this.state.liNum6,
            liNum7: --prevState.liNum7 < 0 ? this.state.slide.length - 1 : this.state.liNum7,
            liNum8: --prevState.liNum8 < 0 ? this.state.slide.length - 1 : this.state.liNum8,
        }));
        this.empty();
        this.later2();
        // console.log(this.state.Popact);
        // console.log(this.state.Popactw);
        // console.log(this.state.Pcontent);
        // console.log(this.state.liNum1, this.state.liNum2, this.state.liNum3, this.state.liNum4, this.state.liNum5, this.state.liNum6, this.state.liNum7, this.state.liNum8);
    }
    // 运动之后
    init() {
        let data = this.state.slide;
        data[0].class = 'transparency';
        this.setState(() => ({
            slide: data
        }));
        let data1 = this.state.slide;
        data1[6].class = 'transparency';
        this.setState(() => ({
            slide: data1
        }));
        let data2 = this.state.slide;
        data2[3].class = 'centralPoint';
        this.setState(() => ({
            slide: data2
        }))
    }

    later() {
        let data = this.state.slide;
        data[this.state.opact].class = 'transparency';
        this.setState(() => ({
            slide: data
        }));
        let data1 = this.state.slide;
        data1[this.state.opactw].class = 'transparency';
        this.setState(() => ({
            slide: data1
        }));
        let data2 = this.state.slide;
        data2[this.state.content].class = 'centralPoint';
        this.setState(() => ({
            slide: data2
        }))
    }

    later2() {
        let data = this.state.slide;
        data[this.state.Popact].class = 'transparency';
        this.setState(() => ({
            slide: data
        }));
        let data1 = this.state.slide;
        data1[this.state.Popactw].class = 'transparency';
        this.setState(() => ({
            slide: data1
        }));
        let data2 = this.state.slide;
        data2[this.state.Pcontent].class = 'centralPoint';
        this.setState(() => ({
            slide: data2
        }))
    }

    // 排他
    empty() {
        for (var i = 0; i < this.state.slide.length; i++) {
            let Empty = this.state.slide;
            Empty[i].class = '';
            this.setState(() => ({
                slide: Empty
            }));
        }
    }

    componentDidMount() {
        this.init();
    }
    render() {
        return (
            <div>
                <main>
                    <div className={styles.bg_Slide}>
                        <nav className={styles.big_images}>
                            <li>
                                {(() => {
                                    if (this.state.NP === 0) {
                                        return <img src={this.state.slide[this.state.content - 1 < 0 ? this.state.slide.length - 1 : this.state.content - 1].bigImg} alt="" />
                                    } else if (this.state.NP === 1) {
                                        return <img src={this.state.slide[this.state.Pcontent + 1 > this.state.slide.length - 1 ? 0 : this.state.Pcontent + 1].bigImg} alt="" />
                                    }

                                })()}
                                {/* <img src={require('../../assets/img/ACOD_DLC2_1_PC.jpg')} alt="" /> */}
                                {(() => {
                                    if (this.state.NP === 0) {
                                        return (
                                            <div className={styles.inform}>
                                                <p style={{ color: this.state.slide[this.state.content - 1 < 0 ? this.state.slide.length - 1 : this.state.content - 1].GnameColor }} className={styles.gameP1}>{this.state.slide[this.state.content - 1 < 0 ? this.state.slide.length - 1 : this.state.content - 1].Gname}</p>
                                                <p className={styles.gameP2}>{this.state.slide[this.state.content - 1 < 0 ? this.state.slide.length - 1 : this.state.content - 1].headline}</p>
                                                <p className={styles.gameP3}>{this.state.slide[this.state.content - 1 < 0 ? this.state.slide.length - 1 : this.state.content - 1].message}</p>
                                            </div>
                                        )
                                    } else if (this.state.NP === 1) {
                                        return (
                                            <div className={styles.inform}>
                                                <p style={{ color: this.state.slide[this.state.Pcontent + 1 > this.state.slide.length - 1 ? 0 : this.state.Pcontent+1].GnameColor }} className={styles.gameP1}>{this.state.slide[this.state.Pcontent + 1 > this.state.slide.length-1 ? 0 : this.state.Pcontent+1].Gname}</p>
                                                <p className={styles.gameP2}>{this.state.slide[this.state.Pcontent + 1 > this.state.slide.length - 1 ? 0 : this.state.Pcontent+1].headline}</p>
                                                <p className={styles.gameP3}>{this.state.slide[this.state.Pcontent + 1 > this.state.slide.length - 1 ? 0 : this.state.Pcontent+1].message}</p>
                                            </div>
                                        )
                                    }
                                })()}
                                <span style={{ position: 'absolute', top: '24px', right: '20px', fontSize: '18px', color: '#8CDDA3', fontWeight: 'bold', textShadow: '0 2px 2px rgba(0,0,0,0.6)' }}>本产品适合12岁以上人群游戏</span>
                                {/* <div className={styles.inform}>
                                    <p style={{ color: "#da1c5c" }} className={styles.gameP1}>刺客信条：奥德赛</p>
                                    <p className={styles.gameP2}>亚特兰蒂斯之命运</p>
                                    <p className={styles.gameP3}>第一章现已上线</p>
                                </div> */}
                                {(() => {
                                    return (
                                        <div className={styles.buttons}>
                                            <span style={{ background: this.state.slide[this.state.content - 1 < 0 ? this.state.slide.length - 1 : this.state.content - 1].GnameColor }} className={styles.button1}>了解详情</span>
                                            <span className={styles.button2}>立即购买</span>
                                        </div>
                                    )
                                })()}
                            </li>
                        </nav>
                        <div className={styles.min_images}>
                            <nav className={styles.minNav}>
                                <li className={styles[this.state.slide[this.state.liNum1].class]}>
                                    <img src={this.state.slide[this.state.liNum1].minLogo} alt="" />
                                    <span style={{ background: this.state.slide[this.state.liNum1].borderColor }} className={styles.border}></span>
                                </li>
                                <li className={styles[this.state.slide[this.state.liNum2].class]}>
                                    <img src={this.state.slide[this.state.liNum2].minLogo} alt="" />
                                    <span style={{ background: this.state.slide[this.state.liNum2].borderColor }} className={styles.border}></span>
                                </li>
                                <li className={styles[this.state.slide[this.state.liNum3].class]}>
                                    <img src={this.state.slide[this.state.liNum3].minLogo} alt="" />
                                    <span style={{ background: this.state.slide[this.state.liNum3].borderColor }} className={styles.border}></span>
                                </li>
                                <li className={styles[this.state.slide[this.state.liNum4].class]}>
                                    <img src={this.state.slide[this.state.liNum4].minLogo} alt="" />
                                    <span style={{ background: this.state.slide[this.state.liNum4].borderColor }} className={styles.border}></span>
                                </li>
                                <li className={styles[this.state.slide[this.state.liNum5].class]}>
                                    <img src={this.state.slide[this.state.liNum5].minLogo} alt="" />
                                    <span style={{ background: this.state.slide[this.state.liNum5].borderColor }} className={styles.border}></span>
                                </li>
                                <li className={styles[this.state.slide[this.state.liNum6].class]}>
                                    <img src={this.state.slide[this.state.liNum6].minLogo} alt="" />
                                    <span style={{ background: this.state.slide[this.state.liNum6].borderColor }} className={styles.border}></span>
                                </li>
                                <li className={styles[this.state.slide[this.state.liNum7].class]}>
                                    <img src={this.state.slide[this.state.liNum7].minLogo} alt="" />
                                    <span style={{ background: this.state.slide[this.state.liNum7].borderColor }} className={styles.border}></span>
                                </li>
                                <li className={styles[this.state.slide[this.state.liNum8].class]}>
                                    <img src={this.state.slide[this.state.liNum8].minLogo} alt="" />
                                    <span style={{ background: this.state.slide[this.state.liNum8].borderColor }} className={styles.border}></span>
                                </li>
                            </nav>
                            <span className={styles.black}></span>
                            <span className={styles.bg_prev} onClick={this.prve.bind(this)}>
                                <img src={require('../../assets/img/l_a.png')} alt="" /></span>
                            <span className={styles.bg_next} onClick={this.next.bind(this)}>
                                <img src={require('../../assets/img/r_a.png')} alt="" />
                            </span>

                        </div>
                    </div>
                </main>
            </div>
        )
    }
}

export default HomeMain