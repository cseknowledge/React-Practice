// import logo from "./logo.svg";
import "./App.css";
import CardFunctional from "./Components/CardFunctional";
import CardFunctionalBootstrap from "./Components/CardFunctionalBootstrap";
import CountStateClass from "./Components/CountStateClass";
import CountStateFunction from "./Components/CountStateFunction";
import CardClass from "./Components/CardClass";
import CardData from "./Database/CardData.json";
import Form from "./Components/Form";
import { v4 as uuidv4 } from "uuid";

const title = "My React App";

const titleStyle = {
  backgroundColor: "Green",
  color: "white",
  textAlign: "centre",
  padding: "15px",
  width: "100%",
};

function App() {
  let itemsClassBootstrap = [];
  let itemsFunctional = [];
  let itemsClass = [];

  itemsClassBootstrap = CardData.map((item, index) => (
    <CardFunctionalBootstrap
      key={uuidv4()}
      cardHeader={item.header}
      cardTitle={item.title}
      cardText={item.text}
    />
  ));

  itemsFunctional = CardData.map((item, index) => (
    <CardFunctional
      key={uuidv4()}
      cardHeader={item.header}
      cardTitle={item.title}
      cardText={item.text}
    />
  ));

  itemsClass = CardData.map((item, index) => (
    <CardClass
      key={uuidv4()}
      cardHeader={item.header}
      cardTitle={item.title}
      cardText={item.text}
    />
  ));
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={titleStyle}>{title}</h1>
        <p style={{ color: "white" }}>From Manipulate</p>
        <div className="row">
          <Form />
        </div>
        <p style={{ color: "white" }}>Count Using Function State</p>
        <div className="row">
          <CountStateFunction />
        </div>
        <p style={{ color: "white" }}>Count Using Class State</p>
        <div className="row">
          <CountStateClass />
        </div>
        <p style={{ color: "white" }}>Functional Components with Bootstrap</p>
        <div className="row">{itemsClassBootstrap}</div>
        <hr />
        <p style={{ color: "white" }}>Functional Components</p>
        <div className="row">{itemsFunctional}</div>
        <hr />
        <p style={{ color: "white" }}>Class Components</p>
        <div className="row">{itemsClass}</div>
      </header>
    </div>
  );
}

export default App;
