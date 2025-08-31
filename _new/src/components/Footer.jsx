import React from 'react'

const Footer = () => {
  return (
    <footer className='py-12 px-4 bg-card relative border-t border-border mt-12 pt-8'>
        <p className='text-sm '>
            &copy; {new Date().getFullYear()} Matthew Mics. All rights reserved.
        </p>
    </footer>
  )
}

export default Footer