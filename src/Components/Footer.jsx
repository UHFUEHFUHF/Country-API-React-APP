import React from 'react'


const Footer = () => {
  const ScrolltoTop = () =>{
    window.scrollTo({top:0 , behavior: "smooth"})
  }
  return (
    <>
    <div id='FootContain'>
    <div className='foot'>
    <p>Data provided by Rest country API</p>
    <p>Built with 💻 by Hitesh</p>
    <p>Year © 2025</p>
    </div>
    <div className='foot2'>
    <a onClick={ScrolltoTop}  to="/" className='anchor2'>Home</a>
    </div>
    </div>
    </>
  )
}


export default Footer
