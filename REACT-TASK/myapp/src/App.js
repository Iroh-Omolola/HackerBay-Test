import "./App.css";
import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import _ from "lodash";
import ModalStyles from "./components/ModalStyles";
import UseStyles from "./components/UseStyles";
import GameBoard from "./components/Board";
import AvatarPosition from "./components/Avatar";
import Form from "./components/Form";
import BodyForm from "./components/BodyForm";



function App() {
  const classes = UseStyles();
  const [gridWidth, setGridWidth] = useState(1);
  const [gridHeight, setGridHeight] = useState(1);
  const [modalStyle] = useState(ModalStyles);
  const [open, setOpen] = useState(false);
  const [resp, setResp] = useState(" ");
  const [avatar, setAvatar] = useState("1");
  const [splits, setSplits] = useState([]);
  const [playBoard, setPlayBoard] = useState([]);
  const [moves, setMoves] = useState(0);

  
  

  const handleOpen = () => {
    setGridWidth(0);
    setGridHeight(0);
    setSplits([]);
    setOpen(true);
    setMoves(0);
  };

  const handleClose = () => {
    if (gridWidth > 1 && gridHeight > 1) {
      setAvatar(AvatarPosition (gridWidth, gridHeight));
    }
    setOpen(false);
    let board = GameBoard(gridWidth, gridHeight);
    let newBoard = [...board];
    _.remove([...newBoard], (n) => n === avatar);
    setSplits(_.sampleSize(newBoard, gridHeight));
    setPlayBoard(GameBoard(gridWidth, gridHeight));
  };

  const handleHeightChange = (e) => {
    if (e.target.value > 1 && e.target.value < 10) {
      setGridHeight(e.target.value);
    } else {
      setResp(<p>Height should be between 1 and 9</p>);
    }
  };
  const handleWidthChange = (e) => {
    if (e.target.value > 1 && e.target.value < 10) {
      setGridWidth(e.target.value);
    } else {
      setResp(<p>Width should be between 1 and 9</p>);
    }
  };

  const boardRun = (e) => {
    e = e || window.event;

    if (e.keyCode === 38) {
      // up arrow
      let upMove = document.getElementById(`${avatar}`);
      if (
        upMove !== undefined &&
        upMove !== null &&
        playBoard.includes(avatar) &&
        parseInt(avatar) > 20
      ) {
        upMove.classList.add("plain");
        upMove.classList.remove("man");
        let moveUp = (parseInt(avatar) - 10).toString();
        if (splits.length > 1) {
          setMoves(moves + 1);
        }
        setAvatar(moveUp);
      }
    } else if (e.keyCode === 40) {
      // down arrow
      let downMove = document.getElementById(`${avatar}`);
      if (
        downMove !== undefined &&
        downMove !== null &&
        playBoard.includes(avatar) &&
        parseInt(avatar) < gridHeight * 10
      ) {
        downMove.classList.add("plain");
        downMove.classList.remove("man");
        let moveDown = (parseInt(avatar) + 10).toString();
        if (splits.length > 1) {
          setMoves(moves + 1);
        }
        setAvatar(moveDown);
      }
    } else if (e.keyCode === 37) {
      // left arrow
      let leftMove = document.getElementById(`${avatar}`);
      if (
        leftMove !== undefined &&
        leftMove !== null &&
        playBoard.includes((parseInt(avatar) - 1).toString())
      ) {
        leftMove.classList.add("plain");
        leftMove.classList.remove("man");
        let moveLeft = (parseInt(avatar) - 1).toString();
        if (splits.length > 1) {
          setMoves(moves + 1);
        }
        setAvatar(moveLeft);
      }
    } else if (e.keyCode === 39) {
      // right arrow

      let rightMove = document.getElementById(`${avatar}`);

      if (
        rightMove !== undefined &&
        rightMove !== null &&
        playBoard.includes(avatar) &&
        playBoard.includes((parseInt(avatar) + 1).toString())
      ) {
        rightMove.classList.add("plain");
        rightMove.classList.remove("man");
        let moveRight = (parseInt(avatar) + 1).toString();
        if (splits.length > 1) {
          setMoves(moves + 1);
        }
        setAvatar(moveRight);
      }
    }
  };
  document.onkeydown = boardRun;
  useEffect(() => {
    let getAvatar = document.getElementById(`${avatar}`);
    if (getAvatar !== undefined && getAvatar !== null) {
      if (getAvatar.classList.contains("food")) {
        getAvatar.classList.remove("food");
        _.remove(splits, (n) => n === avatar);
      }
      getAvatar.classList.remove("plain");
      getAvatar.classList.add("man");
    }
    setTimeout(() => {
      _.forEach(splits, (value) => {
        if (value !== avatar) {
          let split = document.getElementById(`${value}`);
          split.classList.remove("plain");
          split.classList.add("food");
        }
      });
    }, 1000);
  }, [avatar, splits]);

  const body = (
   <BodyForm resp={resp} modalStyle={modalStyle} classes={classes} handleHeightChange={handleHeightChange} handleWidthChange={handleWidthChange} />
  );
  return (
    <div className={`root`}>
      <div className={`App`}>
        <Form handleOpen={handleOpen} handleClose={handleClose} open={open} body={body} moves={moves} splits={splits}/>
        {Array.from({ length: gridHeight }, (_, h) => h + 1).map((hValue) => (
          <Grid key={hValue} container spacing={1} direction="row">
            {Array.from({ length: gridWidth }, (_, i) => i + 1).map((value) => (
              <Grid key={value} item>
                <Paper className={`cell`}>
                  <span id={`${hValue}${value}`} className={`plain`}>
                  </span>
                </Paper>
              </Grid>
            ))}
          </Grid>
        ))}
      </div>
    </div>
  );
}

export default App;