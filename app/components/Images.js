import React from 'react';
import { Link } from 'react-router-dom';
import Highlight from 'react-highlight';


export default function Images(){
    return (
        <div className='section'>
            <h1>Images</h1>
            <a href='https://www.w3.org/WAI/tutorials/images/' target="_blank"> Complete List of Image Concepts</a>
            <h2>Informative Images</h2>
            <p>Lorem ipsum dolor sit amet, quo zril partem corrumpit ex, duis laoreet definiebas vix te. Eos id virtute docendi ullamcorper, an sumo docendi est. Senserit patrioque cotidieque in duo, assum fabellas sadipscing nec in. Vis graecis perpetua no, sint lucilius vim ei.</p>
              <div className="row">
              <p>Images used to supplement other information</p>
              <p>Lorem ipsum dolor sit amet, quo zril partem corrumpit ex, duis laoreet definiebas vix te.</p>
                <div className="col m6">
                 <span className='passTop'>Correct <i className="fa fa-check" aria-hidden="true"></i></span>
                  <div className="card">
                    <div className="card-image">
                      <img src="brooklyn-bridge.jpg" alt="Brooklyn Bridge: New York City"/>
                    </div>
                    <div className="card-content">
                    <p>Pedestrians should plan to spend around an hour getting from one side to the other. It's about a 1.3 mile walk one way.</p>
                      <Highlight className='javascript'>
                        {"<img src='brooklyn-bridge.jpg' alt='Brooklyn Bridge: New York City'/>"}
                    </Highlight>
                    </div>
                  </div>
                </div>
                <div className="col m6">
                 <span className='failTop'>Incorrect <i className="fa fa-times" aria-hidden="true"></i></span>
                  <div className="card">
                    <div className="card-image">
                      <img src="brooklyn-bridge.jpg" alt="Brooklyn Bridge: New York City"/>
                    </div>
                    <div className="card-content">
                        <p>Pedestrians should plan to spend around an hour getting from one side to the other. It's about a 1.3 mile walk one way.</p>
                        <Highlight className='javascript'>
                            {"<img src='brooklyn-bridge.jpg'/>"}
                        </Highlight>
                    </div>
                  </div>
                </div>
            </div>
            <div className="row">
                <p>Images conveying an impression or emotion</p>
                <p>Lorem ipsum dolor sit amet, quo zril partem corrumpit ex, duis laoreet definiebas vix te.</p>
                <div className="col m6">

                 <span className='passTop'>Correct <i className="fa fa-check" aria-hidden="true"></i></span>
                  <div className="card">
                    <div className="card-image">
                      <img src="kids.jpg" alt="Brooklyn Bridge: New York City"/>
                    </div>
                    <div className="card-content">
                      <Highlight className='javascript'>
                        {"<img src='kids.jpg' alt='We are kid friendly.'/>"}
                    </Highlight>
                    </div>
                  </div>
                </div>
                <div className="col m6">
                 <span className='failTop'>Incorrect <i className="fa fa-times" aria-hidden="true"></i></span>
                  <div className="card">
                    <div className="card-image">
                      <img src="kids.jpg" alt="Brooklyn Bridge: New York City"/>
                    </div>
                    <div className="card-content">
                        <Highlight className='javascript'>
                            {"<img src='kids.jpg alt='Kids'/>"}
                        </Highlight>
                    </div>
                  </div>
                </div>
            </div>
            <h2>Decorative Images</h2>
            <p>Lorem ipsum dolor sit amet, quo zril partem corrumpit ex, duis laoreet definiebas vix te. Eos id virtute docendi ullamcorper, an sumo docendi est. Senserit patrioque cotidieque in duo, assum fabellas sadipscing nec in. Vis graecis perpetua no, sint lucilius vim ei.</p>
              <div className="row">
                <div className="col m6">
                  <div className="card">
                    <div className="card-image">
                      <img src="pineapples.jpg" alt="Brooklyn Bridge: New York City"/>
                    </div>
                    <div className="card-content">
                    <p>Image used for ambiance (eye-candy)</p>
                      <Highlight className='javascript'>
                        {"<img src='pineapples.jpg' alt=''/>"}
                    </Highlight>
                    </div>
                  </div>
                </div>
                <div className="col m6">
                  <div className="card">
                    <div className="card-image">
                      <img src="happy-dog.jpg" alt="Brooklyn Bridge: New York City"/>
                    </div>
                    <div className="card-content">
                        <p>Happy Dog: Dog's love sticking their head's outside of car windows while the car is moving.</p>
                        <Highlight className='javascript'>
                            {"<img src='happy-dog.jpg' alt=''/>"}
                        </Highlight>
                    </div>
                  </div>
                </div>
            </div>
              <div className="row">
                <div className="col m6">
                <h2>Functional Images</h2>
                  <div className="card">
                    <div className="card-image">
                      <img src="pineapples.jpg" alt="Brooklyn Bridge: New York City"/>
                    </div>
                    <div className="card-content">
                    <p>Image used for ambiance (eye-candy)</p>
                      <Highlight className='javascript'>
                        {"<img src='pineapples.jpg' alt=''/>"}
                    </Highlight>
                    </div>
                  </div>
                </div>
                <div className="col m6">
                <h2>Group of Images</h2>
                  <div className="card">
                    <div className="card-image">
                      <img src="happy-dog.jpg" alt="Brooklyn Bridge: New York City"/>
                    </div>
                    <div className="card-content">
                        <p>Happy Dog: Dog's love sticking their head's outside of car windows while the car is moving.</p>
                        <Highlight className='javascript'>
                            {"<img src='happy-dog.jpg' alt=''/>"}
                        </Highlight>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    )
}
