import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import CloseIcon from '@mui/icons-material/Close';
import { Avatar, Box, Button, Grid, Link, TextField, InputAdornment, IconButton, InputLabel, OutlinedInput, FormControl, Collapse, Alert, CircularProgress } from "@mui/material";
import { useForm } from "@tanstack/react-form";
import { useMutation } from '@tanstack/react-query';
import { useState } from "react";
import { Container } from "react-bootstrap";
import { login } from './api/queries.';
import useSignIn from 'react-auth-kit/hooks/useSignIn';
import { useNavigate } from 'react-router-dom';

const PASSWORD_ERROR_MESSAGE = "Contraseña o correo incorrecto";
const DEFAULT_ERROR_MESSAGE = "Ha ocurrido un error";

export const Login = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState(DEFAULT_ERROR_MESSAGE)
    const [open, setOpen] = useState(false);

    const signIn = useSignIn();
    const navigate = useNavigate();

    const { mutate, isPending } = useMutation({
        mutationFn: ({ email, password }) => login(email, password),
        onSuccess: ({ data }) => {
            signIn({
                auth: {
                    token: data.access_token,
                    type: "Bearer"
                },
                userState: {
                    id: '1',
                },
            });
            navigate("/profiles");
        },
        onError: (error) => {
            if (error.response.status === 401) {
                setErrorMessage(PASSWORD_ERROR_MESSAGE);
                setOpen(true);
            } else {
                setErrorMessage(DEFAULT_ERROR_MESSAGE);
                setOpen(true);
            }
        },
    });

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
            mutate(value);
        },
    });
    return (
        <Container>
            <div className='position-absolute top-0 end-0'>
                <Box>
                    <Collapse in={open}>
                        <Alert
                            variant="filled"
                            severity="warning"
                            action={
                                <IconButton
                                    aria-label="close"
                                    color="inherit"
                                    size="small"
                                    onClick={() => {
                                        setOpen(false);
                                    }}
                                >
                                    <CloseIcon fontSize="inherit" />
                                </IconButton>
                            }
                            sx={{ mb: 2 }}
                        >
                            {errorMessage}
                        </Alert>
                    </Collapse>
                </Box>
            </div>
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
                                <FormControl sx={{ width: 1 }} variant="outlined">
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
                        <Box sx={{ mt:2 ,position: 'relative' }}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                disabled={isPending}
                            >
                                Iniciar sesion
                            </Button>
                            {isPending && (
                                <CircularProgress
                                    size={24}
                                    sx={{
                                        color: '#251959',
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        marginTop: '-12px',
                                        marginLeft: '-12px',
                                    }}
                                />
                            )}
                        </Box>
                    </form>
                </Box>
            </Box>
        </Container>
    );
};