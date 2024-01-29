import { Button, Container, Stack, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"

//5.43 min

const languages = [
  {
    name:"Japanese",
    code:"ja",
  },
  {
    name:"Hindi",
    code:"hi",
  },
  {
    name:"French",
    code:"fr",
  },
  {
    name:"Spanish",
    code:"es",
  }
]

const Home = () => {

  const navigate = useNavigate()

  const languageSelectHandler = (language:string):void=>{
    navigate(`/learn?language=${language}`);
  }

  return <Container>
    <Typography variant="h3" p={"2rem"} mt={"4rem"} textAlign={"center"}>
      Welcome, Begin Your Journey of learning
    </Typography>

    <Stack direction={"row"} 
      spacing={"2rem"}
      p={"2rem"}
      alignItems={"center"}
      justifyContent={"center"}
      >
        {
          languages.map((i)=>(
            <Button onClick={()=> languageSelectHandler(i.code)} key={i.code} variant="contained">
              {i.name}
            </Button>
          ))
        }
    </Stack>

    <Typography textAlign={"center"}>Choose one language from above</Typography>

  </Container>
}

export default Home