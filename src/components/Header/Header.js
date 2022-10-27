import React from 'react';
import styles from './Header.module.css'
import {Link} from 'react-router-dom';

export default function Header(){
    return (
        <>
        <nav className={styles.header}>
            <div className="row col-8 d-flex align-items-start text-white">
                    <ul className="row navbar-items col-8 align-items-right">
                        <li className="navbar-item col">
                            <Link to='/'>
                                Home
                            </Link>
                        </li>
                        <li className="navbar-item col">
                            <Link to='/register'>
                                Registration
                            </Link>
                        </li>
                    </ul>
            </div>
        </nav>
        </>
    )
}