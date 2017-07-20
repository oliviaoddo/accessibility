import React from 'react';
import { Link } from 'react-router-dom';


export default function Footer(props){
  return(
        <footer className="page-footer red lighten-2">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">MHIAJ</h5>
                <p className="grey-text text-lighten-4">Higher education for stellar JavaScript students.</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">About Us</h5>
                <ul>
                  <li><a href="/students" className="grey-text text-lighten-3">Students</a></li>
                  <li><a href="/campuses" className="grey-text text-lighten-3">Campuses</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2017 Margaret Hamilton Interplanetary Academy of JavaScript
            <a className="grey-text text-lighten-4 right" target="_blank" href="http://www.facebook.com"><i className="fa fa-facebook-official" aria-hidden="true"></i></a>
            </div>
          </div>
        </footer>
      )
}
