import React from 'react';

import PublicIcon from '@material-ui/icons/Public';
import SchoolIcon from '@material-ui/icons/School';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Typography from '@material-ui/core/Typography';

import img1 from '../assets/25.svg';
import img2 from '../assets/wife.jpg';
import img3 from '../assets/pizza1.jpg';
import img4 from '../assets/pizza2.jpg';

import Fade from 'react-reveal/Fade';

const Home = () => {
    return (
        <div>
             <div className="land" >
                <h1>
                    Learn, practice and improve on your favorite dishes recipe on <span >Cuisine lab</span>
                </h1>
                <img src={img1} alt="cuisine"/>
            </div>
            <div className="service" >
                <div>
                    <Fade top><h2>Learn</h2></Fade>
                    <Fade top>
                        <h3>
                            Discover New Recipes
                        </h3>
                    </Fade>
                    <Fade top>
                        <Typography className='service-text' >
                            Discover new dishes here in cuisine lab, we have a vast amount of recipes that keep updating and growing,
                            giving you a chance to know new dishes everyday
                        </Typography>
                    </Fade>
                </div>
                <img src={img2} alt="cuisine"/>
            </div>
            <div className="service alter" >
                <div>
                    <Fade top><h2>Practice</h2></Fade>
                    <Fade top>
                        <h3>
                            Build Up your Skill
                        </h3>
                    </Fade>
                    <Fade top>
                        <Typography className='service-text' >
                            Practice makes perfect, keep using cuisine lab frequently to train your cognitive
                            and physical strength in cooking as you pave your way in becoming a great cook
                        </Typography>
                    </Fade>
                </div>
                <img src={img3} alt="cuisine"/>
            </div>
            <div className="service" >
                <div>
                    <Fade top><h2>Improve</h2></Fade>
                    <Fade top>
                        <h3>
                            Perfect your Favorite Dishes
                        </h3>
                    </Fade>
                    <Fade top>
                        <Typography className='service-text' >
                            We likely have your favorite dishes in variety of forms so you can hone your skill, advance
                            your dishes and make a specialty as you groom a dish to be yours
                        </Typography>
                    </Fade>
                </div>
                <img src={img4} alt="cuisine"/>
            </div>
            <div className="certified" >
                <Fade top>
                    <div className="certified-icons" ><PublicIcon style={{fontSize: "1.2em"}} />
                        <br /> Accessible around the world
                    </div>
                </Fade>
                <Fade top>
                    <div className="certified-icons" ><SchoolIcon style={{fontSize: "1.2em"}} />
                        <br /> Top rated recipes
                    </div>
                </Fade>
                <Fade top>
                    <div className="certified-icons" ><CheckCircleIcon style={{fontSize: "1.2em"}} />
                        <br /> Absolutely free
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default Home
