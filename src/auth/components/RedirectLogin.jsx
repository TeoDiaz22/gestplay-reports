import { useNavigate } from "react-router-dom";

export const RedirectLogin = () => {
    const navigate = useNavigate();
    const handleRedirect = () => navigate("/login");

    return (
        <span>
            Tu cuenta ha sido activada exitosamente. Continua&nbsp;
            <a href="" onClick={handleRedirect}>iniciando sesión</a>
        </span>
    );
};