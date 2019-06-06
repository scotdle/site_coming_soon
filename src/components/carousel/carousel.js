import React from "react"
import  {Carousel}  from "react-bootstrap"
import  {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faDribbble, faGithub, faInstagram, faSpotify, faYoutube } from "@fortawesome/free-brands-svg-icons"
import SVGicon from "../svgicon/svgicon.js"


const youTube = 'https://www.youtube.com/channel/UCPhuSnEQA_MFDVxrnSCQbJA';
const instagram = 'https://www.instagram.com/scotdle/';
const gitHub = 'https://github.com/scotdle';
const dribbble = 'https://dribbble.com/scotdle';
const spotify = 'https://open.spotify.com/user/129753316?si=X2u5G0bWQBOUvhPpoJbitg';
const aroundTheCountry = 'https://aroundthecountry.us/';

const ScootersCarousel = () =>

  <Carousel>
    <Carousel.Item className="first_slide">

      <Carousel.Caption>
        <h3>Musician</h3>
        <p>Guitar is my specialty..probably listening to Spotify Discover Weekly.</p>
        <a href={youTube} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className={'faIcon'} icon={faYoutube}/></a>
        <a href={spotify} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className={'faIcon'} icon={faSpotify}/></a>


      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item className="second_slide">

      <Carousel.Caption>
        <h3>Designer/Developer</h3>
        <p>Check out my GitHub & Dribble to see what i've been working on! Lately it's been with API's...</p>
        <a href={dribbble} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className={'faIcon'} icon={faDribbble}/></a>
        <a href={gitHub} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className={'faIcon'} icon={faGithub}/></a>

      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item className="third_slide">

      <Carousel.Caption className={'carouselcaption'}>

        <h3>Media</h3>
        <p>Taking pictures and creating content is something that I love to do. Check out my country blog Around The Country, or
          head on over to my Instagram!</p>
        <a href={youTube} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className={'faIcon'} icon={faYoutube}/></a>
        <a href={instagram} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className={'faIcon'} icon={faInstagram}/></a>
        <a href={aroundTheCountry} target="_blank" rel="noopener noreferrer"><SVGicon imageSVG={'images/around_the_country.svg'} className={'atcicon'} alternateName='aroundthecountry'/></a>

      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>

export default ScootersCarousel;
