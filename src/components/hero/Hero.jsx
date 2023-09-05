import './Hero.css'
import { Container } from "react-bootstrap";
import Stack from 'react-bootstrap/Stack';
import Image from 'react-bootstrap/Image';
import { FaLinkedin, FaGithub } from "react-icons/fa";
// import ListGroup frsom 'react-bootstrap/ListGroup';

function Hero(){
    return(
        <>
        <Container fluid className="bg-light">
            <Container className="p-5 bg-body-tertiary">
                <Stack direction="horizontal" gap={3}>
                    <Stack gap={3} className="container-sm pt-5">
                        <div className="pt-5 px-5 col-md-8"><h1 className="display-5 fw-bold">Front-End React Developer<Image width="50px"src="https://stefantopalovicdev.vercel.app/static/media/waving.1bae5fcfb51082b5c2b4.png"></Image></h1></div>
                        <div className="px-5"><p className="col-md-8 fs-4">Hi, I&apos;m Lucas Santana. A passionate Front-end React Developer based in Sao Paulo, Brasil. 📍</p></div>
                        <Stack direction="horizontal" gap={3} className="px-5">
                            <a aria-label="linkedin" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/l-santana-dev/">
                                <FaLinkedin size='2em'/>
                            </a>
                            <a aria-label="github" rel="noreferrer" target="_blank" href="https://github.com/BrazillianBeast">
                                <FaGithub size='2em'/>
                            </a>
                        </Stack>
                    </Stack>
                    <Stack>
                    <div className="px-5 m-5 myBorder">

                    </div>
                    </Stack>
                </Stack>
                <Stack direction="horizontal" gap={3} className="px-5">
                    <p className="mt-3">Tech Stack | </p>
                        <Image roundedCircle width="50px" alt="HTML5" className="bg-white p-2 shadow-sm" src="html5.svg"></Image>
                        <Image roundedCircle width="50px" alt="CSS3" className="bg-white p-2 shadow-sm" src="css3.svg"></Image>
                        <Image roundedCircle width="50px" alt="JavaScript" className="bg-white p-2 shadow-sm" src="javascript.svg"></Image>
                        <Image roundedCircle width="50px" alt="React" className="bg-white p-2 shadow-sm"src="react.svg"></Image>
                        <Image roundedCircle width="50px" alt="Tailwind" className="bg-white p-2 shadow-sm"src="tailwind.svg"></Image>
                </Stack>

            </Container>
        </Container>
        </>
    )
}

export default Hero;