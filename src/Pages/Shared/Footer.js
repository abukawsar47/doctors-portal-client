import React from 'react';
import { Link } from 'react-router-dom';
// import footer from '../../assets/images/footer.png';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (

        <footer className='text-center bg-dark text-white py-4'>
            <p className='m-0'><small>Copyright &copy; {year} <Link className='text-decoration-none text-danger fw-bold' to="/">...</Link> All Rights Reserved</small></p>
        </footer >
    );
};

export default Footer;