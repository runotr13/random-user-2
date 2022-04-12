import React from 'react'

const Footer = () => {
  return (
      <>
    <div className="footer-div">
        <a href="https://github.com.runotr13" target="_blank"   rel="noopener noreferrer" style={{ textDecoration: "none" }}>
        <code className="brand">{"<Onur Github/> "}{new Date().getFullYear()}</code>
        </a>
    </div>
    <div className="footer-div">
        <a href="https://www.linkedin.com/in/onurkarakuzu/" target="_blank"   rel="noopener noreferrer" style={{ textDecoration: "none" }}>
        <code className="brand">{"<Onur Linkedin/> "}{new Date().getFullYear()}</code>
        </a>
    </div>
    </>
  )
}

export default Footer