import React from 'react';
import { Link } from 'react-router-dom';
import Highlight from 'react-highlight';


export default function Images(){
    return (
        <div className='section'>
            <h1>Images</h1>
            <p><a href='https://www.w3.org/WAI/tutorials/images/' target="_blank"> Complete List of Image Concepts</a></p>
            <p><a href='https://www.w3.org/WAI/tutorials/images/decision-tree' target='_blank'>Alt Decision Tree</a></p>
            <div className="card grey lighten-5">
                <div className="card-content">
                    <h2>Why is it important for images to have text alternatives?</h2>
                    <p>Images that are not accessible can create barriers for those who are trying to access them. Text alternatives can be read aloud for those who use screen readers. In addition, users can focus on a linked image with a voice command, such as an image that prints the page when selected. Below are some examples of what type of alternative text should be provided and when it is necessary.</p>
                </div>
            </div>
            <h3>Informative Images</h3>
            <p>Images that represent concepts and information should have an alternative text that gives a short description. The description should describe essential information that is presented by the photo or illustration.</p>
             <h4>Example: Images used to supplement other information</h4>
              <p>This photo of the Broolyn Bridge supplements the text below it, therefore it is important to add an alt attribute with a short description of what the photo is. Someone using a screen reader would have no idea what the text is referring to.</p>
              <div className="row">
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
            <h4>Example: Images conveying an impression or emotion</h4>
            <p>If a photo is being used to give an impression of a website or company, the text alternative should describe the intended impression.</p>
            <div className="row">
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
            <h3>Decorative Images</h3>
            <p>Images that do not add information to the content of the page can be considered decorative. Therefore, alternative text can be left out. Assistive technologies will ignore images with null alt text. Why not put an altertaive text at all times? Images that are not adding information to the content would add audible clutter, and could distract users from the actual content of the page. It is also important to include an alt attribute with a null value as opposed to leaving the alt attribute out all together, because some screen readers will read the file name when an alt attribute is not present.</p>
              <div className="row">
                <div className="col m6">
                <h4>Example: Image used for ambiance (eye-candy)</h4>
                <p>A photo that is there to improve the look of the page should have a null alt attribute.</p>
                  <div className="card">
                    <div className="card-image">
                      <img src="pineapples.jpg" alt=""/>
                    </div>
                    <div className="card-content">
                      <Highlight className='javascript'>
                        {"<img src='pineapples.jpg' alt=''/>"}
                    </Highlight>
                    </div>
                  </div>
                </div>
                <div className="col m6">
                <h4>Example: Image with adjacent text alternative</h4>
                <p>When a photo is already sufficiently described by adjacent text, there is no need to repeat the information. Therefore, the alt attribute should be null.</p>
                  <div className="card">
                    <div className="card-image">
                      <img src="happy-dog.jpg" alt=""/>
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
            <h3>Functional Images</h3>
            <p><Link to='icons'>What if I want to use icons instead of images?</Link></p>
            <p>Images that initiate actions rather than convey information are considered functional. Examples may include an image used as a button or link. The text alternative should describe the action that will occur once selected. If an alt tag is missing it is hard for someone using a screen reader to know what action will be initiated by the imag.</p>
              <div className="row">
                <div className="col m6">
                <h4>Example: Image used alone as a linked logo.</h4>
                  <div className="card">
                    <div className="card-image">
                      <img src="twitter.png" alt=""/>
                    </div>
                    <div className="card-content">
                      <Highlight className='javascript'>
                        {"<a href='http://twitter.com'><img src='twitter.png' alt='Twitter home'/></a>"}
                    </Highlight>
                    </div>
                  </div>
                </div>
                <div className="col m6">
                <h4>Example: Stand alone icon image.</h4>
                  <div className="card">
                    <div className="card-image">
                      <img src="print.png" alt=""/>
                    </div>
                    <div className="card-content">
                        <Highlight className='javascript'>
                            {"<Link onClick={this.handlePrint}><img src='print.png' alt='Print this page'/></Link>"}
                        </Highlight>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    )
}
