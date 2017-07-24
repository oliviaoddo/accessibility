import React from 'react';
import Highlight from 'react-highlight';


export default function Forms(){
    return (
            <div className='section'>
                <h1>Forms</h1>
                <p><a className='pink-focus' href="https://www.w3.org/WAI/tutorials/forms/" target='_blank'>Complete List of Form Concepts</a></p>
                <p>Forms can be made more accessible by incorporating labeling controls, grouping controls, form instructions, input validation, and user notifications.</p>
                <h2>Why is it important for forms to be accessible?</h2>
                <ol>
                    <li>It is easier for people with cognitive disabilities to complete forms when they are provided with instructions and feedback.</li>
                    <li>People who use speech input can use labels via voice commands to activate controls, and move between fields and focus on them.</li>
                    <li>People who use speech input can use labels via voice commands to activate controls, and move between fields and focus on them.</li>
                    <li>People with mobility impairment benefit from being able to click on the large area that labels provide. When a label is clicked, the input is focused on, which is especially helpful for smaller inputs such as radio buttons and checkboxes.</li>
                    <li>People who use screen readers can more easily understand what input is needed when labels and field sets are used.</li>
                </ol>
                <div className="row">
                <div className="col m12 s12">
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
            </div>
            <h3>Accessible Components</h3>
            <h4>What aspects of this form make it more accessible?</h4>
            <p>Labeling Controls</p>
                <ol>
                    <li>A label that describes the purpose of the form control is given to every form control.</li>
                    <li>The id of the input matches the for attribute value on the label. This ensures that the two are associated with one another.</li>
                    <li>When labels and inputs are used correctly, users can click on the label or select a label via voice command and the associated form control will be focused on.</li>
                    <li>Labels can be hidden with CSS, but make sure you <a className='pink-focus' href='/css'>hide them correctly.</a></li>
                    <li>The button label is provided by the text inside tge button element.</li>
                </ol>
            <p>Form Instructions</p>
                <ol>
                    <li>The user is provided with instructions on how to fill out the date.</li>
                    <li>The user is informed which form controls are required.</li>
                    <li>Instructions are provided in the label. Most screen readers go into "Forms mode" when they hit a form element, and only read form elements aloud.</li>
                </ol>
            <p>Grouping Controls</p>
               <ol>
                    <li>Fieldsets are used to group related form controls together.</li>
                </ol>
            <p>Input Validation</p>
                <ol>
                    <li>Input validation helps users avoid mistakes.</li>
                    <li>The required and aria-required attributes are used. Using both is redundant, but it is important to use both because some web browsers do not communicate the required attribute to screen readers.</li>
                    <li>The correct validation types are used ex. type='email'</li>
                </ol>
            <p>User Notifications</p>
                <ol>
                    <li>Feedback on whether their input is valid or not is provided to the user.</li>
                    <li>Information about why their input might be wrong is given.</li>
                    <li>The form does not rely on green and red for communicating valid and invalid input. Checks and Xs are nice to have for visual cues as well.</li>
                </ol>
            <div className='row'>
                <div className="col s12">
                  <div className="card">
                    <div className="card-content">
                        <Highlight className='html'>
                            {`<form>\n\t<fieldset>\n\t\t<legend>Account Information</legend>\n\t\t<div class='input-field'>\n\t\t\t<input class='validate' type='text' name ='first_name' id='fname' />\n\t\t\t<label  data-error='Invalid input. No Special characters.' data-success='Valid Input' for='fname'>First Name</label>\n\t\t</div>\n\t\t<div class='input-field'>\n\t\t\t<input className='validate' type='text' name ='last_name' id='lname' />\n\t\t\t<label  data-error='Invalid input. No Special characters.' data-success='Valid Input' htmlFor='lname'>Last Name</label>\n\t\t</div>\n\t\t<div class='input-field'>\n\t\t\t<input class='validate' type='email' name ='email' id='emailInput' required aria-required='true'/>\n\t\t\t<label data-error='Invalid Email Address. Follow format example@gmail.com' data-success='Valid Input' for='emailInput'>Email (required)</label>\n\t\t</div>\n\t\t<div className='input-field'>\n\t\t\t<input className='validate' type='text' name ='birthday' id='birthday' pattern='(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d' required aria-required='true' />\n\t\t\t<label data-error='Invalid input. Follow format mm/dd/yyy' data-success='Valid Input' htmlFor='birthday'>Birth Date (MM/DD/YYYY) (required)</label>\n\t\t</div>\n\t</fieldset>\n\t<fieldset>\n\t\t<legend>Campus Location</legend>\n\t\t<div class='input-field'>\n\t\t\t<input type='radio' name ='campus' id='nyc' value='nyc' checked/>\n\t\t\t<label for='nyc'>New York City</label>\n\t\t</div>\n\t\t<div class='input-field'>\n\t\t\t<input type='radio' name ='campus' id='sf' value='sf'/>\n\t\t\t<label for='sf'>San Francisco</label>\n\t\t</div>\n\t\t<div class='input-field'>\n\t\t\t<input type='radio' name ='campus' id='chi' value='chi'/>\n\t\t\t<label for='chi'>Chicago</label>\n\t\t</div>\n\t</fieldset>\n\t<button class='btn' type='submit'>Submit</button>\n</form>`}
                        </Highlight>
                    </div>
                  </div>
                </div>
            </div>
            <div className="row">
                <div className="col m12">
                 <span className='failTop'>Incorrect <i className="fa fa-times" aria-hidden="true"></i></span>
                  <div className="card">
                    <div className="card-content">
                    <form>
                        <p>Account Information</p>
                        <input type='text' name ='first_name' placeholder='First Name' />
                        <input type='text' name ='last_name' placeholder='Last Name'/>
                        <input type='text' name ='email' placeholder='Email' required/>
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
            </div>
            <h3>Inaccessible Components</h3>
            <h4>What aspects of this form make it inaccessible?</h4>
            <p>Labeling Controls</p>
                <ol>
                    <li>Placeholders are used instead of labels. Placeholders are not seen as replacements for labels by screen readers, and most do not support them. Placeholder text disapears in most cases, so the user cannot check their responses.</li>
                    <li>If placeholders are used to provide information, make sure they pass the minimun contrast requirement</li>
                    <li>Sometimes default styling for labels and placeholders styles the text in a way that does not pass the minimum contrast for text and its background.</li>
                    <li>Span elements were used to label the radio buttons. The label element should be used because people can click on the label to focus on the field control or use voice commands. This is especially important for people with mobility impairment since the radio button are so small.</li>
                    <li>The button is not labeled correctly. If an input element is being used as a button, the value attribute will be used as the label.</li>
                </ol>
            <p>Form Instructions</p>
                <ol>
                    <li>It is not communicated to the user that the birth date and email are required.</li>
                    <li>The user is not given instructions on how to format their birth date.</li>
                </ol>
            <p>Grouping Controls</p>
                <ol>
                    <li>Fieldsets are not used. It is important to group related form controls together because it makes the form more understandable for all users.</li>
                </ol>
            <p>Input Validation</p>
                <ol>
                    <li>The incorrect validation type is used on the email input.</li>
                </ol>
            <p>User Notifications</p>
                <ol>
                    <li>The user is not notified when their input is valid or invalid.</li>
                </ol>
            <div className='row'>
                <div className="col s12">
                  <div className="card">
                    <div className="card-content">
                        <Highlight className='html'>
                            {`<form>\n\t<p>Account Information</p>\n\t<input type='text' name ='first_name' placeholder='First Name' />\n\t<input type='text' name ='last_name' placeholder='Last Name'/>\n\t<input type='text' name ='email' placeholder='Email' required/>\n\t<input type='text' name ='birthday' pattern='(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d' placeholder='Birth Date' required />\n\t<p>Campus Location</p>\n\t<input type='radio' name ='campus' value='nyc' checked/><span> New York City</span><br/>\n\t<input type='radio' name ='campus' value='sf'/><span> San Francisco</span><br/>\n\t<input type='radio' name ='campus' value='chi'/><span> Chicago</span><br/>\n\t<input class='btn' type="submit"/>\n</form>`}
                        </Highlight>
                    </div>
                  </div>
                </div>
            </div>
            </div>
    )
}
