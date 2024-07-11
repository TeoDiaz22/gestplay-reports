import { useParams } from "react-router-dom";
import { StatsTable } from "./components/StatsTable";
import { StatsCharts } from "./components/StatsCharts";
import { Box, CircularProgress, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useEffect, useState } from "react";
import ErrorIcon from '@mui/icons-material/Error';
import { Container } from "react-bootstrap";
import { getClickGameData, getCursorGameData, getProfile } from "../../api/queries.js";
import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";
import { useQuery } from "@tanstack/react-query";

export const ProfileStats = () => {
    const [levelId, setLevelId] = useState(0);
    const [game, setGame] = useState(1);
    const [profileStats, setProfileStats] = useState([]);
    const [profileName, setProfileName] = useState("");
    const [profileImage, setProfileImage] = useState("");
    const [gameDataCursor, setGameDataCursor] = useState({});
    const [gameDataClick, setGameDataClick] = useState({});
    const { profileId } = useParams();

    const authHeader = useAuthHeader();

    const cursorGameQuery = useQuery({ queryKey: ['cursorGameData'], queryFn: () => getCursorGameData(profileId, authHeader), });
    const clickGameQuery = useQuery({ queryKey: ['clickGameData'], queryFn: () => getClickGameData(profileId, authHeader) });
    const profileData = useQuery({ queryKey: ['profileData'], queryFn: () => getProfile(profileId, authHeader) });

    useEffect(() => {
        if (game === 1) {
            if (cursorGameQuery.isLoading || cursorGameQuery.isError) return;
            const game_data = cursorGameQuery.data.data;
            console.log(game_data)
            levelId == 0 ? setProfileStats(getAllLevelsData(game_data)) : setProfileStats(game_data[levelId]);
        }

        if (game === 2) {
            if (clickGameQuery.isLoading || clickGameQuery.isError) return;
            const game_data = clickGameQuery.data.data;
            levelId == 0 ? setProfileStats(getAllLevelsData(game_data)) : setProfileStats(game_data[levelId]);
        }
    }, [game, levelId, cursorGameQuery.isLoading, clickGameQuery.isLoading]);

    useEffect(() => {
        if (profileData.isLoading) return;
        const { first_name, last_name, image_path } = profileData.data.data;
        setProfileName(`${first_name} ${last_name}`);
        setProfileImage(image_path);
    }, [profileData.isLoading, profileData.data]);

    const getAllLevelsData = (gameData) => {
        let allLevelsData = [];
        for (const [key, value] of Object.entries(gameData)) {
            allLevelsData.push(...value);
        }
        return allLevelsData
    }

    console.log(profileId)
    console.log(profileStats)

    return (
        <Container>
            <div className="d-flex">
                <FormControl sx={{ display: 'inline', mr: 2 }}>
                    <InputLabel id="game">Juego</InputLabel>
                    <Select
                        id="game"
                        labelId="game"
                        value={game}
                        label="Juego"
                        onChange={(event) => setGame(event.target.value)}
                    >
                        <MenuItem value={1}>Juego Cursor</MenuItem>
                        <MenuItem value={2}>Juego Click</MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={{ display: 'inline' }}>
                    <InputLabel id="level">Nivel</InputLabel>
                    <Select
                        labelId="level"
                        value={levelId}
                        label="Nivel"
                        onChange={(event) => setLevelId(event.target.value)}
                    >
                        <MenuItem value={0}>Todos</MenuItem>
                        <MenuItem value={1}>Nivel 1</MenuItem>
                        <MenuItem value={2}>Nivel 2</MenuItem>
                        <MenuItem value={3}>Nivel 3</MenuItem>
                        <MenuItem value={4}>Nivel 4</MenuItem>
                        <MenuItem value={5}>Nivel 5</MenuItem>
                        <MenuItem value={6}>Nivel 6</MenuItem>
                        {game === 1 ? <MenuItem value={7}>Nivel 7</MenuItem> : null}
                        {game === 1 ? <MenuItem value={8}>Nivel 8</MenuItem> : null}
                    </Select>
                </FormControl>
                <span className={"ms-auto"}>
                    <h1>
                        {profileName}
                        <img src={profileImage} alt="imagen de perfil" style={{ width: 50, height: 50, borderRadius: '50%' }} className="mx-3"/> 
                    </h1>
                </span>
            </div>
            {
                (cursorGameQuery.isLoading || clickGameQuery.isLoading)
                    ? <div className="d-flex flex-column align-items-center">
                        <CircularProgress className="m-5" color='primary' />
                        <p>Cargando estadísticas...</p>
                    </div>
                    : (cursorGameQuery.isError || clickGameQuery.isError)
                        ? <div className="d-flex flex-column align-items-center">
                            <ErrorIcon htmlColor={'#F26A4B'} fontSize={"large"} />
                            <h1>No se pudieron cargar las estadísticas</h1>
                        </div>
                        : profileStats.length === 0
                            ? <div className="d-flex flex-column align-items-center">
                                <ErrorIcon htmlColor={'#F26A4B'} fontSize={"large"} />
                                <h1>No existen registros para el nivel seleccionado</h1>
                            </div>
                            : <>
                                <StatsTable stats={profileStats} />
                                <StatsCharts stats={profileStats} isAllLevels={levelId === 0} />
                            </>
            }
        </Container>
    )
        ;
}
