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
                        <p className="card-title">Accessible Components</p>
                        <p>What aspects of this form make it more accessible?</p>
                        <ul>
                            <li>Labels</li>
                            <li>Form Instructions</li>
                            <li></li>
                            <li>Grouping Controls</li>
                            <li></li>
                            <li>Input Validation</li>
                            <li></li>
                            <li>User Notifications</li>
                            <li></li>
                        </ul>
                    </div>
                  </div>
                </div>
            </div>
            <div className='row'>
                <div className="col s12">
                  <div className="card">
                    <div className="card-content">
                        <Highlight className='html'>
                            {`<form>\n\t<fieldset>\n\t\t<legend>Account Information</legend>\n\t\t<div className='input-field'>\n\t\t\t<input className='validate' type='text' name ='first_name' id='fname' />\n\t\t\t<label  data-error='Invalid input. No Special characters.' data-success='Valid Input' htmlFor='fname'>First Name</label>\n\t\t</div>\n\t\t<div className='input-field'>\n\t\t\t<input className='validate' type='text' name ='last_name' id='lname' />\n\t\t\t<label  data-error='Invalid input. No Special characters.' data-success='Valid Input' htmlFor='lname'>Last Name</label>\n\t\t</div>\n\t\t<div className='input-field'>\n\t\t\t<input className='validate' type='email' name ='email' id='emailInput' required aria-required='true'/>\n\t\t\t<label data-error='Invalid Email Address. Follow format example@gmail.com' data-success='Valid Input' htmlFor='emailInput'>Email (required)</label>\n\t\t</div>\n\t\t<div className='input-field'>\n\t\t\t<input className='validate' type='text' name ='birthday' id='birthday' pattern='(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d' required aria-required='true' />\n\t\t\t<label data-error='Invalid input. Follow format mm/dd/yyy' data-success='Valid Input' htmlFor='birthday'>Birth Date (MM/DD/YYYY) (required)</label>\n\t\t</div>\n\t</fieldset>\n\t<fieldset>\n\t\t<legend>Campus Location</legend>\n\t\t<div className='input-field'>\n\t\t\t<input className='with-gap' type='radio' name ='campus' id='nyc' value='nyc' defaultChecked/>\n\t\t\t<label htmlFor='nyc'>New York City</label>\n\t\t</div>\n\t\t<div className='input-field'>\n\t\t\t<input className='with-gap' type='radio' name ='campus' id='sf' value='sf'/>\n\t\t\t<label htmlFor='sf'>San Francisco</label>\n\t\t</div>\n\t\t<div className='input-field'>\n\t\t\t<input className='with-gap' type='radio' name ='campus' id='chi' value='chi'/>\n\t\t\t<label htmlFor='chi'>Chicago</label>\n\t\t</div>\n\t</fieldset>\n\t<button className='btn pink darken-4 submitButton' type='submit'>Submit</button>\n</form>`}
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
                        <p>Account Information</p>
                        <input type='text' name ='first_name' placeholder='First Name' />
                        <input type='text' name ='last_name' placeholder='Last Name'/>
                        <input type='email' name ='email' placeholder='Email' required/>
                        <input type='text' name ='birthday' pattern="(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d" placeholder='Birth Date' required />
                        <p>Campus Location</p>
                        <input className='with-gap bad-example' type='radio' name ='campus' value='nyc' defaultChecked/><span className='bad-label'> New York City</span><br/>
                        <input className='with-gap bad-example' type='radio' name ='campus' value='sf'/><span className='bad-label'> San Francisco</span><br/>
                        <input className='with-gap bad-example' type='radio' name ='campus' value='chi'/><span className='bad-label'> Chicago</span><br/>
                        <input className='btn pink darken-4 submitButton' type="submit"/>
                    </form>
                    </div>
                  </div>
                </div>
             <div className="col m6">
                  <div className="card">
                    <div className="card-content">
                        <p className="card-title">Inaccessible Components</p>
                        <p>What aspects of this form make it inaccessible?</p>
                        <ul>
                            <li>Labels</li>
                            <li>Placeholders are used instead of labels. Screenreaders...</li>
                            <li>Sometimes default styling for labels and placeholders styles the text in a way that does not pass the minimum contrast for text and its background. Low vision...</li>
                            <li>Span tags were used to label the radio buttons. The label tag should be used because people can click on the label to focus on the field control or use voice commands</li>
                            <li>Form Instructions</li>
                            <li></li>
                            <li>Grouping Controls</li>
                            <li></li>
                            <li>Input Validation</li>
                            <li></li>
                            <li>User Notifications</li>
                            <li></li>
                        </ul>
                    </div>
                  </div>
                </div>
            </div>
            <div className='row'>
                <div className="col s12">
                  <div className="card">
                    <div className="card-content">
                        <Highlight className='html'>
                            {`<form>\n\t<p>Account Information</p>\n\t<input type='text' name ='first_name' placeholder='First Name' />\n\t<input type='text' name ='last_name' placeholder='Last Name'/>\n\t<input type='email' name ='email' placeholder='Email' required/>\n\t<input type='text' name ='birthday' pattern='(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d' placeholder='Birth Date' required />\n\t<p>Campus Location</p>\n\t<input className='with-gap bad-example' type='radio' name ='campus' value='nyc' defaultChecked/>\n\t<span className='bad-label'> New York City</span><br/>\n\t<input className='with-gap bad-example' type='radio' name ='campus' value='sf'/><span className='bad-label'> San Francisco</span><br/>\n\t<input className='with-gap bad-example' type='radio' name ='campus' value='chi'/><span className='bad-label'> Chicago</span><br/>\n\t<input className='btn pink darken-4 submitButton' type="submit"/>\n</form>`}
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
