import React, { useState } from 'react'; 
import "./services.css"; 

const Services = () => {

    const [toggleState, setToggleState] = useState(0); 

    const toggleTab = (index) => {
        setToggleState(index); 
    }

  return (
    <section className="services section" id="services">
        <h2 className="section__title">Færdigheder</h2>
        <span className="section__subtitle">Min hjemmebane</span>

        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className="uil uil-arrow services__icon"></i>
                    <h3 className="services__title">Frontend <br /> udvikling</h3>
                </div>

                    {/* Active link på box, som gør toggleTabs parametre
                    til (1) */}
                <span className="services__button" onClick={() => 
                    toggleTab(1)}>
                    læs mere
                    <i className="uil uil-arrow-right 
                 services__button-icon"></i></span>

                    {/* Boolean til åben/luk af service/kompetence boxe
                    Hvis toggleState er === 1, køre active-modal(se css), som gør
                    boxen "visible". Siden der åbner er alt efter classes. hvis toggleState === 1
                    vil vores div køre de 2 classes som viser boxen, ellers køre den en class som
                    gør den hidden */}
                 <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal" } >
                    <div className="services__modal-content">
                        
                        {/* Lukke funktion af box, ved brug af funktion 
                        som ændre ToggleTab til 0. Som Derfor gør boxen 
                        "hidden" se ovenover og css */}
                        <i onClick={() => toggleTab(0)} className="uil uil-times 
                        services__modal-close"></i>

                        <h3 className="services__modal-title">Frontend udvikling</h3>
                        <p className="services__modal-description">Min største kompetence og passion ligger 
                        i kodning af hjemmesider, hvor jeg kan HTML og CSS til fingerspidserne, sammen med 
                        jQuery og JavaScript er jeg i stand til at kode en hjemmeside fra brunden.</p>

                    </div>
                 </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title">UX/UI <br /> Design</h3>
                </div>

                <span onClick={() => toggleTab(2)} 
                    className="services__button">
                    læs mere
                    <i className="uil uil-arrow-right 
                 services__button-icon"></i></span>

                 <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal" }>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times 
                        services__modal-close"></i>

                        <h3 className="services__modal-title">UI/UX Design</h3>
                        <p className="services__modal-description">Jeg designer med bred fokus på brugergrænseflader 
                        med UX/UI.  Jeg bestræber mig altid på at skabe et moderne og brugervenligt design, der 
                        hænger sammen med virksomhedens identitet.</p>

                    </div>
                 </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-edit services__icon"></i>
                    <h3 className="services__title">Gafisk <br /> Design</h3>
                </div>

                <span onClick={() => toggleTab(3)} className="services__button">
                    læs mere
                    <i className="uil uil-arrow-right 
                 services__button-icon"></i></span>

                 <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal" }>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times 
                        services__modal-close"></i>

                        <h3 className="services__modal-title">Visuelt 
                        Design</h3>
                        <p className="services__modal-description">Jeg kan designe og skabe grafiske elementer 
                        til bl.a. hjemmesider og annoncer. Til dette benytter jeg primært programmer som 
                        Photoshop, Illustrator og Adobe XD, som jeg har erfaring med igennem min uddannelse. </p>

                    </div>
                 </div>
            </div>
        </div>
    </section>
  ); 
}; 

export default Services