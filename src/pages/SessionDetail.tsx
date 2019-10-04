import { withRouter } from "react-router-dom";
import React from "react";
import {
  IonBackButton,
  IonHeader,
  IonToolbar,
  IonButton,
  IonTitle,
  IonContent,
  IonIcon,
  IonApp
} from "@ionic/react";
import { render } from "react-dom";
import { Session } from "../model/Sessions.model";

const sessions = require("../storage/sessions.json");

class SessionDetailPage extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.session = sessions[this.sessionID];
  }

  sessionID = this.props.match.params.id;
  session: Session;

  renderImage() {
    let image;
    if (this.session.image) {
      image = <img src={`/assets/${this.session.image}`}></img>;
    }

    return image;
  }

  render() {
    return (
      <IonApp>
        <IonHeader translucent>
          <IonToolbar>
            <IonButton slot="start">
              <IonBackButton defaultHref="/sessions"></IonBackButton>
            </IonButton>
            <IonTitle>{this.session.title}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen class="ion-padding">
          {this.renderImage()}
          <p>{this.session.description}</p>
        </IonContent>
      </IonApp>
    );
  }
}

export default SessionDetailPage;
