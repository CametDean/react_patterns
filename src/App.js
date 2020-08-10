import React from 'react';

import { TabList, Tab, TabPanels, TabPanel, Tabs } from "./components/Tabs";
import exempleTabs from "./img/tabs.png"
import exempleTabsWithClickEvents from "./img/tabs2.png"

import { Modal, ModalButtonClose } from "./components/Modal"
import exempleModal from "./img/modal.png"

import {Carousel, Slides, Slide, SlideNav, Previous, PlayPause, Next } from "./components/Carousel";
import exempleCarousel from "./img/carousel.png"

import { AccordeonItem, AccordeonLabel, AccordeonPanel, Accordeon }from "./components/Accordeon"
import exempleAccordeon from "./img/accordeon.png"

import './App.css';

function App() {

  //TABS
  const onKeyDownEvent =  (e) => {if(e.key === "Enter"){alert("Rex")}}
  const onClickEvent = () => alert("cobra")

  //MODAL
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const onModalClosed = (newValue) => setIsModalOpen(newValue)

  return (
    <div className="App">
      <Tabs>
        <header>
          <h1>Get your React UI component!</h1>
          <TabList className="tabList">
            <Tab>Home</Tab>
            <Tab>Accordeon</Tab>
            <Tab>Carousel</Tab>
            <Tab>Modal</Tab>
            <Tab>Tabs</Tab>
          </TabList>
        </header>

        <div className="content">
          <TabPanels>
            <TabPanel>
              <h2>Bienvenue sur Get Your React UI Component!</h2>
              <p>Get Your React UI Component est un catalogue de composants UI React réutilisables et génériques.</p>
              <p>Grâce à ce catalogue, vous gagnerez du temps sur vos missions ou lors de votre apprentissage de React.</p>
              <p>En effet, les composants ont été écrits de sorte que leurs interfaces soient claires dès le premier coup d'oeil ce qui permet de s'y retrouver plus facilement. De plus, vous trouverez ici des exemples d'utilisations des composants, ce qui est plus agréable que de devoir copier le code dans son IDE pour voir le résultat</p>
              <fieldset>
                <legend>Tips</legend>
                <p>Vous voulez tester le code par vous-même? Le bouton <span>Essayer!</span> est là pour ça!</p>
                <p>Un composant vous plaît? Cliquez sur <span>Code source</span> afin de récupérer le fichier contenant l'implémentation du composant.</p>
              </fieldset>
            </TabPanel>
            <TabPanel>
              <h2>Accordeon</h2>
              <p>Voici un exemple de l'utilisation de notre composant Accordeon. Utile pour les Foires aux Questions!</p>
              <div className="accessCodeSource">
                <a type="button" href="https://github.com/CametDean/react_patterns/blob/master/src/components/Accordeon.js" target="_blank" rel="noopener noreferrer">Code source</a>
                <a type="button" href="https://codesandbox.io/s/accordeon-final-3nsft?file=/src/App.js:27-112" target="_blank" rel="noopener noreferrer">Essayer!</a>
              </div>
              <fieldset>
                <legend>Exemple</legend>
                <img src={exempleAccordeon} alt="interface d'un accordeon"/>
                <Accordeon>
                  <AccordeonItem>
                    <AccordeonLabel>Musique</AccordeonLabel>
                    <AccordeonPanel>Un ptit RuPaul et c'est partit!</AccordeonPanel>
                  </AccordeonItem>
                  <AccordeonItem>
                    <AccordeonLabel>Séries</AccordeonLabel>
                    <AccordeonPanel>Accro à Netflix :)</AccordeonPanel>
                  </AccordeonItem>
                  <AccordeonItem>
                    <AccordeonLabel>Conventions</AccordeonLabel>
                    <AccordeonPanel>
                      <img src="https://media.giphy.com/media/hHzVer05zYv1m/giphy.gif" alt="Misha!!!"/>
                    </AccordeonPanel>
                  </AccordeonItem>
                </Accordeon>
              </fieldset>
            </TabPanel>
            <TabPanel>
              <h2>Carousel</h2>
              <p>Voici un exemple de l'utilisation de notre composant Carousel.</p>
              <div className="accessCodeSource">
                <a type="button" href="https://github.com/CametDean/react_patterns/blob/master/src/components/Carousel.js" target="_blank" rel="noopener noreferrer">Code source</a>
                <a type="button" href="https://codesandbox.io/s/carrousel-react-h1mxc" target="_blank" rel="noopener noreferrer">Essayer!</a>
              </div>
              <fieldset>
                <legend>Exemple</legend>
                <img src={exempleCarousel} alt="interface d'un carousel"/>
                <Carousel isPlaying={true}>
                  <Slides>
                    <Slide><img src="https://media.giphy.com/media/mAyKtbkBTTpFm/giphy.gif" alt="Tennant"/></Slide>
                    <Slide><img src="https://media.giphy.com/media/WjAkQjz7h9ESA/giphy.gif" alt="Smith"/></Slide>
                    <Slide><img src="https://media.giphy.com/media/4rfTQbT3PKCw8/giphy.gif" alt="Tennant & Smith"/></Slide>
                    <Slide><img src="https://media.giphy.com/media/siREjlLKjdSZq/giphy.gif" alt="Capaldi"/></Slide>
                    <Slide><img src="https://media.giphy.com/media/A8NNZlVuA1LoY/giphy.gif" alt="Dalek"/></Slide>
                  </Slides>
                  <SlideNav className="SlideNav"/>
                  <div className="SlideControls">
                    <Previous><img className="btnControls" src="https://img.icons8.com/nolan/64/rewind.png" alt="bouton précédent"/></Previous>
                    <PlayPause><img className="btnControls" src="https://img.icons8.com/nolan/64/play.png" alt="bouton play"/><img className="btnControls" src="https://img.icons8.com/nolan/64/pause.png" alt="bouton pause"/></PlayPause>
                    <Next><img className="btnControls" src="https://img.icons8.com/nolan/64/fast-forward.png" alt="bouton suivant"/></Next>
                  </div>
                </Carousel>
              </fieldset>
            </TabPanel>
            <TabPanel>
              <h2>Modal</h2>
              <p>Voici un exemple de l'utilisation de notre composant Modal.</p>
              <div className="accessCodeSource">
                <a type="button" href="https://github.com/CametDean/react_patterns/blob/master/src/components/Modal.js" target="_blank" rel="noopener noreferrer">Code source</a>
                <a type="button" href="https://codesandbox.io/s/modal-final-r4w8n?file=/src/App.js:27-76" target="_blank" rel="noopener noreferrer">Essayer!</a>
              </div>
              <fieldset>
                <legend>Exemple</legend>
                <img src={exempleModal} alt="interface d'une modale"/>
                <button
                    id="showModal"
                    onClick={() => setIsModalOpen(true)}
                >
                  Open Modal
                </button>

                <Modal
                    isOpen={isModalOpen}
                    onModalClosed={onModalClosed}
                >
                  <ModalButtonClose>X</ModalButtonClose>
                  <h2>Kings of Con !</h2>
                  <img src="https://media.giphy.com/media/3o6ZsSQPLIPBqsbT56/giphy.gif" alt="rob and richard"/>
                </Modal>
              </fieldset>

            </TabPanel>
            <TabPanel>
              <h2>Tabs</h2>
              <p>Voici un exemple d'une utilisation basique de notre composant Tabs. Vous remarquerez l'interface qui détaille clairement et simplement la composition du composant Tabs.</p>
              <div className="accessCodeSource">
                <a type="button" href="https://github.com/CametDean/react_patterns/blob/master/src/components/Tabs.js" target="_blank" rel="noopener noreferrer">Code source</a>
                <a type="button" href="https://codesandbox.io/s/tabs-final-7wgnw" target="_blank" rel="noopener noreferrer">Essayer!</a>
              </div>

              <fieldset>
                <legend>Exemple 1</legend>
                <img src={exempleTabs} alt="interface de tabs"/>
                <Tabs>
                  <div>
                    <TabList className="tabList">
                      <Tab>Fruits</Tab>
                      <Tab>Jeux Vidéo</Tab>
                      <Tab>Livres</Tab>
                    </TabList>
                  </div>

                  <div>
                    <TabPanels>
                      <TabPanel>Les fruits en été, c'est le pied!</TabPanel>
                      <TabPanel>Je viens de me remettre à jouer à Kingdom Hearts : un régal!</TabPanel>
                      <TabPanel>Ma mère m'a ramené un bouquin de Stephen King, il faut que je le commence ce weekend!</TabPanel>
                    </TabPanels>
                  </div>
                </Tabs>
              </fieldset>

              <p>Vous avez également la possibilité de rajouter des événements onClick ou onKeyDown en plus de celui de base qui permet de changer l'activeIndex</p>
              <fieldset>
                <legend>Exemple 2</legend>
                <img src={exempleTabsWithClickEvents} alt="interface de tabs avec des events onClick"/>
                <Tabs>
                    <TabList className="tabList">
                      <Tab onKeyDown={onKeyDownEvent}>Animaux</Tab>
                      <Tab onClick={onClickEvent}>Cinéma</Tab>
                      <Tab>Musique</Tab>
                    </TabList>
                    <TabPanels>
                      <TabPanel>Les chats seront bientôt les maîtres du monde</TabPanel>
                      <TabPanel>Rien de mieux qu'un Tarantino un jour de pluie</TabPanel>
                      <TabPanel>Vive le rock français!</TabPanel>
                    </TabPanels>
                </Tabs>
              </fieldset>
            </TabPanel>
          </TabPanels>
        </div>
      </Tabs>
    </div>
  );
}

export default App;
