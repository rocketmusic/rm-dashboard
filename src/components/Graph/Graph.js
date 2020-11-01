import { useState } from "react";
import PropTypes from "prop-types";
import GraphBtn from "../GraphBtn/GraphBtn";

import graph1Pic from "../../assets/graph-1.png";
import graph2FunkPic from "../../assets/graph-2-funk.png";
import graph2SertanejoPic from "../../assets/graph-2-sertanejo.png";

const GRAPH_SRCS = [graph1Pic, graph2FunkPic, graph2SertanejoPic];

const Graph = (props) => {
  const [currGraph, setCurrGraph] = useState(props.graphIdx);

  return (
    <div className={props.className}>
      <h2 className="mb-3">{props.title}</h2>

      {props.buttons && (
        <div className="mb-2">
          {props.buttons.map((btn, idx) => (
            <GraphBtn
              key={btn.label}
              onClick={() => setCurrGraph(btn.graphIdx)}
              active={currGraph === btn.graphIdx}
              disabled={currGraph === btn.graphIdx}
              appendClassName={idx !== props.buttons.length - 1 && "mr-2"}
            >
              {btn.label}
            </GraphBtn>
          ))}
        </div>
      )}

      <img src={GRAPH_SRCS[currGraph]} alt="Graph 1" height="250px" />
    </div>
  );
};

Graph.propTypes = {
  title: PropTypes.string.isRequired,
  graphIdx: PropTypes.number.isRequired,
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      graphIdx: PropTypes.number.isRequired,
    })
  ),
};

export default Graph;
