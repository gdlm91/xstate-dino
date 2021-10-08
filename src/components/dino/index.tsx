import * as React from "react";

import "./styles.css";

export type DinoState = "Idle" | "Walking" | "Running" | "Jumping" | "Dead";

interface Props {
  state: DinoState;
}

const Dino: React.FC<Props> = ({ state }) => (
  <div id="Dino" className={`${state}`}></div>
);

export default Dino;
