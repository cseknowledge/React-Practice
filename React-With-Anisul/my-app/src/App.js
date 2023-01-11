// import logo from "./logo.svg";
import "./App.css";
import Card from "./Components/Card";
import CardData from "./Database/CardData.json";
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
  console.log(CardData);
  let items = [];
  // for (let index = 0; index < CardData.length; index++) {
  //   items.push(
  //     <Card
  //       key={index.toString()}
  //       cardHeader={CardData[index].header}
  //       cardTitle={CardData[index].title}
  //       cardText={CardData[index].text}
  //     />
  //   );
  // }
  items = CardData.map((item, index) => (
    <Card
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
        <div className="row">{items}</div>
        <div className="row" style={{ color: "white" }}>
          Nested List
        </div>
      </header>
    </div>
  );
}

export default App;
