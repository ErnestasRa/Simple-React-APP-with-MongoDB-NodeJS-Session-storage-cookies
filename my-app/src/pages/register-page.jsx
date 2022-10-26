import * as React from 'react'
import {
    Container,
    Paper,
    Box,
    TextField,
    Button
} from '@mui/material'
import { post } from '../plugins/https'
import { useNavigate } from 'react-router-dom'

const RegisterPage = () => {
    const emailRef = React.useRef()
    const navigate = useNavigate()

    async function registerUser() {
        const data = {
            email: emailRef.current.value,
        }

        const res = await post('postuser', data)
        console.log(res)

        if(!res.error){
            navigate('/createpost')
        }

    }
 
  return (
    <Container>
        <Paper sx={{display:'flex', width: 'auto'}}>
            <Box sx={{display:'flex', flexDirection:'column'}}>
                <TextField id="standard-basic" inputRef={emailRef} label="Email" variant="standard" />
                <Button onClick={registerUser}>Sign up</Button>
            </Box>
        </Paper>
    </Container>
  )
}

export default RegisterPage