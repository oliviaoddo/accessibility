import React from 'react';
import { Link } from 'react-router-dom';


export default function Footer(props){
  return(
        <footer className="page-footer pink darken-4">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Web Accessibility Design Guide</h5>
                <p className="grey-text text-lighten-4">Simple tips on how to make your website more accessible.</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Helpful Links</h5>
                <ul>
                  <li><a href="https://www.w3.org/standards/webdesign/accessibility" className="grey-text text-lighten-3" target="_blank">W3C Web Accessibility Intro</a></li>
                  <li><a href="http://webaim.org/resources/contrastchecker/" className="grey-text text-lighten-3" target="_blank">Color Contrast Checker</a></li>
                  <li><a href='https://www.w3.org/WAI/tutorials/images/decision-tree' className="grey-text text-lighten-3" target="_blank">Alt Decision Tree</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2017 Olivia Oddo
            <a className="grey-text text-lighten-4 right" href="https://github.com/oliviaoddo" target="_blank"><i className="fa fa-github fa-2x" aria-hidden="true"></i></a>
            </div>
          </div>
        </footer>
      )
}
