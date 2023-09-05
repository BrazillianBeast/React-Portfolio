import { Container } from "react-bootstrap";
import Stack from 'react-bootstrap/Stack';
// import Image from 'react-bootstrap/Image';
import './about.css';

function Hero(){
    return(
        <Container fluid className="bg-white">
            <Container className="p-5 bg-body-white">
            <Stack direction="horizontal" gap={3} className="container-sm pt-5">
                <Stack>
                    <div className="px-5 m-5 myAboutImage">
                    </div>
                </Stack>
                <Stack className="container-sm pt-5">
                    <div className="px-5 col-md-8"><p className="fs-6 display-5 fw-bold text-uppercase text-primary">About Me</p></div>
                    <div className="px-5"><p className="col-md-9 fs-4 fw-bold">A dedicated Front-end Developer
                                                                        based in Sao Paulo, Brasil 📍</p>
                    </div>
                    <div className="px-5">
                        <p className="col-md-8 fs-6 text-secondary-emphasis">
                        As a Junior Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications. 
                        </p>
                    </div>
                </Stack>
            </Stack>
            </Container>
        </Container>
    )}

export default Hero;