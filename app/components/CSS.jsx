import React from 'react';
import Highlight from 'react-highlight';

export default function CSS(){
    return (
            <div className='section'>
            <h1>CSS</h1>
            <h2>Hiding alt text with CSS</h2>
            <p>Sometimes you may want to hide text alternatives such as label and span elemets for the sake of design. It is important to hide these elements in a way that does not hide them from assistive technologies.</p>
            <h3>Examples</h3>
            <p>Both of these examples are incorrect ways to hide text alternatives. Screen readers and other assistive technologies hide elements from the user that are styled in this way.</p>
            <div className='row'>
             <div className = 'col m6'>
                    <span className='failTop'>Incorrect <i className="fa fa-times" aria-hidden="true"></i></span>
                    <div className="card">
                        <div className='card-content'>
                             <Highlight className='css'>
                                {".screen-reader-only{\n\tdisplay: none;\n}"}
                            </Highlight>
                        </div>
                    </div>
                </div>
             <div className = 'col m6'>
                    <span className='failTop'>Incorrect <i className="fa fa-times" aria-hidden="true"></i></span>
                    <div className="card">
                        <div className='card-content'>
                             <Highlight className='css'>
                                {".screen-reader-only{\n\tvisibility: hidden;\n}"}
                            </Highlight>
                        </div>
                    </div>
                </div>
            </div>
            <h3>Example</h3>
            <p>This snippet of CSS will visually hide label and span elements while keeping them available to assistive technologies.</p>
            <div className='row'>
             <div className = 'col m12'>
                    <span className='passTop'>Correct <i className="fa fa-check" aria-hidden="true"></i></span>
                    <div className="card">
                        <div className='card-content'>
                             <Highlight className='css'>
                                {".screen-reader-only{\n\tborder: 0;\n\tclip: rect(0 0 0 0);\n\theight: 1px;\n\tmargin: -1px;\n\toverflow: hidden;\n\tpadding: 0;\n\tposition: absolute;\n\twidth: 1px;\n}"}
                            </Highlight>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    )
}
