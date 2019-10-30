import React from "react";
import { Dimmer, Loader, Image, Segment } from "semantic-ui-react";

export default function LoadingPage() {
  return (
    <div>
      {/* <Segment>
        <Dimmer active>
          <Loader>Loading</Loader>
        </Dimmer>

        <Image src="/images/wireframe/short-paragraph.png" />
      </Segment> */}

      <Dimmer active inverted>
        <Loader inverted>Loading</Loader>
      </Dimmer>
    </div>
  );
}
