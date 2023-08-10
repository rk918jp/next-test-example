import {Box, Button, Container, TextField, Typography} from "@mui/material";
import {useState} from "react";

export default function Home() {
  const [value, setValue] = useState("");
  const [text, setText] = useState("");

  return (
    <Container sx={{pt: 5}}>
      <Typography variant={"h4"} component={"h1"}>
        Form Page
      </Typography>
      <form>
        <TextField value={value} onChange={(e) => setValue(e.target.value)} label={"Name"} fullWidth margin={"normal"} />
      </form>

      <Button variant={"contained"} onClick={() => {
        setText(value);
      }}>
        反映
      </Button>

      <Box
        className={"input-value"}
        sx={{borderColor: "#aaa", borderWidth: 1, borderStyle: "solid", p: 2, mt: 3}}
      >
        <Typography>
          入力値: {text}
        </Typography>
      </Box>


    </Container>
  )
}
