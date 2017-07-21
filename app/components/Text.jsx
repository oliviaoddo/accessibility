import React from 'react';
import { Link } from 'react-router-dom';

export default function Text(){
  return(
         <div className='section'>
             <h1>Text</h1>
                <p>Websites should provide enough contrast between text and its background.The <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html">Web Content Accessibility Guidelines 2.0</a> require a contrast ratio of 4.5:1 for normal text and 3:1 for large text at level AA conformance (minimum contrast requirment). Level AAA conformance requires a contrast ratio of 7:1 for nomral text and 4.5:1 for large text. Text that is bold and 18.66px or text that is 24px is considered large text. The requirments also apply to images of text that were intended to be understood as text.</p>
                <h2>Why is contrast important?</h2>
                <ul>
                  <li>People with moderately low vision who do not use assistive technology should be able to read the content on your website.</li>
                  <li>People with color vision deficiency have a hard time reading text that does not have enough contrast as well.</li>
                </ul>
                <h2>When is it necessary?</h2>
                <ul>
                  <li>Text that is part of a logo or brand name does not need to pass any contrast requirments.</li>
                  <li>Text that is decorative or conveys no information does not need to pass contrast requirments.</li>
                </ul>
                <p><a to="http://colorsafe.co/" target="_blank">Accessible Color Palettes</a></p>
                <p><a to="http://webaim.org/resources/contrastchecker/" target="_blank">Color Contrast Checker</a></p>
                <div className = "row">
                <div className = 'col m6'>
                    <span className='passTop'>Pass <i className="fa fa-check" aria-hidden="true"></i></span>
                    <div className="card  pink darken-4">
                        <div className="card-content white-text">
                          <h1>Welcome</h1>
                          <p>Welcome</p>
                        </div>
                    </div>
                </div>
                <div className = 'col m6'>
                    <span className='failTop'>Fail <i className="fa fa-times" aria-hidden="true"></i></span>
                    <div className="card teal lighten-2">
                        <div className="card-content white-text">
                          <h1>Welcome</h1>
                          <p>Welcome</p>
                        </div>
                    </div>
                </div>
             </div>
             <div className = "row">
                <div className = 'col m6'>
                    <div className="card  grey lighten-5">
                        <div className="card-content black-text">
                          <p className='card-title'>Contrast Ratio: 9.45:1 </p>
                          <hr/>
                          <p className='card-title'>Normal Text</p>
                          <p className='paragraph'>WCAG AA: <span className='pass'>Pass</span></p>
                          <p className='paragraph'>WCAG AAA: <span className='pass'>Pass</span></p>
                          <hr/>
                          <p className='card-title'>Large Text</p>
                          <p className='paragraph'>WCAG AA: <span className='pass'>Pass</span></p>
                          <p className='paragraph'>WCAG AAA: <span className='pass'>Pass</span></p>
                        </div>
                    </div>
                </div>
                <div className = 'col m6'>
                    <div className="card grey lighten-5">
                        <div className="card-content black-text">
                          <p className='card-title'>Contrast Ratio: 2.44:1 </p>
                          <hr/>
                          <p className='card-title'>Normal Text</p>
                          <p className='paragraph'>WCAG AA: <span className='fail'>Fail</span></p>
                          <p className='paragraph'>WCAG AAA: <span className='fail'>Fail</span></p>
                          <hr/>
                          <p className='card-title'>Large Text</p>
                          <p className='paragraph'>WCAG AA: <span className='fail'>Fail</span></p>
                          <p className='paragraph'>WCAG AAA: <span className='fail'>Fail</span></p>
                        </div>
                    </div>
                </div>
             </div>
         </div>
      )
}
