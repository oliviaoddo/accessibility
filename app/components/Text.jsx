import React from 'react';


export default function Text(props){
  return(
         <div className = "row">
         <h2>Text</h2>
            <p>Lorem ipsum dolor sit amet, quo zril partem corrumpit ex, duis laoreet definiebas vix te. Eos id virtute docendi ullamcorper, an sumo docendi est. Senserit patrioque cotidieque in duo, assum fabellas sadipscing nec in. Vis graecis perpetua no, sint lucilius vim ei.</p>
            <p><a href="http://accessible-colors.com/">Accessible Color Checker</a></p>
            <div className = 'col m6'>
                <i className="material-icons">format_size</i><i className="material-icons">check</i>
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                      <h1>Welcome</h1>
                      <p>Welcome</p>
                    </div>
                </div>
            </div>
            <div className = 'col m6'>
                <i className="material-icons">format_size</i><i>X</i>
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                      <h1>Welcome</h1>
                      <p>Welcome</p>
                    </div>
                </div>
            </div>
         </div>
      )
}
