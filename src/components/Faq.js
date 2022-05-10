import React from 'react';
import { useEffect } from 'react';
import $ from 'jquery';
import './css/Faq.css';

function Faq() {
    useEffect(() => {
        $("#faq-btn").click(() => {
            $('html, body').animate({
                scrollTop: $(".faq").offset().top - 50
            }, 1);
        });

        let questions = document.getElementsByClassName('question');
        let answers = document.getElementsByClassName('answer');
        let iconContainer = document.getElementsByClassName('icon-container');
        for(let i=0; i<questions.length; i++) {
            answers[i].style.display= 'none';
            questions[i].addEventListener('click', () => {
                let v = answers[i].style.display;
                console.log(v);
                let icon = v == 'none' ? 'fas fa-times' : 'fas fa-plus';
                v = v == 'block' ? 'none' : 'block';
                answers[i].style.display = v;
                icon = `<i class='${icon}'></i>`;
                questions[i].getElementsByClassName('icon-container')[0].innerHTML = icon;
            });
        }

    }, []);
    return (
        <div className='faq'>
            <h1>Frequently Asked Questions</h1>
            <div className='container'>
                <div className='question'>
                    <div>
                        What is QuizWit?
                    </div>
                    <div className='icon-container'>
                        <i className='fas fa-plus'></i>
                    </div>
                </div>
                <div className='answer'>
                    <div>QuizWit is a online exam web application with salient features for both the users Aministrator and Student. 
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='question'>
                    <div>
                        How much QuizWit cost?
                    </div>
                    <div className='icon-container'>
                        <i className='fas fa-plus'></i>
                    </div>
                </div>
                <div className='answer'>
                    <div>
                        We provide different subscription plans under which certain features are available.
                        <br />
                        For more <span href='' className='primary ul view-plans-btn cursor-p'>View Plans</span>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='question'>
                    <div>
                        Why Quizwit?
                    </div>
                    <div className='icon-container'>
                        <i className='fas fa-plus'></i>
                    </div>
                </div>
                <div className='answer'>
                    <div>
                        User friendly UI, Fast and automated.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Faq;
