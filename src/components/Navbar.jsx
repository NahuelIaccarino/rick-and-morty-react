import React from 'react';

const Navbar = ({ title }) => {
 
  return (
    <>
    <header>
        <nav className='navbar navbar-dark bg-dark'>
            <div className='container'>
                <h3 className='navbar-brand text-uppercase'>{title}</h3>
            </div>
        </nav>
    </header>
    </>
  );
};

export default Navbar