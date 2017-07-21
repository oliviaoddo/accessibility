import React from 'react';
import {SideNav, SideNavItem, Button} from 'react-materialize'
import { Link } from 'react-router-dom';


export default function SideBarNav(){
    return (
        <SideNav
            trigger={<Button className='menuButton waves-effect waves-light'>EXPLORE TIPS</Button>}
            options={{ closeOnClick: true }}
            >
            <SideNavItem subheader>Web Accessibility Design Tips</SideNavItem>
            <SideNavItem divider />
            <Link to='/'><SideNavItem waves icon='format_size'>Text</SideNavItem></Link>
            <Link to='/images'><SideNavItem waves icon='image'>Images</SideNavItem></Link>
            <Link to='/forms'><SideNavItem waves icon='insert_comment'>Forms</SideNavItem></Link>
        </SideNav>
    )
}
