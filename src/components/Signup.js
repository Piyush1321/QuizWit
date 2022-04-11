import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import Request from '../services/Request';
import OtpDialog from './util/OtpDialog';
import Flash from '../services/Flash';

import './css/Signup.css'

function Signup() {

    const processing = (el, text) => {
        let icon = '<i class="fas fa-sync-alt fa-spin mr-5"></i>';
        el.innerHTML = icon + text;
    }

    const registration = (e) => {
        processing(document.getElementById('registration-btn'), 'Processing');
        e.preventDefault();
        let emailInput = document.getElementById('email-input');
        emailInput.disabled = false;
        let formData = $('#signup-form').serialize();
        console.log(formData);
        let url = 'http://localhost:8080/QuizWit/Registration';
        Request.post(url, formData).then((res) => {
            populateResponse(res);
        })
        return false;
    }

    const populateResponse = (res) => {
        console.log(res);
        document.getElementById('registration-btn').innerText = 'Register';
        let responseBlock = document.getElementById('signup-form').getElementsByClassName('response');
        if(res.error) {
            Flash.message(res.error, 'bg-danger');
        }
        if(res.success) {
            registrationReset();
            alert('login successful');
            Flash.message('Registration successful', 'bg-success');
        }
        else {
            let log = res.errorLog;
            let icon = '<i class="fas fa-exclamation-circle mr-5"></i>';
            responseBlock[0].innerHTML = (log.user ? icon + log.user : '');
            responseBlock[1].innerHTML = (log.firstName ? icon + log.firstName : '');
            responseBlock[2].innerHTML = (log.email ? icon + log.email: '');
            responseBlock[3].innerHTML = (log.contact ? icon + log.contact: '');
            if(log.email) {
                document.getElementById('email-verify-btn').style.display = 'block';
                document.getElementById('email-verified').style.display = 'none';
                document.getElementById('email-input').disabled = false;
            }
            responseBlock[4].innerHTML = (log.password ? icon + log.password: '');
            responseBlock[5].innerHTML = (log.confirmPassword ? icon + log.confirmPassword: '' );
        }

    }

    const registrationReset = () => {
        document.getElementById('email-verified').style.display = 'none';
        document.getElementById('signup-form').reset();
        document.getElementById('email-input').disabled = false;
        let responseBlock = document.getElementById('signup-form').getElementsByClassName('response');
        for(let i=0; i<responseBlock.length; i++) {
            responseBlock[i].innerHTML = '';
        }
    }

    const emailVerification = () => {
        let verifyBtn = document.getElementById('email-verify-btn');
        processing(verifyBtn, 'Sending OTP');
        let emailElementId = 'email-input';
        let email = document.getElementById(emailElementId).value;
        let userEl = document.getElementsByName('user');
        let user;
        if(!userEl[0].checked && !userEl[1].checked) {
            user = '';
        }
        else {
            user = '&user=';
            user += userEl[0].checked ? userEl[0].value : userEl[1].value;
        }
        let data = 'email=' + email + user;
        console.log(data);
        let url = 'http://localhost:8080/QuizWit/EmailVerification';
        Request.post(url, data).then((res) => {
            renderOtpDialog(res);
        }).catch((e) => {
            // flash message
        })
        return false;
    }

    const [otpDialogToggle, setOtpDialogToggle] = useState(0);

    const renderOtpDialog = (res) => {
        console.log('render otp dialog function');
        console.log(res);
        let verifyBtn = document.getElementById('email-verify-btn');
        verifyBtn.innerText = 'Verify';
        if(res.success) {
            setOtpDialogToggle(!otpDialogToggle);
            toggleDivHorizontal('otp-dialog', otpDialogToggle, 344, 0);
            let otpDialog = document.getElementById('otp-dialog');
            let inputs = otpDialog.getElementsByTagName('input');
            inputs[0].focus();
            console.log('dialog open');
        }
        else {
            let icon = '<i class="fas fa-exclamation-circle mr-5"></i>';
            document.getElementById('email-response').innerHTML = icon + res.error;
        }
    }

    const toggleDivHorizontal = (id, t, openWidth, closeWidth) => {
        let el = document.getElementById(id);
        let width = t ? openWidth : closeWidth;
        el.style.transition = 'all 800ms';
        el.style.width = width + 'px';
    }
    
    const matchOtp = () => {
        let otpDialog = document.getElementById('otp-dialog');
        let icon = '<i class="fas fa-exclamation-circle mr-5"></i>';
        let type = 'emailOtp';
        let inputs = otpDialog.getElementsByTagName('input');
        let otp = '';
        for(let i=0; i<inputs.length; i++) {
            if(inputs[i].value !== '')
                otp += inputs[i].value;
            else {
                let responseBlock = otpDialog.getElementsByClassName('response')[0];
                responseBlock.innerHTML = icon + 'OTP required';
                return;
            }
        }
        let data = 'type=' + type + '&' + 'otp=' + otp;
        console.log(data);
        let url = 'http://localhost:8080/QuizWit/VerifyOtp';
        Request.post(url, data).then((res) => {
            otpResponse(res);
        }).catch((e) => {
            // flash message
        })
    }

    useEffect(() => {
        toggleDivHorizontal('otp-dialog', otpDialogToggle, 344, 0);
    }, [])
    useEffect(() => {
        toggleDivHorizontal('otp-dialog', otpDialogToggle, 344, 0);
    }, [otpDialogToggle]);
    const otpResponse = (res) => {
        let otpDialog = document.getElementById('otp-dialog');
        let responseBlock = otpDialog.getElementsByClassName('response')[0];
        let verified = document.getElementById('email-verified');
        if(res.success) {
            verified.style.display = 'block';
            document.getElementById('email-input').disabled = true;
            document.getElementById('email-verify-btn').style.display = 'none';
            document.getElementById('email-response').innerHTML = '';
            setOtpDialogToggle(!otpDialogToggle);
        }
        else {
            responseBlock.innerText = res.error;
            verified.style.display = 'none';
        }
    }
    return (
        <>
            <OtpDialog onclick1={emailVerification} onclick2={matchOtp}/>
            <div className='signup-cover flex-row'>
                <div className='flex-full flex-col jc-c ai-e'>
                    <div>
                        <h2 className='mb-20'>Explore Free Plan services with a new QuizWit account.</h2>
                        <p>
                            To learn more, see 
                            <br />
                            <br />
                            <Link to='' className='cover-btn'>QuizWit Susbcription Plans</Link>
                        </p>
                        <br />
                        <br />
                        <br />
                        <h2>See Dashboard UI</h2>
                        <div className='flex-row flex-wrap pt-20'>
                            <Link to='' className='cover-btn mr-10'><i className='fas fa-users-cog mr-10'></i> Administrator</Link>
                            <Link to='' className='cover-btn mr-10'><i className='fas fa-user-graduate mr-10'></i>Student</Link>
                            <Link to='' className='cover-btn'><i className='fas fa-diagnoses mr-10'></i>Exam</Link>
                        </div>
                    </div>
                </div>
                <div className='flex-full flex-col jc-c ai-c'>  
                    <form id='signup-form' className='form sign-up-form' onSubmit={registration}>
                        <h1 className='header primary'>Registration</h1>
                        <div className='input-block'>
                            <div className='customized-radio-sticky'>
                                <label>Registration as</label>
                                <div>
                                    <label className='flex-full'>
                                        <input type='radio' name='user' value='1' />
                                        <span>Admin</span>
                                    </label>
                                    <label className='flex-full'>
                                        <input type='radio' name='user' value='2' />
                                        <span>Student</span>
                                    </label>
                                </div>
                                <div className='response'></div>
                            </div>
                        </div>
                        <div className='input-block'>
                            <div className='input-container-floating-bb'>
                                <input type='text' name='fullName' required/>
                                <label>Full Name</label>
                                <div className='response'></div>
                            </div>
                        </div>
                        <div className='input-block'>
                            <div className='input-container-floating-bb'>
                                <input id='email-input' type='email' name='email' required/>
                                <label className='flex-row'>Email 
                                    <span id='email-verified' className='success ml-10'>
                                        <i className='fas fa-check mr-10'></i>
                                        Verified
                                    </span>
                                </label>
                                <div className='response' id='email-response'></div>
                            </div>
                            <div className='input-container-floating-bb'>
                                <input type='number' name='contact' required/>
                                <label>Contact</label>
                                <div className='response'></div>
                            </div>
                        </div>
                        {/* <div className='input-block ai-c'>
                            <label id='email-verify-btn' className='btn btn-success btn-small ml-10' onClick={emailVerification}>Verify</label>
                        </div> */}
                        <div className='input-block'>
                            <div className='input-container-floating-bb'>
                                <input type='password' name='password' required/>
                                <label>Password</label>
                                <div className='response'></div>
                            </div>
                            <div className='input-container-floating-bb'>
                                <input type='password' name='confirmPassword' required/>
                                <label>Confirm Password</label>
                                <div className='response'></div>
                            </div>
                        </div>
                        <div className='flex-row jc-sb'>
                            <div className='btn btn-fade btn-small' onClick={registrationReset}>Reset</div>
                            <button id="registration-btn" className='btn btn-primary btn-small'>Register</button>
                        </div>
                        <div className='footer'>
                            Problem in registration? <Link className='anchor-color-primary' to='/support'>Support</Link>
                        </div>
                    </form>
                </div>  
            </div>
        </>
    )
}

export default Signup
