import React from 'react';

import { TabList, Tab, TabPanels, TabPanel, Tabs } from "./components/Tabs";
import exempleTabs from "./img/tabs.png"
import exempleTabsWithClickEvents from "./img/tabs2.png"
import exempleTabsImplem1 from "./img/implementation/tabsImpl1.png"
import exempleTabsImplem2 from "./img/implementation/tabsImpl2.png"

import { Modal, ModalButtonClose } from "./components/Modal"
import exempleModal from "./img/modal.png"
import exempleModalImplem from "./img/implementation/modalImpl.png"

import {Carousel, Slides, Slide, SlideNav, Previous, PlayPause, Next } from "./components/Carousel";
import exempleCarousel from "./img/carousel.png"
import exempleCarouselImplem1 from "./img/implementation/carou1.png"
import exempleCarouselImplem2 from "./img/implementation/carou2.png"
import exempleCarouselImplem3 from "./img/implementation/carou3.png"
import exempleCarouselImplem4 from "./img/implementation/carou4.png"
//import exempleCarouselCss from "./img/style/carouselCss.png"

import { AccordeonItem, AccordeonLabel, AccordeonPanel, Accordeon }from "./components/Accordeon"
import exempleAccordeon from "./img/accordeon.png"
import exempleAccordeonImplem1 from "./img/implementation/accordeonImplem.png"
import exempleAccordeonCss from "./img/style/accordeonCss.png"


import Select from 'react-select'
import exempleSelect from "./img/select.png"

import './App.css';

