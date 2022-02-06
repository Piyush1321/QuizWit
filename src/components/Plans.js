import React from 'react';
import { useEffect } from 'react';
import $ from 'jquery';
import PlanCard from './util/PlanCard';

function Plans() {
    useEffect(() => {
        $("#view-plans-btn").click(() => {
            $('html, body').animate({
                scrollTop: $(".plans").offset().top - 50
            }, 1);
        });
    }, []);
  return (
      <div className='plans'>
        <h1>Administrator Plans</h1>
        <div className='plan-row'>
            <PlanCard 
                name='Free'
                amount='0'
                contains={['Create 2 exams', 'Create 2 section per exam', 'Maximum 20 Questions in a section', 'Timer on Exam']}
            />
            <PlanCard
                name='Silver'
                amount='500'
                contains={['Create 5 exams', 'Create 1 user', 'Create 3 section per exam', 'Maximum 50 Questions in a section', 'Timer on Exam/Section']}
            />
            <PlanCard
                name='Gold'
                amount='1000'
                contains={['Create 10 exams', 'Create 3 user', 'Create 5 section per exam', 'Maximum 100 Questions in a section', 'Timer on Exam/Section/Question', 'Navigation settings', 'Private Add student group']}
            />
        </div>
        <h1 className='mt-10'>Student Plans</h1>
        <div className='plan-row'>
            <PlanCard 
                name='Free'
                amount='100'
                contains={['Attempt 2 exams']}
            />
            <PlanCard
                name='Premium'
                amount='300'
                contains={['Create 5 exams', 'Create 1 user', 'Create 3 section per exam', 'Maximum 50 Questions in a section', 'Timer on Exam/Section']}
            />
        </div>
      </div>
  );
}

export default Plans;
