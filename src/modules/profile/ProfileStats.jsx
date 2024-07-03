import { useParams } from "react-router-dom";
import { gameDataClick, gameDataCursor } from "../../static/gameData.js"
import { StatsTable } from "./components/StatsTable";
import { StatsCharts } from "./components/StatsCharts";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useEffect, useState } from "react";
import { profiles } from "../../static/profiles.js";
import ErrorIcon from '@mui/icons-material/Error';

export const ProfileStats = () => {
    const [levelId, setLevelId] = useState(1);
    const [game, setGame] = useState(1);
    const [profileStats, setProfileStats] = useState([]);
    const [profileName, setProfileName] = useState();
    const [profileImage, setProfileImage] = useState();
    const { profileId } = useParams();

    useEffect(() => {
        if (game === 1) {
            const { game_data } = gameDataCursor[profileId];
            setProfileStats(game_data[levelId]);
        }

        if (game === 2) {
            const { game_data } = gameDataClick[profileId];
            setProfileStats(game_data[levelId]);
        }
    }, [game, levelId]);

    useEffect(() => {
        const profile = profiles.values.filter(profile => profileId === profile.id);
        const { name, image } = profile[0];
        setProfileName(name);
        setProfileImage(image);
    }, []);

    console.log(profileId)
    console.log(profileStats)

    return (
        <>
            <div className="d-flex">
                    <FormControl sx={{ display: 'inline' }}>
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
                    <h1>{profileName}</h1>
                </span>
            </div>
            {profileStats.length === 0 ? <><ErrorIcon htmlColor={'#F26A4B'} fontSize={"large"} /><h1>No existen registros
                para el nivel seleccionado</h1></> :
                <>
                    <StatsTable stats={profileStats} />
                    <StatsCharts stats={profileStats} />
                </>
            }
        </>
    )
        ;
}
