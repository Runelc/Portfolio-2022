import React, { useState } from 'react'; 
import "./header.css"; 

const Header = () => {
    /* Toggle menu - til at få menu frem ved lille skærm */
    const[Toggle, showMenu] = useState(false); 


  return (
    <header className="header"> 
        <nav className="nav container"> 
            <a href="index.html" className="nav__logo">Rune
            </a>
        {/* Boolean som får menu frem ved "true" ved hjælp af onclick på toggle knap*/}
            <div className={Toggle ? "nav__menu show-menu" : 
                "nav__menu"}>
                <ul className="nav__list grid"> 
                    <li className="nav__item">
                        <a href="#home" className="nav__link active-link">
                            <i className="uil uil-estate nav__icon"></i> Hjem
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#about" className="nav__link">
                            <i className="uil uil-user nav__icon"></i> Om mig
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#skills" className="nav__link">
                            <i className="uil uil-file-alt nav__icon"></i> Kompetencer
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#services" className="nav__link">
                            <i className="uil uil-briefcase-alt nav__icon"></i> Færdigheder
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#portfolio" className="nav__link">
                            <i className="uil uil-scenery nav__icon"></i> Portfolio
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#contact" className="nav__link">
                            <i className="uil uil-message nav__icon"></i> Kontakt
                        </a>
                    </li>
                </ul>
                    {/* Onclick til at lukke lille menu ved hjælp af boolean på toogle */}
                <i class="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
            </div>

                {/* Onclick til at få lille menu frem lille menu ved hjælp af boolean på toogle */}
            <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                <i class="uil uil-apps"></i>
            </div>
        </nav>
    </header>
  )
}

export default Header