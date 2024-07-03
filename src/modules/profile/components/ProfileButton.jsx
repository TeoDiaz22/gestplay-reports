import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { ProfileStats } from "../ProfileStats";


export const ProfileButton = ({ name, id, image }) => {

    const handleClick = () => {
        console.log(`Profile ${id} clicked`);
    };
    return (
        <ListItemButton onClick={handleClick} href={`/profile/${id}`}>
            <ListItemIcon>
                <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary={name} />
        </ListItemButton>
    )
}
