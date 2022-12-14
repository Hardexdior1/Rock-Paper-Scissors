import React, { useState } from "react";
import rock from "./images/icon-rock.svg";
import paper from "./images/icon-paper.svg";
import scissors from "./images/icon-scissors.svg";
import "./Main.css";

const Main = () => {
  const [Data, setData] = useState({
    img1: rock,
    img2: paper,
    score: 0,
    com:0,
    // alert:'welcome'
    // resultText,
  });

  let rps = ["rock", "paper", "scissors"];

  let handlePlay = () => {
    let randomeNuber1 = Math.floor(Math.random() * 3);
    let personal = rps[randomeNuber1];
    let randomeNuber2 = Math.floor(Math.random() * 3);
    let computer = rps[randomeNuber2];
    console.log(personal);
    console.log(computer);

    if (personal === computer ) {
      if (Data.score ===20 && Data.com <20){
        alert('you won in the final');
      } else if(Data.com ===20 && Data.score <20){
            alert ('computer won in d final')

      }

      if (personal === "rock") {
        setData({ ...Data, img1: rock, img2: rock, resultText: "it is a tie" });
      } else if (personal == "paper") {
        setData({
          ...Data,
          img1: paper,
          img2: paper,
          resultText: "it is a tie",
        });
      } else if (personal === "scissors") {
        setData({
          ...Data,
          img1: scissors,
          img2: scissors,
          resultText: "it is a tie",
        });
      }
    } else if (personal === "paper" && computer === "rock") {
      setData({
        ...Data,
        score: Data.score + 1,
        img1: paper,
        img2: rock,
        resultText: "you win",
      });
    } else if (personal === "scissors" && computer === "paper") {
      setData({
        ...Data,
        score: Data.score + 1,
        img1: scissors,
        img2: paper,
        resultText: "you win",
      });
    } else if (personal === "rock" && computer === "scissors") {
      setData({
        ...Data,
        score: Data.score + 1,
        img1: rock,
        img2: scissors,
        resultText: "you win",
      });
    } //STARTS
    else if (personal === "rock" && computer === "paper") {
      setData({
        ...Data,
        com:Data.com +1,
        img1: rock,
        img2: paper,
        resultText: "computer won",
      });
      
    } else if (personal === "paper" && computer === "scissors") {
      setData({
        ...Data,
         com: Data.com + 1,
        img1: paper,
        img2: scissors,
        resultText: "computer won",
      });
    }else if (personal === "scissors" && computer === "rock" ) {
      setData({
        ...Data,
        // score: Data.score - 1,
        img1: scissors,
        img2: rock,
        resultText: "computer won",
        com:Data.com+1,
      });
    }
      
    // ENDS
    else {
      setData({
        ...Data,
        score: Data.score + 1 ,
        img1: rock,
        img2: scissors,
        resultText: "you win", 
      });
    }
  };

  return (
    
    <div className="main">
      <div><marquee behavior="normal" direction="left">Game By Hardexdior</marquee></div>
      <div className="rps-div">
        <h1>
          ROCK <br /> PAPER SCISSORS
        </h1>
        <div>
          <p> ur score</p>
          <p>{Data.score}</p>
          <p>compt <br /> <br /> score</p>
          <p>{Data.com}</p>
        </div>
      </div>

      <div className="result">
        <div>
          <img className="rock" src={Data.img1} alt="" /> <p>You Picked</p>
        </div>
        <div>
          <img className="paper" src={Data.img2} alt="" />
          <p>Computer Picked</p>
        </div>
      </div>

      <div>
        <h1 className="restext">{Data.resultText}</h1>
        <button
          className="btn1"
          onClick={() => {
            handlePlay();
          }}>
          PLAY AGAIN
        </button>
      </div>

      <button className="btn2">
        {" "}
        <a
          className="link"
          href="https://www.google.com/search?q=rock+paper+scissors+rules+wikipedia&oq=rock+paper+scissors+rules+wikipedia&aqs=chrome..69i57j0i22i30j0i390l4.2299">
          Rules
        </a>{" "}
      </button>
    </div>
  );
};

export default Main;
