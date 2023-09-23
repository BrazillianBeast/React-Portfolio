import "./Projects.css"
import Slider from "./sliderComponent/Slider"
import { Container } from "react-bootstrap";

function Projects() {
    return (
        <>
                <Container fluid className="p-5 bg-body-tertiary">
                    <Container className='d-flex-column justify-content-center'>
                        <div>
                            <p className="fs-6 text-center">Browse my recent</p>
                            <p className="fs-2 fw-bold text-center">Projects</p>
                        </div>
                    </Container>

                    <Slider/>
                    
                </Container>

        </>
    )
}

export default Projects;