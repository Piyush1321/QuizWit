import React from 'react';
import { useState, useEffect } from 'react';
import $ from 'jquery';
import PlanCard from './util/PlanCard';

function Plans() {
    const [plans, setPlans] = useState([]);
    useEffect(() => {
        $(".view-plans-btn").click(() => {
            $('html, body').animate({
                scrollTop: $(".plans").offset().top - 50
            }, 1);
        });

        const tempPlans = [
            {
                name: 'Free',
                amount: 0,
                durationInMonths: 1,
                contains: [
                    {
                        name: 'Create 2 exams',
                        type: 1
                    },
                    {
                        name: 'Add 2 section per exam',
                        type: 1
                    },
                    {
                        name: 'Maximum 10 question per section',
                        type: 1
                    },
                    {
                        name: 'Timer Exam',
                        type: 1
                    },
                    {
                        name: 'Section navigation control',
                        type: 0
                    },
                    {
                        name: 'Question navigation control',
                        type: 0
                    },
                    {
                        name: 'Shuffle questions',
                        type: 0
                    },
                    {
                        name: 'Syntax highlighting',
                        type: 0
                    },
                    {
                        name: 'Private exam add student group',
                        type: 0
                    },
                    {
                        name: 'Create user',
                        type: 0
                    }
                ]
            },
            {
                name: 'Silver',
                amount: 500,
                durationInMonths: 1,
                contains: [
                    {
                        name: 'Create 3 exams',
                        type: 1
                    },
                    {
                        name: 'Add 3 section per exam',
                        type: 1
                    },
                    {
                        name: 'Maximum 20 question per section',
                        type: 1
                    },
                    {
                        name: 'Timer Exam',
                        type: 1
                    },
                    {
                        name: 'Section navigation control',
                        type: 1
                    },
                    {
                        name: 'Question navigation control',
                        type: 0
                    },
                    {
                        name: 'Shuffle questions',
                        type: 0
                    },
                    {
                        name: 'Syntax highlighting',
                        type: 1
                    },
                    {
                        name: 'Private exam add student group',
                        type: 0
                    },
                    {
                        name: 'Create 1 user',
                        type: 1
                    }
                ]
            },
            {
                name: 'Gold',
                amount: 1000,
                durationInMonths: 3,
                contains: [
                    {
                        name: 'Create 5 exams',
                        type: 1
                    },
                    {
                        name: 'Add 5 section per exam',
                        type: 1
                    },
                    {
                        name: 'Maximum 30 question per section',
                        type: 1
                    },
                    {
                        name: 'Timer Exam',
                        type: 1
                    },
                    {
                        name: 'Section navigation control',
                        type: 1
                    },
                    {
                        name: 'Question navigation control',
                        type: 1
                    },
                    {
                        name: 'Shuffle questions',
                        type: 1
                    },
                    {
                        name: 'Syntax highlighting',
                        type: 1
                    },
                    {
                        name: 'Private exam add student group',
                        type: 1
                    },
                    {
                        name: 'Create 1 user',
                        type: 1
                    }
                ]
            }
        ];
        setPlans(tempPlans);

    }, []);
  return (
      <>
      <div className='plans'>
        <h1>Administrator Plans</h1>
        <div className='plan-row'>
            {
                plans.map((d, key) => {
                    return <PlanCard 
                        key={key}
                        name={d.name}
                        amount={d.amount}
                        durationInMonths={d.durationInMonths}
                        contains={d.contains}
                    />
                })
            }
        </div>
      </div>
      </>
  );
}

export default Plans;
