import React from 'react';
import styles from './CarPage.css';
function CarPage() {
    return (
        <div className={styles.car}>
            <div className={styles.left}>
                <h3>购物车 5 件商品</h3>
                <div className={styles.item}>
                    <div className={styles.item_img}>
                        <img src={require('../../assets/img/1.jpg')} alt="" />
                    </div>
                    <div className={styles.item_details}>
                        <div className={styles.item_details_row1}>
                            <div className={styles.box1}>
                                <a href="">全境封锁 2</a>
                                <br />
                                <span>标准版</span>
                            </div>
                            <div className={styles.box2}>
                                <img src={require('../../assets/img/date.png')} alt="" />
                                <span className={styles.span1}>发售自 19-3-14</span>
                            </div>
                        </div>
                        <div className={styles.item_details_row2}>
                            平台：<span className={styles.dow}>pc版下载</span>
                            <span>数量</span>
                            <span style={{ color: "#929db6", marginLeft: '30px', fontFamily: "Ubisoft Sans Bold" }}>1 </span>
                            <span style={{ fontSize: "1.75rem", marginLeft: "150px" }}>￥308.00</span>
                            <a href="">
                                <img src={require('../../assets/img/fuck.png')} style={{ marginLeft: "80px", verticalAlign: "super" }} alt="" />
                            </a>
                        </div>
                        <div className={styles.item_details_row3}>
                            <span>最多可得：</span>
                            <img src={require('../../assets/img/king.png')} alt="" />
                            <span style={{ fontSize: ".9375rem", color: "#edc800", marginLeft: "7px" }}>19</span>
                        </div>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.item_img}>
                        <img src={require('../../assets/img/2.jpg')} alt="" />
                    </div>
                    <div className={styles.item_details}>
                        <div className={styles.item_details_row1}>
                            <div className={styles.box1}>
                                <a href="">孤岛惊魂：新曙光</a>
                                <br />
                                <span>标准版</span>
                            </div>
                            <div className={styles.box2}>
                                <img src={require('../../assets/img/date.png')} alt="" />
                                <span className={styles.span1}>发售自 19-01-06</span>
                            </div>
                        </div>
                        <div className={styles.item_details_row2}>
                            平台：<span className={styles.dow}>pc版下载</span>
                            <span>数量</span>
                            <span style={{ color: "#929db6", marginLeft: '30px', fontFamily: "Ubisoft Sans Bold" }}>1 </span>
                            <span style={{ fontSize: "1.75rem", marginLeft: "150px" }}>￥104.00</span>
                            <a href="">
                                <img src={require('../../assets/img/fuck.png')} style={{ marginLeft: "80px", verticalAlign: "super" }} alt="" />
                            </a>
                        </div>
                        <div className={styles.item_details_row3}>
                            <span>最多可得：</span>
                            <img src={require('../../assets/img/king.png')} alt="" />
                            <span style={{ fontSize: ".9375rem", color: "#edc800", marginLeft: "7px" }}>19</span>
                        </div>
                    </div>
                </div>
                <div className={styles.totals}>
                    <span style={{ fontSize: "1rem", color: "#0a0a0a", paddingLeft: "40px" }}>总计</span>
                    <span style={{ fontSize: "1.75rem", color: "#0a0a0a", marginLeft: "480px" }}>￥496.00</span>
                    <span style={{ fontSize: ".875rem", color: "#0a0a0a", paddingLeft: "10px" }}>含税</span>
                </div>
            </div>
            <div className={styles.rigth}>
                <h3 style={{ padding: "21px 0 21px 35px", marginBottom: "20px" }}>订单摘要</h3>
                <div className={styles.order}>
                    <div className={styles.row1} style={{ paddingBottom: "28px", borderBottom: "2px dotted #767676" }}>
                        <p style={{ fontSize: ".9375rem", color: "#0a0a0a", display: "inline-block" }}>购物车 <span>2</span> 件商品</p>
                        <p style={{ display: "inline-block", float: "right" }}>
                            <span style={{ fontSize: "1.5625rem", color: "#0a0a0a" }}>￥496.00</span>
                        </p>
                    </div>
                    <div className={styles.row2} style={{ paddingTop: "10px", paddingBottom: "15px", borderBottom: "2px dotted #767676" }}>
                        <p style={{ marginBottom: "10px" }}><a style={{ fontSize: ".9375rem", color: "#35c1cf" }} href="">用 <img src={require('../../assets/img/u.png')} alt="" /> <span style={{ color: "#edc800" }}>100</span> 享 8 折优惠</a></p>
                        <a style={{ fontSize: ".8375rem", textDecoration: "underline", color: "#000413" }} href="">使用优惠码</a>
                    </div>
                    <div style={{ paddingTop: "10px", paddingBottom: "15px" }} className={styles.row3}>
                        <p style={{ fontSize: "1.5625rem", color: "#0a0a0a" }}>
                            总计
                            <span style={{ float: "right", fontFamily: "Ubisoft Sans Bold" }}><strong>￥469.00</strong></span>
                        </p>
                        <p style={{ fontSize: ".9375rem", color: "#0a0a0a" }}>
                            获得的Club点数：<img src={require('../../assets/img/king.png')} alt="" />&nbsp;
                            <span style={{ verticalAlign: "middle", color: "#edc800" }}>50</span>
                            <span style={{ float: "right" }}>含税</span>
                        </p>
                    </div>
                </div>
                <div className={styles.dd} style={{ textAlign: "center", marginTop: "30px" }}>
                    <p className={styles.end} style={{marginBottom:"15px", display: "inline-block", background: "#3bd373", textAlign: "center", padding: "9px 0", borderRadius: "26px", cursor: "pointer" }}><span className={styles.ddd}>结账</span></p><br/>
                    <img src={require('../../assets/img/zhifu.png')} alt=""/>
                </div>
            </div>
        </div>
    );
}

CarPage.propTypes = {};

export default CarPage;