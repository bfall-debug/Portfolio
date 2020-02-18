import React from "react";
import Container from "../../components/Grid/Container";
import Card from "../../components/Card";
import CardContext from "../../utils/CardContext";

export default function Home() {
    const [cardState, setCardState] = React.useState({
      title: "",
      url: ""
    });


  return (
    <CardContext.Provider value={cardState}>
      <div>
          <h1 className="text-center">Home</h1>
      </div>
    </CardContext.Provider>
  );
}

