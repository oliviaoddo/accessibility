import React from 'react';
import Highlight from 'react-highlight';


export default function Forms(){
    return (
            <div className='section'>
                <h1>Forms</h1>
                <p>Forms can be made more accessible by incorporating labeling controls, grouping controls, form instructions, input validation, and user notifications.</p>
                <h2>Why is it important for forms to be accessible?</h2>
                <ul>
                    <li>It is easier for people with cognitive disabilities to complete forms when they are provided with instructions and feedback.</li>
                    <li>People who use speech input can use labels via voice commands to activate controls, and move between fields and focus on them.</li>
                    <li>People who use speech input can use labels via voice commands to activate controls, and move between fields and focus on them.</li>
                    <li>People with mobility impairment benefit from being able to click on the large area that labels provide. When a label is clicked, the input is focused on, which is especially helpful for smaller inputs such as radio buttons and checkboxes.</li>
                    <li>People who use screen readers can more easily understand what input is needed when labels and field sets are used.</li>
                </ul>
                <div className="row">
                <div className="col m6">
                 <span className='passTop'>Correct <i className="fa fa-check" aria-hidden="true"></i></span>
                  <div className="card">
                    <div className="card-content">
                    <form>
                        <fieldset>
                        <legend>Account Information</legend>
                        <div className='input-field'>
                            <input className='validate' type='text' name ='first_name' id='fname' />
                            <label  data-error="Invalid input. No Special characters." data-success="Valid Input" htmlFor='fname'>First Name</label>
                        </div>
                        <div className='input-field'>
                            <input className='validate' type='text' name ='last_name' id='lname' />
                            <label  data-error="Invalid input. No Special characters." data-success="Valid Input"htmlFor='lname'>Last Name</label>
                        </div>
                        <div className='input-field'>
                            <input className='validate' type='email' name ='email' id='emailInput' required aria-required="true"/>
                            <label data-error="Invalid Email Address. Follow format example@gmail.com" data-success="Valid Input" htmlFor='emailInput'>Email (required)</label>
                        </div>
                        <div className='input-field'>
                            <input className='validate' type='text' name ='birthday' id='birthday' pattern="(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d" required aria-required="true" />
                            <label data-error="Invalid input. Follow format mm/dd/yyy" data-success="Valid Input" htmlFor='birthday'>Birth Date (MM/DD/YYYY) (required)</label>
                        </div>
                        </fieldset>
                        <fieldset>
                        <legend>Campus Location</legend>
                        <div className='input-field'>
                            <input className='with-gap' type='radio' name ='campus' id='nyc' value='nyc' defaultChecked/>
                            <label htmlFor='nyc'>New York City</label>
                        </div>
                        <div className='input-field'>
                           <input className='with-gap' type='radio' name ='campus' id='sf' value='sf'/>
                            <label htmlFor='sf'>San Francisco</label>
                        </div>
                        <div className='input-field'>
                            <input className='with-gap' type='radio' name ='campus' id='chi' value='chi'/>
                            <label htmlFor='chi'>Chicago</label>
                        </div>
                        </fieldset>
                        <button className='btn pink darken-4 submitButton' type='submit'>Submit</button>
                    </form>
                    </div>
                  </div>
                </div>
                <div className="col m6">
                  <div className="card">
                    <div className="card-content">
                        <Highlight className='html'>
                            {"<img src='brooklyn-bridge.jpg'/>"}
                        </Highlight>
                    </div>
                  </div>
                </div>
            </div>
            <div className="row">
                <div className="col m6">
                 <span className='failTop'>Incorrect <i className="fa fa-times" aria-hidden="true"></i></span>
                  <div className="card">
                    <div className="card-content">
                    <form>
                        <fieldset>
                        <legend>Account Information</legend>
                        <div className='input-field'>
                            <input className='validate' type='text' name ='first_name' id='fname' />
                            <label  data-error="Invalid input. No Special characters." data-success="Valid Input" htmlFor='fname'>First Name</label>
                        </div>
                        <div className='input-field'>
                            <input className='validate' type='text' name ='last_name' id='lname' />
                            <label  data-error="Invalid input. No Special characters." data-success="Valid Input"htmlFor='lname'>Last Name</label>
                        </div>
                        <div className='input-field'>
                            <input className='validate' type='email' name ='email' id='emailInput' required aria-required="true"/>
                            <label data-error="Invalid Email Address. Follow format example@gmail.com" data-success="Valid Input" htmlFor='emailInput'>Email (required)</label>
                        </div>
                        <div className='input-field'>
                            <input className='validate' type='text' name ='birthday' id='birthday' pattern="(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d" required aria-required="true" />
                            <label data-error="Invalid input. Follow format mm/dd/yyy" data-success="Valid Input" htmlFor='birthday'>Birth Date (MM/DD/YYYY) (required)</label>
                        </div>
                        </fieldset>
                        <fieldset>
                        <legend>Campus Location</legend>
                        <div className='input-field'>
                            <input className='with-gap' type='radio' name ='campus' id='nyc' value='nyc' defaultChecked/>
                            <label htmlFor='nyc'>New York City</label>
                        </div>
                        <div className='input-field'>
                           <input className='with-gap' type='radio' name ='campus' id='sf' value='sf'/>
                            <label htmlFor='sf'>San Francisco</label>
                        </div>
                        <div className='input-field'>
                            <input className='with-gap' type='radio' name ='campus' id='chi' value='chi'/>
                            <label htmlFor='chi'>Chicago</label>
                        </div>
                        </fieldset>
                        <button className='btn pink darken-4 submitButton' type='submit'>Submit</button>
                    </form>
                    </div>
                  </div>
                </div>
                <div className="col m6">
                  <div className="card">
                    <div className="card-content">
                        <Highlight className='html'>
                            {"<img src='brooklyn-bridge.jpg'/>"}
                        </Highlight>
                    </div>
                  </div>
                </div>
            </div>
            <h3>Labeling Controls</h3>
            <h4>Examples</h4>
             <div className = "row">
                <div className = 'col m6'>
                    <div className="card">
                        <div className="card-content white-text">
                           <Highlight className='html'>
                            {"<img src='brooklyn-bridge.jpg'/>"}
                        </Highlight>
                        </div>
                    </div>
                </div>
                <div className = 'col m6'>
                    <div className="card">
                        <div className="card-content white-text">
                           <Highlight className='html'>
                            {"<img src='brooklyn-bridge.jpg'/>"}
                        </Highlight>
                        </div>
                    </div>
                </div>
             </div>
            <h3>Form Instructions</h3>
            <h4>Examples</h4>
             <div className = "row">
                <div className = 'col m6'>
                    <div className="card">
                        <div className="card-content white-text">
                          <Highlight className='html'>
                            {"<img src='brooklyn-bridge.jpg'/>"}
                        </Highlight>
                        </div>
                    </div>
                </div>
                <div className = 'col m6'>
                    <div className="card">
                        <div className="card-content white-text">
                         <Highlight className='html'>
                            {"<img src='brooklyn-bridge.jpg'/>"}
                        </Highlight>
                        </div>
                    </div>
                </div>
             </div>
            <h3>Grouping Controls</h3>
            <h4>Examples</h4>
             <div className = "row">
                <div className = 'col m6'>
                    <div className="card ">
                        <div className="card-content white-text">
                          <Highlight className='html'>
                            {"<img src='brooklyn-bridge.jpg'/>"}
                        </Highlight>
                        </div>
                    </div>
                </div>
                <div className = 'col m6'>
                    <div className="card">
                        <div className="card-content white-text">
                           <Highlight className='html'>
                            {"<img src='brooklyn-bridge.jpg'/>"}
                        </Highlight>
                        </div>
                    </div>
                </div>
             </div>
            <h3>Input Validation</h3>
            <h4>Examples</h4>
             <div className = "row">
                <div className = 'col m6'>
                    <div className="card">
                        <div className="card-content white-text">
                           <Highlight className='html'>
                            {"<img src='brooklyn-bridge.jpg'/>"}
                        </Highlight>
                        </div>
                    </div>
                </div>
                <div className = 'col m6'>
                    <div className="card">
                        <div className="card-content white-text">
                           <Highlight className='html'>
                            {"<img src='brooklyn-bridge.jpg'/>"}
                        </Highlight>
                        </div>
                    </div>
                </div>
             </div>
            <h3>User Notifications</h3>
            <h4>Examples</h4>
             <div className = "row">
                <div className = 'col m6'>
                    <div className="card">
                        <div className="card-content white-text">
                          <Highlight className='html'>
                            {"<img src='brooklyn-bridge.jpg'/>"}
                        </Highlight>
                        </div>
                    </div>
                </div>
                <div className = 'col m6'>
                    <div className="card">
                        <div className="card-content white-text">
                          <Highlight className='html'>
                            {"<img src='brooklyn-bridge.jpg'/>"}
                        </Highlight>
                        </div>
                    </div>
                </div>
             </div>
            </div>
    )
}
