import React from 'react'
import CardComponent from '../components/card-component'
import {
    Container,
    Paper,
    Box,
} from '@mui/material'
import { get } from '../plugins/https'

const MainPage = () => {
    const [posts, setPosts] = React.useState([])
    const [email, setEmail] = React.useState('')

    async function getPosts() {
        const res = await get('mainpage')
        if(!res.error){
            setPosts(res.data.allPosts)
            setEmail(res.data.email)
        } else {
            throw new Error(res.error)
        }
    }

    React.useEffect(() => {
        getPosts()
    }, [])

  return (
    <Container>
        <Paper>
            <Box sx={{display:'flex', flexDirection:'row', flexWrap:'wrap', gap: 2}}>
                {posts.map((post,i) => {
                    return <CardComponent 
                    email={email} 
                    image={post.photo} 
                    title={post.title}
                    key={i}
                    />
                })}
            </Box>
        </Paper>
    </Container>
  )
}

export default MainPage