 import Container from "react-bootstrap/Container";
import NavigationBar from "./Components/Navbar";
 import Card from "./Components/RecipeCard";

function App() {

  return (
    <div className="App">
      <NavigationBar />
      <Container>
         <Card />
      </Container>
    </div>
  );
}

export default App;