function App() {

  //TABS
  const onKeyDownEvent =  (e) => {if(e.key === "Enter"){alert("Rex")}}
  const onClickEvent = () => alert("cobra")

  //MODAL
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const onModalClosed = (newValue) => setIsModalOpen(newValue)

  //SELECT
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

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
            <Tab>Select</Tab>
          </TabList>
        </header>

        <div className="content">
          <TabPanels>
            <TabPanel>
              <h2>Bienvenue sur Get Your React UI Component!</h2>
              <p>Get Your React UI Component est un catalogue de composants UI React réutilisables et génériques.</p>
              <p>Grâce à ce catalogue, vous gagnerez du temps sur vos missions ou lors de votre apprentissage de React.</p>
              <p>En effet, les composants ont été écrits de sorte que leurs interfaces soient claires dès le premier coup d'oeil ce qui permet de s'y retrouver plus facilement. De plus, vous trouverez ici des exemples d'utilisations des composants, ce qui est plus agréable que de devoir copier le code dans son IDE pour voir le résultat.</p>
              <p>Get Your React UI Component vous propose trois niveaux de lecture : </p>
              <ol>
                <li>Une lecture seule avec les exemples d'utilisation</li>
                <li>Une possibilité de tester le code proposé sur codesandbox</li>
                <li>Une possibilité de cloner le fichier source</li>
              </ol>
              <fieldset>
                <legend>Tips</legend>
                <p>Vous voulez tester le code par vous-même? Le bouton <span>Essayer!</span> est là pour ça!</p>
                <p>Un composant vous plaît? Cliquez sur <span>Code source</span> afin de récupérer le fichier contenant l'implémentation du composant.</p>
              </fieldset>
            </TabPanel>
            <TabPanel>
              <h2>Accordeon</h2>
              <p>Voici un exemple de l'utilisation de notre composant Accordeon. Utile pour les Foires aux Questions!</p>
              <p>Accordeon prend en option isOpen avec comme valeur l'index de l'AccordeonItem que vous souhaitez avoir ouvert par défaut. Une valeur de -1 indique qu'un item n'est ouvert par défault.</p>
              <div className="accessCodeSource">
                <a type="button" href="https://github.com/CametDean/react_patterns/blob/master/src/components/Accordeon.js" target="_blank" rel="noopener noreferrer">Code source</a>
                <a type="button" href="https://codesandbox.io/s/accordeon-final-3nsft?file=/src/App.js:27-112" target="_blank" rel="noopener noreferrer">Essayer!</a>
              </div>
              <fieldset>
                <legend>Exemple</legend>
                <Tabs>
                  <TabList className="tabList">
                    <Tab>App.js</Tab>
                    <Tab>Accordeon.js</Tab>
                    <Tab>Accordeon.css</Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel><img src={exempleAccordeon} alt="interface d'un accordeon"/></TabPanel>
                    <TabPanel><img src={exempleAccordeonImplem1} alt="implémentation d'un accordeon"/></TabPanel>
                    <TabPanel><img src={exempleAccordeonCss} alt="style de base d'un accordeon"/></TabPanel>
                  </TabPanels>
                </Tabs>
                <Accordeon isOpen={-1}>
                  <AccordeonItem>
                    <AccordeonLabel>Lorem ipsum dolor sit amet?</AccordeonLabel>
                    <AccordeonPanel>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo interdum velit.                     </AccordeonPanel>
                  </AccordeonItem>
                  <AccordeonItem>
                    <AccordeonLabel>Ut enim ad minim veniam?</AccordeonLabel>
                    <AccordeonPanel>
                      Lorem ipsum dolor sit amet, fermentum dui. Maecenas ultricies mi eget mauris pharetra et                             ultrices neque. Ac tortor vitae purus faucibus ornare suspendisse sed nisi. Ut morbi tincidunt augue                 interdum velit.
                    </AccordeonPanel>
                  </AccordeonItem>
                  <AccordeonItem>
                    <AccordeonLabel>Lorem ipsum dolor sit amet?</AccordeonLabel>
                    <AccordeonPanel><img className="accordeon__image" src="https://picsum.photos/id/237/300" alt="random"/></AccordeonPanel>
                  </AccordeonItem>
                  <AccordeonItem>
                    <AccordeonLabel>Ut enim ad minim veniam?</AccordeonLabel>
                    <AccordeonPanel>
                      Lorem rhoncus est pellentesque elit ullamcorper. Dolor sed viverra ipsum nunc aliquet bibendum enim                   facilisis. Ut morbi tincidunt augue interdum velit.
                    </AccordeonPanel>
                  </AccordeonItem>
                  <AccordeonItem>
                    <AccordeonLabel>Lorem ipsum dolor sit amet?</AccordeonLabel>
                    <AccordeonPanel>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo interdum velit.                     </AccordeonPanel>
                  </AccordeonItem>
                </Accordeon>
              </fieldset>
            </TabPanel>
            <TabPanel>
              <h2>Carousel</h2>
              <p>Voici un exemple de l'utilisation de notre composant Carousel.</p>
              <p>Dans ce Carousel, nous utilisons le contexte afin de récupérer le nombre d'enfants du composant Slides pour qu'il y ait le même nombre d'enfants chez le composant SlideNav.</p>
              <div className="accessCodeSource">
                <a type="button" href="https://github.com/CametDean/react_patterns/blob/master/src/components/Carousel.js" target="_blank" rel="noopener noreferrer">Code source</a>
                <a type="button" href="https://codesandbox.io/s/carrousel-react-h1mxc" target="_blank" rel="noopener noreferrer">Essayer!</a>
              </div>
              <fieldset>
                <legend>Exemple</legend>
                <Tabs>
                  <TabList className="tabList">
                    <Tab>App.js</Tab>
                    <Tab>Carousel.js</Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel><img src={exempleCarousel} alt="interface d'un carousel"/></TabPanel>
                    <TabPanel>
                      <img src={exempleCarouselImplem1} alt="implémentation d'un carousel"/>
                      <img src={exempleCarouselImplem2} alt="implémentation d'un carousel"/>
                      <img src={exempleCarouselImplem3} alt="implémentation d'un carousel"/>
                      <img className="imgCarousel" src={exempleCarouselImplem4} alt="implémentation d'un carousel"/>
                    </TabPanel>
                  </TabPanels>
                </Tabs>
                <Carousel isPlaying={true}>
                  <Slides>
                    <Slide><img className="slide" src="https://picsum.photos/id/1002/300" alt="random"/></Slide>
                    <Slide><img className="slide" src="https://picsum.photos/id/1015/300" alt="random"/></Slide>
                    <Slide><img className="slide" src="https://picsum.photos/id/1019/300" alt="random"/></Slide>
                    <Slide><img className="slide" src="https://picsum.photos/id/1022/300" alt="random"/></Slide>
                    <Slide><img className="slide" src="https://picsum.photos/id/1041/300" alt="random"/></Slide>
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
              <p>Ce qu'il faut retenir d'une modale, c'est qu'elle est composée d'un Overlay et d'un Content. C'est comme ça que l'on peut gérer la fermeture de la modale en cliquant en dehors de son Content : sur son Overlay.</p>
              <div className="accessCodeSource">
                <a type="button" href="https://github.com/CametDean/react_patterns/blob/master/src/components/Modal.js" target="_blank" rel="noopener noreferrer">Code source</a>
                <a type="button" href="https://codesandbox.io/s/modal-final-r4w8n?file=/src/App.js:27-76" target="_blank" rel="noopener noreferrer">Essayer!</a>
              </div>
              <fieldset>
                <legend>Exemple</legend>
                <Tabs>
                  <TabList className="tabList">
                    <Tab>App.js</Tab>
                    <Tab>Modal.js</Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel><img src={exempleModal} alt="interface d'une modale"/></TabPanel>
                    <TabPanel><img src={exempleModalImplem} alt="implémentation d'une modale"/></TabPanel>
                  </TabPanels>
                </Tabs>
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
                  <h2>Lorem Ipsum !</h2>
                  <img src="https://picsum.photos/id/1053/500" alt="random"/>
                </Modal>
              </fieldset>

            </TabPanel>
            <TabPanel>
              <h2>Tabs</h2>
              <p>Voici un exemple d'une utilisation basique de notre composant Tabs. Le fichier Tabs.js reste le même dans les deux exemples.</p>
              <p>La particularité de ce composant Tabs est l'utilisation du contexte. On peut, certes, ne pas utiliser le contexte si on décide de ne pas entourer TabList de div. Or, dès l'utilisation de ces div pour styliser TabList, div n'étant pas un enfant de React, il faut obligatoirement utiliser le contexte afin que les enfants de div puisse récupérer les props du composant parent Tabs.</p>
              <p>Autre remarque : il est impossible d'entourer le composant Tab de div. Ce composant a besoin d'être l'enfant direct de TabList afin de récupérer l'activeIndex.</p>
              <div className="accessCodeSource">
                <a type="button" href="https://github.com/CametDean/react_patterns/blob/master/src/components/Tabs.js" target="_blank" rel="noopener noreferrer">Code source</a>
                <a type="button" href="https://codesandbox.io/s/tabs-final-7wgnw" target="_blank" rel="noopener noreferrer">Essayer!</a>
              </div>

              <fieldset>
                <legend>Exemple 1</legend>
                <Tabs>
                  <TabList className="tabList">
                    <Tab>App.js</Tab>
                    <Tab>Tabs.js</Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel><img src={exempleTabs} alt="interface de tabs"/></TabPanel>
                    <TabPanel><img src={exempleTabsImplem1} alt="implémentation de tabs"/><img src={exempleTabsImplem2} alt="implémentation de tabs"/></TabPanel>
                  </TabPanels>
                </Tabs>

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
            <TabPanel>
              <h2>Select</h2>
              <p>Ce Select n'a pas été implémenté par nos soins. Parfois, quand on se rend compte qu'il existe déjà des composants très bien implémentés, qui couvrent tous les besoins possibles, il ne faut pas avoir honte de les utiliser et de les partager.</p>
              <p>Ce Select nous est proposé par le site <a href="https://react-select.com/" target="_blank" rel="noopener noreferrer">React-Select</a> sur lequel vous trouverez le code source du composant Select. Vous avez également la possibilité de tester sur codesandbox leurs composants.</p>
              <fieldset>
                <legend>Exemple</legend>
                <p>Après avoir installé react-select : yarn add react-select</p>
                <img src={exempleSelect} alt="interface d'un select"/>
                <Select options={options}/>
              </fieldset>
            </TabPanel>
          </TabPanels>
        </div>
      </Tabs>
    </div>
  );
}

export default App;
