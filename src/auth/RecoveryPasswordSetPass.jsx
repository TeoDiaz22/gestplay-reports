import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import CloseIcon from '@mui/icons-material/Close';
import { Avatar, Box, Button, InputAdornment, IconButton, InputLabel, OutlinedInput, FormControl, Alert, Collapse } from "@mui/material";
import { useForm } from "@tanstack/react-form";
import { useState } from "react";
import { Container } from "react-bootstrap";

export const RecoveryPasswordSetPass = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [open, setOpen] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const { Field, handleSubmit, state } = useForm({
        defaultValues: {
            password: '',
            passwordConfirm: '',
        },
        onSubmit: async ({ value }) => {
            setOpen(!validatePassword(value.password, value.passwordConfirm));
            console.log(value);
        },
    });

    const validatePassword = (password, passwordConfirm) => !(password !== passwordConfirm);

    return (
        <>
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
                            Las contraseñas no coinciden
                        </Alert>
                    </Collapse>
                </Box>
            </div>
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
                                name="password"
                                children={({ state, handleChange, handleBlur, name }) => (
                                    <FormControl sx={{ width: 1, mb: 2 }} variant="outlined">
                                        <InputLabel htmlFor="password">Nueva contraseña</InputLabel>
                                        <OutlinedInput
                                            margin="none"
                                            required
                                            id="password"
                                            label="Nueva contraseña"
                                            name="password"
                                            type={showPassword ? 'text' : 'password'}
                                            autoComplete="current-password"
                                            onChange={(e) => handleChange(e.target.value)}
                                            onBlur={handleBlur}
                                            autoFocus
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
                            <Field
                                name="passwordConfirm"
                                children={({ state, handleChange, handleBlur, name }) => (
                                    <FormControl sx={{ width: 1 }} variant="outlined">
                                        <InputLabel htmlFor="passwordConfirm">Confirma tu contraseña</InputLabel>
                                        <OutlinedInput
                                            margin="none"
                                            required
                                            id="passwordConfirm"
                                            label="Confirma tu contraseña"
                                            name="passwordConfirm"
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
                                Restablecer contraseña
                            </Button>
                        </form>
                    </Box>
                </Box>
            </Container>
        </>
    );
};