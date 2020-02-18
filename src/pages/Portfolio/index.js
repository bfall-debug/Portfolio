import React from "react";
import Container from "../../components/Grid/Container";
import Card from "../../components/Card";
import CardContext from "../../utils/CardContext";

export default function Portfolio() {
  const [cardState, setCardState] = React.useState({
    title: "Portfolio Page Testing",
    url: ""
  });

  return (
    <CardContext.Provider value={cardState}>
      <div>
          <h1 className="text-center">Portfolio</h1>
          <Card></Card>
      </div>
    </CardContext.Provider>
  );
}

