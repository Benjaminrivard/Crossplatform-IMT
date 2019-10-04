import {
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import React from "react";
import { withRouter, RouteComponentProps } from "react-router";

const sessions = require("../storage/sessions.json");
type Props = RouteComponentProps<{}> & {
  dismissPopover: () => void;
};

class ListPage extends React.Component<Props> {
  constructor(props) {
    super(props);
  }

  renderListItem() {
    const items: any = sessions;

    return (
      <IonList>
        {Object.keys(items).map(id => (
          <IonItem key={id} button href={`/sessions/${id}`}>
            <IonLabel>
              <span>{items[id].title}</span>
            </IonLabel>
          </IonItem>
        ))}
      </IonList>
    );
  }

  render() {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>Sessions</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>{this.renderListItem()}</IonContent>
      </IonPage>
    );
  }
}

export default withRouter(ListPage);
