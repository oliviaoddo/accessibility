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
                        <input placeholder='First Name'/>
                        <input placeholder='Last Name'/>
                        <input placeholder='Email'/>
                    </form>
                      <Highlight className='html'>
                        {"<img src='brooklyn-bridge.jpg' alt='Brooklyn Bridge: New York City'/>"}
                    </Highlight>
                    </div>
                  </div>
                </div>
                <div className="col m6">
                 <span className='failTop'>Incorrect <i className="fa fa-times" aria-hidden="true"></i></span>
                  <div className="card">
                    <div className="card-content">
                        <form>
                            <input placeholder='First Name'/>
                            <input placeholder='Last Name'/>
                            <input placeholder='Email'/>
                        </form>
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
