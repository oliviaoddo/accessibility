import React from 'react';
import {SideNav, SideNavItem, Button} from 'react-materialize'
import { Link } from 'react-router-dom';


export default function SideBarNav(){
    return (
        <SideNav
            trigger={<Button className='menuButton waves-effect waves-light pink darken-4'>EXPLORE TIPS</Button>}
            options={{ closeOnClick: true }}
            >
            <Link to='/'><SideNavItem waves icon='accessibility'>About</SideNavItem></Link>
            <SideNavItem divider />
            <Link to='/text'><SideNavItem waves icon='format_size'>Text</SideNavItem></Link>
            <Link to='/images'><SideNavItem waves icon='image'>Images</SideNavItem></Link>
            <Link to='/forms'><SideNavItem waves icon='insert_comment'>Forms</SideNavItem></Link>
        </SideNav>
    )
}
