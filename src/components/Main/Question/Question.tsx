import React, { useState } from 'react';
import '../Question/Question.scss';

const Question: React.FC = () => {
    const [openQuestion, setOpenQuestion] = useState<string | null>(null);

    const toggleAnswer = (questionId: string) => {
        if (openQuestion === questionId) {
            setOpenQuestion(null); // Close the currently open question
        } else {
            setOpenQuestion(questionId); // Open the clicked question
        }
    };

    return (
        <div className="faq-container">

            <div className='faq-name'>
            <div className={`nav__logo `}>
                            <span>є</span>
                            <p>Лазер</p>
                        </div>
                        <h3 className='faq-subtitle'>Умови оферти</h3>
            </div>
            
            <div className='faq-wrapper'>
                <h3 className="faq-title">Часті запитання</h3>

                <div className={`faq-item ${openQuestion === 'question1' ? 'open' : ''}`}>
                
                <div 
                    className="faq-question" 
                    id="question1" 
                    onClick={() => toggleAnswer('question1')}
                >
                    Як часто робити процедуру? <span className="faq-icon"></span>
                </div>
                <div className={`faq-answer ${openQuestion === 'question1' ? 'open' : ''}`} id="answer1">
                    <p>Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, eveniet. ipsum dolor sit, amet consectetur adipisicing elit. Doloremque ipsum iure voluptates aut enim, aliquam illo dolor quam esse officiis.</p>
                </div>
            </div>

            <div className={`faq-item ${openQuestion === 'question2' ? 'open' : ''}`}>
                <div 
                    className="faq-question" 
                    id="question2" 
                    onClick={() => toggleAnswer('question2')}
                >
                    Як часто робити процедуру? <span className="faq-icon"></span>
                </div>
                <div className={`faq-answer ${openQuestion === 'question2' ? 'open' : ''}`} id="answer2">
                    <p>Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi error aspernatur dolore. dolor sit, amet consectetur adipisicing elit. Doloremque ipsum iure voluptates aut enim, aliquam illo dolor quam esse officiis.</p>
                </div>
            </div>

            <div className={`faq-item ${openQuestion === 'question3' ? 'open' : ''}`}>
                <div 
                    className="faq-question" 
                    id="question3" 
                    onClick={() => toggleAnswer('question3')}
                >
                    Як часто робити процедуру?<span className="faq-icon"></span>
                </div>
                <div className={`faq-answer ${openQuestion === 'question3' ? 'open' : ''}`} id="answer3">
                    <p>Lorem ipsum dolor Lorem ipsum dolor sit amet. sit, amet consectetur adipisicing elit. Doloremque ipsum iure voluptates aut enim, aliquam illo dolor quam esse officiis.</p>
                </div>
            </div>

            <div className={`faq-item ${openQuestion === 'question4' ? 'open' : ''}`}>
                <div 
                    className="faq-question" 
                    id="question4" 
                    onClick={() => toggleAnswer('question4')}
                >
                    Як часто робити процедуру? <span className="faq-icon"></span>
                </div>
                <div className={`faq-answer ${openQuestion === 'question4' ? 'open' : ''}`} id="answer4">
                    <p>Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore beatae sapiente distinctio assumenda fugiat quasi. sit, amet consectetur adipisicing elit. Doloremque ipsum iure voluptates aut enim, aliquam illo dolor quam esse officiis.</p>
                </div>
            </div>

            <div className={`faq-item ${openQuestion === 'question5' ? 'open' : ''}`}>
                <div 
                    className="faq-question" 
                    id="question5" 
                    onClick={() => toggleAnswer('question5')}
                >
                    Лазерна епіляція - це боляче?<span className="faq-icon"></span>
                </div>
                <div className={`faq-answer ${openQuestion === 'question5' ? 'open' : ''}`} id="answer5">
                    <p>Lorem ipsum Lorem ipsum dolor sit. dolor sit, amet consectetur adipisicing elit. Doloremque ipsum iure voluptates aut enim, aliquam illo dolor quam esse officiis.</p>
                </div>
            </div>
            </div>
           
        </div>
    );
};

export default Question;