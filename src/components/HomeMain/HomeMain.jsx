import React from 'react';
import styles from './HomeMain.css';
import './HomeMain.css';

let timer = undefined;

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
            NP: 0,

            // 最新活动
            newActivity: [{
                Images1: require('../../assets/img/original_1556269931.jpg'),
                Images2: require('../../assets/img/original_1556273114.jpg')
            }, {
                Images1: require('../../assets/img/original_1556805974.jpg'),
                Images2: require('../../assets/img/original_1556175442.jpg')
            }],

            highlight: 0,
            on_off: 0,
            // 最新咨询
            newAdvisory: [{
                img: require('../../assets/img/original_1556880924.png'),
                title: '再创佳绩！《纪元1800》成为该系列最快销作品',
                time: '2019/05/03',
                inner: '《纪元1800》已经成为了该系列迄今为止销售最快的游戏作品，其发售首周的销量更是超过了前作《纪元2205》发售同期的4倍'
            },
            {
                img: require('../../assets/img/original_1556852873.png'),
                title: '《刺客信条：燎原》即将迎来重大更新！',
                time: '2019/05/03',
                inner: '刺客们注意了！《刺客信条：燎原》即将迎来重大更新。'
            },
            {
                img: require('../../assets/img/original_1556852681.jpg'),
                title: '《极限巅峰》第六赛季正式上线！',
                time: '2019/05/03',
                inner: '第6赛季「雕刻曲线」将是第一个月度赛季，拥有各项全新特色。你可以在这篇专题新闻中找到所有更新的细节。迎接五月赛季中的各项挑战，获得独家鲑鱼套装！一起来看看这个月将会带来的精彩活动吧。'
            },
            {
                img: require('../../assets/img/original_1556852703.png'),
                title: '《魔法门之英雄无敌：元素守护者》竞技场黄金月即将开启！',
                time: '2019/05/03',
                inner: '亲爱的英雄们，本月我们有一个全新的活动为你们开启：竞技场黄金月。在接下来4周期间，竞技场联盟奖励将逐季变得越来越丰厚。'
            },
            {
                img: require('../../assets/img/original_1556852354.jpg'),
                title: '《极限巅峰》4月29日更新说明',
                time: '2019/05/03',
                inner: '本次《极限巅峰》的维护与更新内容如下：'
            },
            {
                img: require('../../assets/img/original_1556846070.jpg'),
                title: '《荣耀战魂》第三年第二赛季“樱”现已上线',
                time: '2019/05/03',
                inner: '育碧宣布《荣耀战魂》第三年第二赛季“樱”现已正式登陆PC、PS4以及Xbox One平台。'
            }],
            //育碧游戏
            UB_game: [{
                gameImags: require('../../assets/img/division2.jpg'),
                gameTitle: '全境封锁2',
                gameTime: '2019-3-15',
                gamePlatform: ['pc_icon', 'cons_icon']
            },
            {
                gameImags: require('../../assets/img/trialsrising.jpg'),
                gameTitle: '特技摩托：崛起',
                gameTime: '2019-2',
                gamePlatform: ['pc_icon', 'cons_icon']
            },
            {
                gameImags: require('../../assets/img/spacejunkies.jpg'),
                gameTitle: '太空镖客',
                gameTime: '2019-03-26',
                gamePlatform: []
            },
            {
                gameImags: require('../../assets/img/hgn.jpg'),
                gameTitle: '孩之宝游戏之夜',
                gameTime: '2018-10-31',
                gamePlatform: ['cons_icon']
            },
            {
                gameImags: require('../../assets/img/jd2019.jpg'),
                gameTitle: '舞力全开2019',
                gameTime: '2018-10-26',
                gamePlatform: ['cons_icon']
            },
            {
                gameImags: require('../../assets/img/acod.jpg'),
                gameTitle: '刺客信条：奥德赛',
                gameTime: '2018-10-5',
                gamePlatform: ['pc_icon', 'cons_icon']
            },
            {
                gameImags: require('../../assets/img/E32018.jpg'),
                gameTitle: '育碧E3',
                gameTime: '2018-06-12 04:00:00',
                gamePlatform: []
            },
            {
                gameImags: require('../../assets/img/farcry5.jpg'),
                gameTitle: '孤岛惊魂5',
                gameTime: '2018-03-27',
                gamePlatform: ['pc_icon', 'cons_icon']
            },
            {
                gameImags: require('../../assets/img/aco.jpg'),
                gameTitle: '刺客信条：起源',
                gameTime: '2017-10',
                gamePlatform: ['pc_icon', 'cons_icon']
            },
            {
                gameImags: require('../../assets/img/rkb.jpg'),
                gameTitle: '马力欧+疯狂兔子：王国之战',
                gameTime: '2017-8-29',
                gamePlatform: ['cons_icon']
            },
            {
                gameImags: require('../../assets/img/eoc.jpg'),
                gameTitle: '魔法门之英雄无敌：战争纪元',
                gameTime: '2017年6月20日',
                gamePlatform: ['phone_icon']
            },
            {
                gameImags: require('../../assets/img/grw.jpg'),
                gameTitle: '幽灵行动：荒野',
                gameTime: '2017-03-07',
                gamePlatform: ['pc_icon', 'cons_icon']
            },
            {
                gameImags: require('../../assets/img/honor.jpg'),
                gameTitle: '荣耀战魂',
                gameTime: '2017-02-14',
                gamePlatform: ['pc_icon', 'cons_icon']
            }]
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

    // 自动切换
    auto() {
        timer = setInterval(() => {
            this.setState(prevState => ({
                highlight: ++prevState.highlight > 1 ? 0 : this.state.highlight,
            }));
        }, 5000);
    }

    // 移入停止
    stop() {
        clearInterval(timer);
    }
    start() {
        this.auto();
    }

    aPrve() {
        this.setState(prevState => ({
            highlight: --prevState.highlight < 0 ? 1 : this.state.highlight
        }))
    }

    aNext() {
        this.setState(prevState => ({
            highlight: ++prevState.highlight > 1 ? 0 : this.state.highlight,
        }))
    }

    componentDidMount() {
        this.init();
        //最新资讯
        this.auto();
    }
    componentWillUnmount() {
        clearInterval(timer);
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
                                                <p style={{ color: this.state.slide[this.state.Pcontent + 1 > this.state.slide.length - 1 ? 0 : this.state.Pcontent + 1].GnameColor }} className={styles.gameP1}>{this.state.slide[this.state.Pcontent + 1 > this.state.slide.length - 1 ? 0 : this.state.Pcontent + 1].Gname}</p>
                                                <p className={styles.gameP2}>{this.state.slide[this.state.Pcontent + 1 > this.state.slide.length - 1 ? 0 : this.state.Pcontent + 1].headline}</p>
                                                <p className={styles.gameP3}>{this.state.slide[this.state.Pcontent + 1 > this.state.slide.length - 1 ? 0 : this.state.Pcontent + 1].message}</p>
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

                    <div className={styles.activity}>
                        <div className={styles.activityTitle}>
                            <span>最新活动</span>
                        </div>
                        <div className={styles.Aslide} onMouseEnter={this.stop.bind(this)} onMouseLeave={this.start.bind(this)}>
                            <nav>
                                <li>
                                    <img src={this.state.newActivity[this.state.highlight].Images1} alt="" />
                                    <img src={this.state.newActivity[this.state.highlight].Images2} alt="" />
                                </li>
                                {/* <li>
                                    <img src={require('../../assets/img/original_1556269931.jpg')} alt="" />
                                    <img src={require('../../assets/img/original_1556273114.jpg')} alt="" />
                                </li> */}
                            </nav>
                            <div className={styles.aButtons}>
                                <p className={styles.aPrve} onClick={this.aPrve.bind(this)}></p>
                                <p className={styles.aFocus} >
                                    <span className={this.state.highlight === 0 ? styles.active : ''}></span>
                                    <span className={this.state.highlight === 1 ? styles.active : ''}></span>
                                </p>
                                <p className={styles.aNext} onClick={this.aNext.bind(this)}></p>
                            </div>

                        </div>
                    </div>

                    <div className={styles.information}>
                        <div className={styles.informationTitle}>
                            <span>最新咨询</span>
                        </div>
                        <nav className={styles.informText}>
                            {(() => {
                                let lis = this.state.newAdvisory.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <img src={item.img} alt="" />
                                            <section>
                                                <h3> <a href="">{item.title}</a></h3>
                                                <p className={styles.new_data}>{item.time}</p>
                                                <p className={styles.message}>
                                                    {item.inner}
                                                </p>
                                                <div className={styles.white}></div>
                                            </section>
                                        </li>
                                    )
                                });
                                return lis;
                            })()}
                        </nav>
                        <div className={styles.button}>
                            <a href="">更多</a>
                        </div>
                    </div>

                    <div className={styles.game}>
                        <div className={styles.gameTitle}>
                            <span>育碧游戏</span>
                        </div>
                        <nav className={styles.gameList}>
                            <li>
                                <div className={styles.gameInner}>
                                    <a href="">
                                        <img src={require('../../assets/img/division2.jpg')} alt="" />
                                    </a>
                                    <div className={styles.gameText}>
                                        <h3>全境封锁2</h3>
                                        <p className={styles.gameTime}>
                                            发布时间：2019-3-15
                                        </p>
                                        <div className={styles.icons}>
                                            <span className={styles.pc_icon}></span>
                                            <span className={styles.cons_icon}></span>
                                        </div>
                                    </div>
                                    <div className={styles.bottom_S}>
                                        <img src={require('../../assets/img/shadow.jpg')} alt="" />
                                    </div>
                                </div>
                            </li>
                        </nav>

                    </div>
                </main>
            </div>
        )
    }
}

export default HomeMain