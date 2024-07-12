import { Container, Row } from "react-bootstrap";
import GestplayLogo from "../assets/images/Gestplay_logo.png";
import GestplayTitle from "../assets/images/title.png";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";
import { IconButton } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import useSignOut from "react-auth-kit/hooks/useSignOut";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { logout } from "../auth/api/queries.";
import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";
import { Link } from "react-router-dom";

export const Header = () => {

    const isAuthenticated = useIsAuthenticated();
    const signOut = useSignOut();
    const navigate = useNavigate();
    const authHeader = useAuthHeader();

    const { mutate } = useMutation({
        mutationFn: (authHeader) => logout(authHeader),
        onSuccess: () => {
            signOut();
            navigate('/login');
        },
    });

    const handleSignOut = () => {
        mutate(authHeader);
    };

    return (
        <header>
            <Container className="py-3">
                <Row className="align-items-center justify-content-between">
                    <div className="d-flex align-items-center justify-content-center w-100 position-relative">
                        <div className="mx-auto">
                            <Link to="/">
                                <img src={GestplayLogo} alt="Gestplay Logo" height={80} className="mb-3" />
                                <img src={GestplayTitle} alt="Gestplay Titulo" height={100} />
                            </Link>
                        </div>
                        {isAuthenticated ?
                            <div className="position-absolute end-0">
                                <IconButton className="d-flex align-items-center" onClick={handleSignOut} sx={{ color:"primary.main"}}>
                                    <span className="fw-medium p-2 d-none d-lg-block">Cerrar Sesión</span>
                                    <LogoutIcon className="" />
                                </IconButton>
                            </div>
                            : ""
                        }
                    </div>
                </Row>
            </Container>
        </header>
    );
}