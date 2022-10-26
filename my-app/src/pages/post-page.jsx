import React from 'react'
import {
    Container,
    Paper,
    Box,
    TextField,
    Button
} from '@mui/material'
import { post } from '../plugins/https'
import { useNavigate } from 'react-router-dom'

const PostPage = () => {
    const photoRef = React.useRef()
    const titleRef = React.useRef()
    const navigate = useNavigate()

    async function createPost() {
        const data = {
            title: titleRef.current.value,
            photo: photoRef.current.value,
        }
        const res = await post('createpost', data)
        console.log(res)

        if(!res.error){
            navigate('/mainpage')
        }
    }

  return (
    <Container>
        <Paper sx={{display:'flex', width: 'auto'}}>
            <Box sx={{display:'flex', flexDirection:'column'}}>
                <TextField id="standard-basic" inputRef={photoRef} label="photo" variant="standard" />
                <TextField id="standard-basic" inputRef={titleRef} label="title" variant="standard" />
                <Button onClick={createPost}>Sign up</Button>
            </Box>
        </Paper>
</Container>
  )
}

export default PostPage