import { createMachine, assign } from "xstate";

type MachineContext = {
  lives: number;
};

type MachineEvent =
  | { type: "IDLE" }
  | { type: "WALK" }
  | { type: "RUN" }
  | { type: "JUMP" }
  | { type: "DIE" };

export const FinalDinoMachine = createMachine<MachineContext, MachineEvent>({
  id: "DINO_FINAL_MACHINE",

  initial: "Idle",

  context: {
    lives: 3,
  },

  states: {
    Idle: {
      on: {
        WALK: { target: "Walking" },
      },
    },

    Walking: {
      on: {
        IDLE: { target: "Idle" },
        RUN: { target: "Running" },
      },
    },

    Running: {
      on: {
        WALK: { target: "Walking" },
        DIE: { target: "Dead" },
        JUMP: { target: "Jumping" },
      },
    },

    Jumping: {
      after: {
        1000: { target: "Running" },
      },
      // on: {
      //   RUN: { target: "Running" },
      // },
      // invoke: {
      //   //   src: () => (send) => {
      //   //     setTimeout(() => send("RUN"), 1000);
      //   //   },
      //   src: () =>
      //     new Promise((resolve) => {
      //       setTimeout(() => resolve(true), 1000);
      //     }),
      //   onDone: {
      //     target: "Running",
      //   },
      // },
    },

    Dead: {
      on: {
        IDLE: {
          target: "Idle",
          cond: (context) => {
            const hasLivesLeft = context.lives > 0;
            if (!hasLivesLeft) {
              alert("You ran out of lives... Refresh the page to play again");
            }
            return hasLivesLeft;
          },
        },
      },
      invoke: {
        src: () => Promise.resolve(),
        onDone: {
          actions: assign({
            lives: (context) => context.lives - 1,
          }),
        },
      },
    },
  },
});
