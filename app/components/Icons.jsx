import React from 'react';
import Highlight from 'react-highlight';



export default function Icons(){
    return (
             <div className='section'>
                <h1>Accessible Font Awesome Icons</h1>
                <p><a href='http://fontawesome.io/accessibility/'>Using Font Awesome with Acessibility in mind</a></p>
                <p>It is important to make icons that convery information or initiate an action such as a button or link accessible. Font awesome provides a CDN that has auto accessibility. However, you can set up accessibility manually with Font Awesome Icons. Below are some examples.</p>
                <h2>Icons used for visual styling or decoration.</h2>
                <p>Icons that are for pure decoration or branding do not need to be announced by screen readers. Screen readers will skip icons that have the <span className='code-inline'>aria-hidden</span> attribute set to true.</p>
                <h3>Examples</h3>
                <div className='row'>
                    <div className='col m6'>
                         <div className="card grey lighten-4">
                            <div className="card-content white-text">
                                <i className="fa fa-heart fa-5x" aria-hidden="true"></i>
                               <Highlight className='javascript'>
                                    {"<i class='fa fa-heart' aria-hidden='true'></i>"}
                                </Highlight>
                          </div>
                        </div>
                    </div>
                    <div className='col m6'>
                         <div className="card grey lighten-4">
                            <div className="card-content white-text">
                                <a href='https://github.com/oliviaoddo' target='_blank'><i className='fa fa-github fa-5x' aria-hidden='true'></i> View My Github</a>
                               <Highlight className='javascript'>
                                    {"<a href='https://github.com/oliviaoddo'><i class='fa fa-github' aria-hidden='true'></i> View My Github</a>"}
                                </Highlight>
                          </div>
                        </div>
                    </div>
                </div>
                <h2>Icons that provide information or interactivity.</h2>
                <p>Icons that convey meaning need to be conveyed to the screen reader as well. Text alternatives can be provided with the use of a <span className='code-inline'>span</span> tag. If you do not want the description to be displayed visually, you can hide it with CSS. The <span className='code-inline'>title</span> attribute can be added to the icon for users who may have a hard time understanding what icons are suppossed to mean. When an icon is hovered over, the description will be displayed.</p>
                <h3>Examples</h3>
                <div className='row'>
                    <div className='col m6'>
                         <div className="card grey lighten-4">
                            <div className="card-content white-text">
                                <i className="fa fa-heart fa-5x" aria-hidden="true"></i>
                               <Highlight className='javascript'>
                                    {"<i class='fa fa-heart' aria-hidden='true'></i>"}
                                </Highlight>
                          </div>
                        </div>
                    </div>
                    <div className='col m6'>
                         <div className="card grey lighten-4">
                            <div className="card-content white-text">
                                <a href='https://github.com/oliviaoddo' target='_blank'><i className='fa fa-github fa-5x' aria-hidden='true'></i> View My Github</a>
                               <Highlight className='javascript'>
                                    {"<a href='https://github.com/oliviaoddo'><i class='fa fa-github' aria-hidden='true'></i> View My Github</a>"}
                                </Highlight>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
