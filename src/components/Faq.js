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
                    <div>QuizWit is a online exam web application that enables you to tackle your weak points in exams with the help of analytics.

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
                        Currently we are providing 3 plans for administrator and 2 plans for students.
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
                        We use AWS S3 to store multimedia files for fast processing.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Faq;
