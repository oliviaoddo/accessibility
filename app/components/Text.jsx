import React from 'react';


export default function Text(){
  return(
         <div className='section'>
             <div className = "row">
             <h2>Text</h2>
                <p>Lorem ipsum dolor sit amet, quo zril partem corrumpit ex, duis laoreet definiebas vix te. Eos id virtute docendi ullamcorper, an sumo docendi est. Senserit patrioque cotidieque in duo, assum fabellas sadipscing nec in. Vis graecis perpetua no, sint lucilius vim ei.</p>
                <p><a href="http://accessible-colors.com/">Accessible Colors</a></p>
                <p><a href="http://webaim.org/resources/contrastchecker/">Color Contrast Checker</a></p>
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
