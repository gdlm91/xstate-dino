import * as React from "react";
import { useMachine } from "@xstate/react";

import { FinalDinoMachine } from "../../machines/final";

import { Dino, DinoState } from "../../components";

const FinalDemo = () => {
  const [state, send] = useMachine(FinalDinoMachine, {
    devTools: true,
  });

  return (
    <>
      <h2>Final Demo</h2>

      <h4>
        Lives:{" "}
        {Array.from({ length: state.context.lives }).map((val, key) => (
          <span key={key}>💚</span>
        ))}
      </h4>

      <div>
        <button onClick={() => send("IDLE")}>Idle</button>

        <button onClick={() => send("WALK")}>Walk</button>

        <button onClick={() => send("RUN")}>Run</button>

        <button onClick={() => send("JUMP")}>Jump</button>

        <button onClick={() => send("DIE")}>Die</button>
      </div>

      <Dino state={state.value.toString() as DinoState} />
    </>
  );
};

export default FinalDemo;
