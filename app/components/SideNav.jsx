import React from 'react';
import {SideNav, SideNavItem, Button} from 'react-materialize'
import { Link } from 'react-router-dom';


export default function SideBarNav(){
    return (
        <SideNav
            trigger={<Button className='menuButton waves-effect waves-light pink darken-4'>EXPLORE TIPS</Button>}
            options={{ closeOnClick: true }}
            >
            <ul>
                <li>
                    <Link to='/' className='pink-focus nav-item'><i className="material-icons" aria-hidden='true'>accessibility</i> About</Link>
                </li>
                <hr />
                <li>
                    <Link to='/text' className='pink-focus nav-item'><i className="material-icons" aria-hidden='true'>format_size</i> Text</Link>
                </li>
                <li>
                    <Link to='/images' className='pink-focus nav-item'><i className="material-icons" aria-hidden='true'>image</i> Images</Link>
                </li>
                <li>
                    <Link to='/icons' className='pink-focus nav-item'><i className="material-icons" aria-hidden='true'>accessibility</i> Icons</Link>
                </li>
                <li>
                    <Link to='/forms' className='pink-focus nav-item'><i className="material-icons" aria-hidden='true'>insert_comment</i> Forms</Link>
                </li>
                <li>
                    <Link to='/navigation' className='pink-focus nav-item'><i className="material-icons" aria-hidden='true'>map</i> Navigation</Link>
                </li>
                <li>
                    <Link to='/css' className='pink-focus nav-item'><i className="material-icons" aria-hidden='true'>visibility</i> CSS</Link>
                </li>
                <li>
                    <Link to='/aria' className='pink-focus nav-item'><i className="material-icons" aria-hidden='true'>accessibility</i> Aria</Link>
                </li>
            </ul>
        </SideNav>
    )
}
