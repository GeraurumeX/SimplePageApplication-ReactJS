import React from "react";
import Actor from "./actor";
import Actors from "./actors";
import { Route } from "react-router-dom";
import { ActorList } from "../data/actors";

const ActorsContainer = props => {
  let actorUrl = ActorList.map(actor => {
    return (
      <Route
        path={`/actors/${actor.url}`}
        render={() => (
          <Actor
            image={actor.profile_img}
            name={actor.name}
            details={actor.description}
          />
        )}
      />
    );
  });
  return (
    <React.Fragment>
      <Route
        exact
        path='/actors'
        render={() => <Actors title='Best Actors' />}
      />
      {actorUrl}
    </React.Fragment>
  );
};

export default ActorsContainer;
