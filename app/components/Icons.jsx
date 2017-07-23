import React from 'react';
import Highlight from 'react-highlight';



export default function Icons(){
    return (
             <div className='section'>
                <h1>Accessible Font Awesome Icons</h1>
                <p><a className='pink-focus' href='http://fontawesome.io/accessibility/' target='_blank'>Using Font Awesome with Acessibility in mind</a></p>
                <p>It is important to make icons that convery information or initiate an action such as a button or link accessible. Font awesome provides a CDN that has auto accessibility. However, you can set up accessibility manually with Font Awesome Icons. Below are some examples.</p>
                <h2>Icons used for visual styling or decoration</h2>
                <p>Icons that are for pure decoration or branding do not need to be announced by screen readers. Screen readers will skip icons that have the <span className='code-inline'>aria-hidden</span> attribute set to true.</p>
                <h3>Examples</h3>
                <div className='row'>
                    <div className='col m6'>
                         <div className="card grey lighten-4">
                            <div className="card-content white-text">
                                <i className="fa fa-heart fa-5x" aria-hidden="true"></i>
                               <Highlight className='html'>
                                    {"<i class='fa fa-heart' aria-hidden='true'></i>"}
                                </Highlight>
                          </div>
                        </div>
                    </div>
                    <div className='col m6'>
                         <div className="card grey lighten-4">
                            <div className="card-content white-text">
                                <div id="view-git"><i className='fa fa-github fa-5x' aria-hidden='true'></i> View My Github</div>
                               <Highlight className='html'>
                                    {`<a href='https://github.com/oliviaoddo'>\n\t<i class='fa fa-github' aria-hidden='true'></i>View My Github\n</a>`}
                                </Highlight>
                          </div>
                        </div>
                    </div>
                </div>
                <h2>Icons that provide information</h2>
                <p>Icons that convey meaning need to be conveyed to the screen reader as well. Text alternatives can be provided with the use of a <span className='code-inline'>span</span> tag. If you do not want the description to be displayed visually, you can hide it with CSS. The <span className='code-inline'>title</span> attribute can be added to the icon for users who may have a hard time understanding what icons are suppossed to mean. When an icon is hovered over, the description will be displayed.</p>
                <p><a className='pink-focus' href='/css'>How to hide span elements correctly.</a></p>
                <h3>Examples</h3>
                <div className='row'>
                    <div className='col m6'>
                         <div className="card grey lighten-4">
                            <div className="card-content white-text">
                                <div>
                                    <i className="fa fa-star fa-5x" aria-hidden="true"></i>
                                    <i className="fa fa-star fa-5x" aria-hidden="true"></i>
                                    <i className="fa fa-star fa-5x" aria-hidden="true"></i>
                                    <i className="fa fa-star fa-5x" aria-hidden="true"></i>
                                    <i className="fa fa-star-half-o fa-5x" aria-hidden="true"></i>
                                    <span className="sr-only">4.5 out of 5 stars</span>
                                </div>
                               <Highlight className='html'>

                                    {`<div class='star-rating'>\n\t<i class='fa fa-star' aria-hidden='true'></i>\n\t<i class='fa fa-star' aria-hidden='true'></i>\n\t<i class='fa fa-star' aria-hidden='true'></i>\n\t<i class='fa fa-star' aria-hidden='true'></i>\n\t<i class='fa fa-star-half-o' aria-hidden='true'></i>\n\t<span class='sr-only'>4.5 out of 5 stars</span>\n</div>`}
                                </Highlight>
                          </div>
                        </div>
                    </div>
                    <div className='col m6'>
                         <div className="card grey lighten-4">
                            <div className="card-content white-text">
                              <div id='test'>
                                Start Test <i className="fa fa-hourglass-half" aria-hidden="true" title="The test is timed."></i>
                                <span className="sr-only">The test is timed.</span>
                                </div>
                               <Highlight className='html'>
                                    {`<i class="fa fa-hourglass-half" aria-hidden="true" title="The test is timed."></i>\n<span class="sr-only">The test is timed.</span>`}
                                </Highlight>
                          </div>
                        </div>
                    </div>
                </div>
                <h2>Interactive Icons</h2>
                <p>If an icon is interactive and focusable, the <span className='code-inline'>aria-label</span> attribute with a text description can be used instead of a <span className='code-inline'>span</span> text alternative.</p>
                <h3>Examples</h3>
                <div className='row'>
                    <div className='col m6'>
                         <div className="card grey lighten-4">
                            <div className="card-content white-text">
                                <table className='striped black-text'>
                                <thead>
                                  <tr>
                                      <th>Item</th>
                                      <th>Price</th>
                                      <th></th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>Macbook Pro</td>
                                    <td>$2,399.00</td>
                                    <td><i className="fa fa-trash-o" aria-hidden="true" title="Delete this item?"></i></td>
                                  </tr>
                                  <tr>
                                    <td>iPhone 7</td>
                                    <td>$649.00</td>
                                    <td><i className="fa fa-trash-o" aria-hidden="true" title="Delete this item?"></i></td>
                                  </tr>
                                </tbody>
                              </table>
                               <Highlight className='html'>
                                    {`<Link className="btn btn-danger" onClick="{this.deleteItem}" aria-label="Delete">\n\t<i class="fa fa-trash-o" aria-hidden="true" title="Delete this item?"></i>\n</Link>`}
                                </Highlight>
                          </div>
                        </div>
                    </div>
                    <div className='col m6'>
                         <div className="card grey lighten-4">
                            <div className="card-content white-text">

                                    <i className='fa fa-shopping-cart fa-5x' aria-hidden='true' title='View Cart'></i>

                               <Highlight className='html'>
                                    {`<Link to="/cart" aria-label='View the items in your cart'>\n\t<i class='fa fa-shopping-cart' aria-hidden='true title='View Cart'></i>\n</Link>`}
                                </Highlight>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
