import React from "react";
import Container from "../../components/Grid/Container";
import Card from "../../components/Card";
import CardContext from "../../utils/CardContext";

export default function Contact() {
  const [cardState, setCardState] = React.useState({
    title: "Contact Sheet Test",
    url: ""
  });

  return (
    <CardContext.Provider value={cardState}>
      <div>
          <h1 className="text-center">Contact</h1>
          <Card></Card>
      </div>
    </CardContext.Provider>
  );
}

