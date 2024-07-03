import { LockOutlinedIcon } from "@mui/icons-material/LockClockOutlined";
import { Avatar, Box, Button, Grid, Link, TextField } from "@mui/material";
import { useForm } from "@tanstack/react-form";
import { Container, Row } from "react-bootstrap";

export const RecoveryPasswordSetEmail = () => {

    const { Field, handleSubmit, state } = useForm({
        defaultValues: {
            email: '',
        },
        onSubmit: async ({value}) => {
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
                        <span>Ingresa tu correo electronico para restablecer tu contraseña</span>
                        <Field
                            name="email"
                            children={({ state, handleChange, handleBlur, name}) => (
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
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Enviar
                        </Button>
                    </form>
                </Box>
            </Box>
        </Container>
    );
};