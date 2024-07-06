import { Box, List, ListSubheader } from "@mui/material";
import { Container } from "react-bootstrap";
import { ProfileButton } from "./components/ProfileButton";
import { useQuery } from "@tanstack/react-query";
import { getProfiles } from "../../api/queries";
import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";

export const ProfileList = () => {

	const authHeader = useAuthHeader();

	const { isPending, isError, data, error } = useQuery({
		queryKey: ['profiles'],
		queryFn: () => getProfiles(authHeader),
	});

	return (
		<Box className="profile-list">
			{isPending ? <p>Cargando...</p> :
			<List
				subheader={
					<ListSubheader component="div">
						<h1 className="p-3">Perfiles</h1>
					</ListSubheader>
				}
				sx={{width: '100%', bgcolor: 'background.paper'}}
			>
				{
					data.data.map(profile => (
						<ProfileButton key={profile.id} {...profile} />
					))
				}
			</List>
			}
		</Box>
	);
};