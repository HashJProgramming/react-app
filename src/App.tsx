import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Message from "./Message";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
{
  /* <Message/> */
}
function App() {
  const items = [
    "Pagadian",
    "Dapitan",
    "Zamboanga",
    "Cagayan de Oro",
    "Iligan",
    "Cotabato",
    "Davao",
    "Cebu",
    "Bacolod",
    "Iloilo",
    "Tacloban",
    "Ormoc",
    "Borongan",
    "Calbayog",
    "Tacurong",
    "Surigao",
    "Butuan",
    "Tandag",
    "Ozamiz",
    "Kidapawan",
    "Malaybalay",
    "Bislig",
    "Tagum",
    "Tuguegarao",
    "San Fernando",
    "Baguio",
    "Naga",
    "Legazpi",
    "Sorsogon",
    "Virac",
    "Tabaco",
  ];

  return (
    <div className="">
      {
        /* <ListGroup items={items} heading={"Locations"} /> */
        <Alert>
          <h1>Hash'J Programming</h1>
        </Alert>
      }
    </div>
  );
}

export default App;
