import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { ProfileStats } from "../ProfileStats";
import { useNavigate } from "react-router-dom";


export const ProfileButton = ({ name, last_name, id, image }) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/profile/${id}`);
    };
    
    return (
        <ListItemButton onClick={handleClick}>
            <ListItemIcon>
                <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary={`${name} ${last_name}`} />
        </ListItemButton>
    )
}
