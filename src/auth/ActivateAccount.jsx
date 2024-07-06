import { Box, Button, CircularProgress } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated"
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { activateAccount } from "./api/queries.";
import EmailIcon from '@mui/icons-material/Email';
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();

export const ActivateAccount = () => {

    const isAuthenticated = useIsAuthenticated();
    const { token } = useParams();

    if (isAuthenticated) navigate("/profiles");

    const { mutate, isPending, isSuccess, isError } = useMutation({
        mutationFn: () => activateAccount(token),
    });

    const buttonSx = {
        m: 2,
        ...(isSuccess && {
            bgcolor: "#0CDB7A",
            '&:hover': {
                bgcolor: "#0CDB7A",
            },
        }),
        ...(isError && {
            bgcolor: "#F26A4B",
            '&:hover': {
                bgcolor: "#F26A4B",
            },
        }),
    };

    return (
        <Container className="d-flex justify-content-center align-items-center">
            <Box className="d-flex flex-column justify-content-center align-items-center bg-light p-5 rounded">
                {
                    isSuccess
                        ? <EmailIcon htmlColor={'#0CDB7A'} fontSize={"large"} />
                        : isError
                            ? <EmailIcon htmlColor={'#F26A4B'} fontSize={"large"} />
                            : <EmailIcon htmlColor={'#251959'} fontSize={"large"} />
                }
                <h3>¡Gracias por registrarte!</h3>
                <span>
                    {isSuccess
                        ? <RedirectLogin />
                        : isError
                            ? "Ha ocurrido un error al activar tu cuenta. Por favor intenta de nuevo."
                            : "Para completar el proceso de activación de tu cuenta, por favor haz clic en el botón de abajo."
                    }
                </span>
                <Box sx={{ m: 1, position: 'relative' }}>
                    <Button
                        type="submit"
                        variant="contained"
                        disabled={isPending}
                        sx={buttonSx}
                        onClick={(isSuccess) ? () => console.log() : mutate}
                    >
                        Activar cuenta
                    </Button>
                    {isPending && (
                        <CircularProgress
                            size={24}
                            sx={{
                                color: '#251959',
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                marginTop: '-12px',
                                marginLeft: '-12px',
                            }}
                        />
                    )}
                </Box>
            </Box>
        </Container>
    )
};

const RedirectLogin = () => {
    const handleRedirect = () => navigate("/login");

    return (
        <>
            Tu cuenta ha sido activada exitosamente. Por favor <a onClick={handleRedirect}>inicia sesion</a>
        </>
    );
};