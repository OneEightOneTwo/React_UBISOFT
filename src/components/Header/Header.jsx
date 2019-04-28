import React from 'react';
import styles from './Header.css';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '头部'
        }
    }
    render() {
        return (
            <div>
                <header className={styles.header}>

                </header>
            </div>
        );
    }
}

export default Header