import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";


function App() {
  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`
    }}>
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <Show above='lg'>
        <GridItem bg="red.300" area={"aside"}>
          Aside
        </GridItem>
      </Show>
      <GridItem bg="blue.300" area={"main"}>
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
