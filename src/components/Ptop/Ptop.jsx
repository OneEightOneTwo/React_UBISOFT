import React from 'react';
import styles from './Ptop.css';


class Ptop extends React.Component {
    render() {
        return (
            <div className={styles.top}>
                <p>在育碧商城发现更多!</p>
                <a href="">立即前往</a>
            </div>
        );
    }
}


export default Ptop