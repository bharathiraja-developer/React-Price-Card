import Card from "./components/card";
import "./styles/card.css";

function App() {
  return (
    <div className="row">
      <Card type="FREE" />
      <Card type="PLUS" />
      <Card type="PRO" />
    </div>
  );
}

export default App;
