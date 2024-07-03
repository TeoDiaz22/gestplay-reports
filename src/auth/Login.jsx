import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Avatar, Box, Button, Grid, Link, TextField, InputAdornment, IconButton, InputLabel, OutlinedInput, FormControl } from "@mui/material";
import { useForm } from "@tanstack/react-form";
import { useState } from "react";
import { Container } from "react-bootstrap";

export const Login = () => {

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const { Field, handleSubmit, state } = useForm({
        defaultValues: {
            email: '',
            password: '',
        },
        onSubmit: async ({ value }) => {
            console.log(value);
        },
    });
    return (
        <Container>
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    {/* <LockOutlinedIcon /> */}
                </Avatar>
                <Box>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault()
                            handleSubmit()
                        }}
                    >
                        <Field
                            name="email"
                            children={({ state, handleChange, handleBlur, name }) => (
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Correo electronico"
                                    name="email"
                                    autoComplete="email"
                                    type="email"
                                    autoFocus
                                    onChange={(e) => handleChange(e.target.value)}
                                    onBlur={handleBlur}
                                    defaultValue={state.value}
                                />
                            )}
                        />
                        <Field
                            name="password"
                            children={({ state, handleChange, handleBlur, name }) => (
                                <FormControl sx={{ width: 1}} variant="outlined">
                                    <InputLabel htmlFor="password">Contraseña</InputLabel>
                                    <OutlinedInput
                                        margin="none"
                                        required
                                        id="password"
                                        label="Contraseña"
                                        name="password"
                                        type={showPassword ? 'text' : 'password'}
                                        autoComplete="current-password"
                                        onChange={(e) => handleChange(e.target.value)}
                                        onBlur={handleBlur}
                                        defaultValue={state.value}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>
                            )}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Iniciar sesion
                        </Button>
                    </form>
                    <Grid item xs>
                        <Link href="#" variant="body2">
                            {"Olvidaste tu contraseña?"}
                        </Link>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
};