import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from "react-router-dom";


export const ProfileButton = ({ first_name, last_name, id, image_path }) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/profiles/${id}`);
    };

    return (
        <ListItemButton onClick={handleClick}>
            <ListItemIcon>
                {image_path
                    ? <img src={image_path} alt="imagen de perfil" style={{ width: 35, height: 35, borderRadius: '50%' }} />
                    : <AccountCircleIcon />
                }
            </ListItemIcon>
            <ListItemText primary={`${first_name} ${last_name}`} />
        </ListItemButton>
    )
}
