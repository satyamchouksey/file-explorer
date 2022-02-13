import Container from "./components/Container";
import { data } from "./response";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Container depth={0} data={data} />
    </div>
  );
}
