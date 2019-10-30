import React from "react";
import { Dimmer, Loader } from "semantic-ui-react";

export default function LoadingPage() {
  return (
    <div>
      <Dimmer active inverted>
        <Loader inverted>Loading</Loader>
      </Dimmer>
    </div>
  );
}
