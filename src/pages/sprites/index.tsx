import * as React from "react";

import { Dino } from "../../components";

const SpritesPage = () => (
  <>
    <h2>Sprites Page</h2>

    <h3>Idle</h3>
    <Dino state="Idle" />

    <h3>Walking</h3>
    <Dino state="Walking" />

    <h3>Running</h3>
    <Dino state="Running" />

    <h3>Jumping</h3>
    <Dino state="Jumping" />

    <h3>Dead</h3>
    <Dino state="Dead" />
  </>
);

export default SpritesPage;
