import { ProfileList } from './modules/profile/ProfileList';
import { Login } from './auth/Login';
import { ProfileStats } from './modules/profile/ProfileStats';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { profiles } from './static/profiles';
import RequireAuth from '@auth-kit/react-router/RequireAuth';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Header } from './components/Header';
import { ActivateAccount } from './auth/ActivateAccount';

const queryClient = new QueryClient();

function App() {

	return (
		<QueryClientProvider client={queryClient}>
			<Header />
			<Routes>
				<Route path={"/login"} element={<Login />} />
				<Route path={"/"} exact element={
					<RequireAuth fallbackPath={"/login"}>
						<ProfileList profiles={profiles} />
					</RequireAuth>
				} />
				<Route path={"/activate-account/:token"} element={<ActivateAccount />} />
				<Route path={"/profiles"} element={
					<RequireAuth fallbackPath={"/login"}>
						<ProfileList profiles={profiles} />
					</RequireAuth>
				} />
				<Route path={"/profiles/:profileId"} element={
					<RequireAuth fallbackPath={"/login"}>
						<ProfileStats />
					</RequireAuth>
				} />
			</Routes>
		</QueryClientProvider>
	)
}

export default App
