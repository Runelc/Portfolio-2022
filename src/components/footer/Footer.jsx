import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Rune</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">Om mig</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Portfolio</a>
                </li>

                <li>
                    <a href="#services" className="footer__link">Service</a>
                </li>
            </ul>

            <div className="footer__social">
            <a href="https://facebook.com/rune.l.christoffersen" className="footer__social-link" target="_blank" rel="noreferrer">
        <i class="uil uil-facebook"></i>
        </a>

        <a href="https://www.linkedin.com/in/rune-christoffersen-257b53230/" className="footer__social-link" target="_blank" rel="noreferrer">
        <i class="uil uil-linkedin"></i>
        </a>

        <a href="https://github.com/Runelc" className="footer__social-link" target="_blank" rel="noreferrer">
        <i class="uil uil-github"></i>
        </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer