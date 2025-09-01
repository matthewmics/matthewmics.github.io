import React from 'react'

const Footer = () => {
  return (
    <footer className='py-8 px-4 bg-card relative border-t border-border mt-12'>
        <p className='text-sm '>
            &copy; {new Date().getFullYear()} Matthew Miclat. All rights reserved.
        </p>
    </footer>
  )
}

export default Footer