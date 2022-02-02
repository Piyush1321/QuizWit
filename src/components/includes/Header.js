import React from 'react'
import { useState, useEffect } from 'react';
import {Link, NavLink} from 'react-router-dom';

import Animation from '../../services/Animation';

import '../css/Header.css'

function Header() {
    const [signin, setSignin] = useState(0);
    const signinDialog = () => {
        setSignin(!signin);
    }
    useEffect(() => {
        Animation.toggleDivVertical('signin-dialog', signin, 250, 0);
    }, [signin]);
    return (
        <>
            <header id="main-header" className='main-header'>
                <Link className='logo flex-row jc-c' to='/'>
                    <h3>
                        <img src='images/logo/logo.png' alt='logo'/>
                    </h3>
                </Link>
                <div className='navigation flex-full flex-row jc-c'>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/services'  >Services</NavLink>
                    <NavLink to='/products' >Blogs</NavLink>
                    <NavLink to='/contact-us' >Contact Us</NavLink>
                    <NavLink to='/dashboard' >About Us</NavLink>
                </div>
                <div className='sign-up flex-row'>
                    <Link to='/signup' className='btn btn-primary btn-small'>Sign Up</Link>
                    <button id="signin-btn" className='btn btn-primary btn-small ml-10' onClick={signinDialog}>Sign In
                        <div id='signin-dialog'>
                            <div>
                                <p>Sign In as</p>
                                <div className='mt-20 mb-20'>
                                    <a className='btn btn-primary btn-medium' href='http://localhost:3001' target='_blank'>Admin</a>
                                    <a className='btn btn-secondary btn-medium ml-10' href='http://localhost:3002' target='_blank'>Student</a>
                                </div>
                                <div></div>
                            </div>
                        </div>
                    </button>
                </div>
            </header>
            <div className='main-header-padding'></div>
        </>

    )
}

export default Header