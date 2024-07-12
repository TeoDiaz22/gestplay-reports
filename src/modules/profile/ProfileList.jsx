import { Box, CircularProgress, Divider, List, ListSubheader, Skeleton } from "@mui/material";
import ErrorIcon from '@mui/icons-material/Error';
import { Container } from "react-bootstrap";
import { ProfileButton } from "./components/ProfileButton";
import { useQuery } from "@tanstack/react-query";
import { getProfiles } from "../../api/queries";
import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";

export const ProfileList = () => {

	const authHeader = useAuthHeader();

	const { isPending, isError, data } = useQuery({
		queryKey: ['profiles'],
		queryFn: () => getProfiles(authHeader),
	});

	return (
		<Box className="profile-list">
			{isPending
				? <>
					<CircularProgress className="m-5" color='primary' />
					<p>Cargando perfiles...</p>
				</>
				: isError
					? <>
						<Container className="d-flex flex-column justify-content-center align-items-center">
							<ErrorIcon htmlColor={'#F26A4B'} fontSize={"large"} />
							<h3>¡Ha ocurrido un error!</h3>
							<span>Ha ocurrido un error al cargar los perfiles. Por favor intenta de nuevo.</span>
						</Container>
					</>
					:
					<List
						subheader={
							<ListSubheader
								component="div"
								sx={{
									borderRadius: 2,
									borderColor: 'primary.main',
									textAlign: 'center',
									color: 'primary.main',
								}}
							>
								<h1 className="p-3">Perfiles</h1>
							</ListSubheader>
						}
						sx={{
							width: '100%',
							bgcolor: 'background.paper',
							border: 2,
							borderRadius: 2,
							borderColor: 'primary.main',
						}}
					>
						{
							data.data.map(profile => (
								<>
									<Divider
										sx={{
											borderColor: 'primary.main',
											border: 1
										}}
									/>
									<ProfileButton key={profile.id} {...profile} />
								</>
							))
						}
					</List>
			}
		</Box>
	);
};