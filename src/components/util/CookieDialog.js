import React from 'react';
import { useEffect } from 'react';

import Cookie from '../../services/Cookie';
import Flash from '../../services/Flash';

import '../css/CookieDialog.css';

function CookieDialog() {

    useEffect(() => {
        if(!Cookie.get('cookieDialog')) {
            let el = document.getElementById('cookie-dialog');
            setTimeout(() => {
                el.style.display = 'block';
            }, 5000);
        }
    }, []);

    const removeDialog = () => {
        let el = document.getElementById('cookie-dialog');
        el.remove();
        if(!Cookie.set("cookieDialog", "close", 1)) {
            Flash.message('Cookie Dialog close cookie not created', 'bg-primary');
        }
    }

    const acceptCookie = () => {
        if(Cookie.set("windowWidth", window.innerWidth, 1)) {
            Flash.message('Cookie accepted successfully', 'bg-primary');
        }
        else {
            Flash.message('Cookie issue', 'bg-danger');
        }
        console.log(Cookie.get("windowWidth"));
    }
    return (
        <div id='cookie-dialog' className='cookie-dialog'>
            <div>
                <span className='close-btn' onClick={removeDialog}>
                    <i className='fas fa-times'></i>
                </span>
                <h3 className='secondary mb-10 '>Your privacy</h3>
                <p className='mb-10'>We use cookies to ensure you have the best browsing experience on our website. By using our site, you acknowledge that you have read and understood our <a href='' className='primary'>Cookie Policy</a> & <a href='' className='primary'>Privacy Policy</a></p>
                <div className='flex-row jc-e'>
                    <button className='btn btn-primary btn-small' onClick={acceptCookie}>Accept</button>
                </div>
            </div>
        </div>
    );
}

export default CookieDialog;
