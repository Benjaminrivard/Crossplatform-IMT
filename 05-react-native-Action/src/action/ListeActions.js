import React from "react";
import { View, Text } from "react-native";
import UneAction from "./UneAction";

const ListeActions = ({ actions, terminerAction, supprimerAction }) => {
  const actionRendered = actions.map(action => {
    return (
      <UneAction
        key={`ID_ACTION_${action.nom}_STATE_${action.terminer}`}
        action={action}
        supprimerAction={supprimerAction}
        terminerAction={terminerAction}
      ></UneAction>
    );
  });
  return <View>{actionRendered}</View>;
};

export default ListeActions;
