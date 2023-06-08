import { useRef, useState } from "react";
import Button from "@mui/material/Button";
import Card from "./Card";
//import HighScore from "./HighScore";

function Cards() {
  const [moves, setMoves] = useState(0);
  const [clearedCards, setClearedCards] = useState({});

  const [cards, setCards] = useState(
    [
      { id: 0, name: "David Lyon", status: "", img: "/images/coffeebean1.png" },
      { id: 0, name: "David Lyon", status: "", img: "/images/coffeebean1.png" },
      {
        id: 1,
        name: "David Lyon2",
        status: "",
        img: "/images/coffeebean2.png",
      },
      {
        id: 1,
        name: "David Lyon2",
        status: "",
        img: "/images/coffeebean2.png",
      },
      {
        id: 2,
        name: "David Lyon3",
        status: "",
        img: "/images/coffeebean3.png",
      },
      {
        id: 2,
        name: "David Lyon3",
        status: "",
        img: "/images/coffeebean3.png",
      },
      {
        id: 3,
        name: "David Lyon4",
        status: "",
        img: "/images/coffeebean4.png",
      },
      {
        id: 3,
        name: "David Lyon4",
        status: "",
        img: "/images/coffeebean4.png",
      },
      {
        id: 4,
        name: "David Lyon5",
        status: "",
        img: "/images/coffeebean5.png",
      },
      {
        id: 4,
        name: "David Lyon5",
        status: "",
        img: "/images/coffeebean5.png",
      },
      {
        id: 5,
        name: "David Lyon6",
        status: "",
        img: "/images/coffeebean6.png",
      },
      {
        id: 5,
        name: "David Lyon6",
        status: "",
        img: "/images/coffeebean6.png",
      },
    ].sort(() => Math.random() - 0.5)
  );

  const [previousCardState, setPreviousCardState] = useState(-1);

  const previousIndex = useRef(-1);

  const matchCheck = (currentCard) => {
    if (cards[currentCard].id === cards[previousCardState].id) {
      cards[previousCardState].status = "active matched";
      cards[currentCard].status = "active matched";
      setPreviousCardState(-1);
    } else {
      cards[currentCard].status = "active";
      setCards([...cards]);
      setTimeout(() => {
        setPreviousCardState(-1);
        cards[previousCardState].status = "unmatched";
        cards[currentCard].status = "unmatched";
        setCards([...cards]);
      }, 2000);
    }
  };

  const clickhandler = (index) => {
    if (index !== previousIndex.current) {
      if (cards[index].status === "active matched") {
        alert("already matched");
      } else {
        setMoves((moves) => moves + 1);
        if (previousCardState === -1) {
          previousIndex.current = index;
          cards[index].status = "active";
          setCards([...cards]);
          setPreviousCardState(index);
        } else {
          matchCheck(index);
          previousIndex.current = -1;
        }
      }
    } else {
      alert("Card already selected");
    }
  };

  const gamecomplete = () => {
    if (Object.keys(clearedCards).length === cards.length) {
      alert("Game Finished");
    }
  };

  const restart = () => {
    window.location.reload(false);
  };

  return (
    <>
      <div className="container">
        {cards.map((card, index) => {
          return (
            <Card
              card={card}
              key={index}
              index={index}
              clickhandler={clickhandler}
            />
          );
        })}
      </div>

      <h2 className="text">Moves: {moves}</h2>

      <div className="bold">
        <Button onClick={restart} variant="outlined" className="button">
          Restart
        </Button>
      </div>
    </>
  );
}

export default Cards;
