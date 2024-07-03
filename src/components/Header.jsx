import { Container, Row } from "react-bootstrap";
import GestplayLogo from "../assets/images/Gestplay_logo.png";
import GestplayTitle from "../assets/images/title.png";

export const Header = () => {
    return (
        <header>
            <Container>
                <Row>
                    <div className="d-flex align-items-center justify-content-center">
                        <img src={GestplayLogo} alt="Gestplay Logo" height={80} className="mb-3"/>
                        <img src={GestplayTitle} alt="Gestplay Titulo" height={100} />
                    </div>
                </Row>
            </Container>
        </header>
    );
}