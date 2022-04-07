import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <nav className='bg-dark py-2 text-center'>
            <NavLink to="/home"
    style={({ isActive }) => ({
    color: isActive ? 'red' : 'white',
    marginRight: isActive ? '25px' : '25px',
    textDecoration: isActive? 'none' : 'none',
    fontWeight: isActive ? 'bold' : 'normal'})}>Home </NavLink>

            <NavLink to="/services"
    style={({ isActive }) => ({
    color: isActive ? 'red' : 'white',
    marginRight: isActive ? '25px' : '25px',
    textDecoration: isActive? 'none' : 'none',
    fontWeight: isActive ? 'bold' : 'normal'})}>Services </NavLink>

            <NavLink to="/orders"
    style={({ isActive }) => ({
    color: isActive ? 'red' : 'white',
    marginRight: isActive ? '25px' : '25px',
    textDecoration: isActive? 'none' : 'none',
    fontWeight: isActive ? 'bold' : 'normal'})}>Orders </NavLink>

            <NavLink to="/about"
    style={({ isActive }) => ({
    color: isActive ? 'red' : 'white',
    marginRight: isActive ? '25px' : '25px',
    textDecoration: isActive? 'none' : 'none',
    fontWeight: isActive ? 'bold' : 'normal'})}> About </NavLink>

        </nav>
    );
};

export default Header;