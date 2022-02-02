import React from 'react';
import { useEffect } from 'react';

import '../css/OtpDialog.css';

function OtpDialog(props) {

    const focusChange = () => {
        let otpDialog = document.getElementById('otp-dialog');
        let inputs = otpDialog.getElementsByTagName('input');
        for(let i=0; i<inputs.length; i++) {
            inputs[i].addEventListener('input', (e) => {

                // backspace not working
                if(e.inputType === 'deleteContentBackward' && e.target.value === '') {
                    inputs[i].value = '';
                    if(i !== 0)
                        inputs[i-1].focus();
                    console.log('great')
                }
                else if(i+1 < inputs.length)
                    inputs[i+1].focus();
            })
        }
    }

    useEffect(() => {
        focusChange();
    }, []);

    return (
        <div id="otp-dialog" className='otp-dialog'>
            <div>
            <p className='secondary bold'>Enter your OTP</p>
            <div className='response'></div>
            <div className='flex-row'>
                <input type="text" name="otp" max={1} />
                <input type="text" name="otp" max={1} />
                <input type="text" name="otp" max={1} />
                <input type="text" name="otp" max={1} />
                <input type="text" name="otp" max={1} />
                <input type="text" name="otp" max={1} />
            </div>
            <div className='flex-row jc-sb mt-15'>
                <button className='btn btn-tertiary btn-small' onClick={props.onclick1}>Resend OTP</button>
                <button className='btn btn-primary btn-small' onClick={props.onclick2}>Verify</button>
            </div>
            </div>
        </div>
    );
}

export default OtpDialog;
