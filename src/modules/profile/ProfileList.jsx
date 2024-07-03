import {List, ListItemButton, ListItemText, ListSubheader } from "@mui/material";
import { Container } from "react-bootstrap";
import { ProfileButton } from "./components/ProfileButton";

export const ProfileList = ({ profiles }) => {
	return (
		<Container>
			<List
				subheader={
					<ListSubheader component="div">
						Perfiles
					</ListSubheader>
				}
			>
				{
					profiles.values.map(profile => (
						<ProfileButton key={profile.id} {...profile} />
					))
				}
			</List>
		</Container>
	);
};