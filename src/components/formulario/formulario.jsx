import { Box, Button, Checkbox, Container, FormControlLabel, Grid, Link, TextField, Typography } from '@mui/material'
import React from 'react'

function Formulario() {
  return (
    <>
    <Container component="main" maxWidth="xs">
    <Box sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems:'center',
            }}>
                <Typography component="h1" variant="h4">
                    Formulário de Login
                </Typography>
               <Box component="form" sx={{ mt:1}}>
                <TextField fullWidth label="Email" nome="email" variant="filled" margin="normal"/>
                <TextField fullWidth label="Senha" type="password" variant="filled" margin="normal"/>
                <FormControlLabel
                control={<Checkbox value="remember" color="primary"/>}
                label="Lembrar-me"
                />
                <Button fullWidth type="submit" variant="contained" sx={{ mt:4 , mb:2}}>Login</Button>
                <Grid container>
                    <Grid item xs>
                        <Link href="#">Esqueci minha senha</Link>
                    </Grid>
                    <Grid item>
                        <Link href="#">Cadastre-se </Link>
                    </Grid>
                    </Grid>
                
            </Box > 
         </Box>
         </Container>
     </> 
  )
}

export default Formulario