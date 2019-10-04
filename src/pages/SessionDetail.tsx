import {
  IonApp,
  IonBackButton,
  IonButton,
  IonContent,
  IonHeader,
  IonImg,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import React from "react";
import { Session } from "../model/Sessions.model";
import { Speaker } from "../model/Speaker.model";

const sessions = require("../storage/sessions.json");
const pres = require("../storage/speakers.json");

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
      image = <img src={`/assets/${this.session.image}`} alt="session"></img>;
    }

    return image;
  }

  renderSpeakerImage(id: number) {
    let image;
    const speaker: Speaker = pres[id];
    if (speaker.photoUrl) {
      image = <img src={`/assets/${speaker.photoUrl}`} alt="speaker"></img>;
    }

    return image;
  }

  renderSpeakers() {
    let element;
    if (this.session && this.session.speakers) {
      this.session.speakers.map(speaker => {
        element += <span></span>;
      });
    }

    return element;
  }

  render() {
    return (
      <IonApp>
        <IonHeader translucent>
          <IonToolbar>
            <IonButton slot="start">
              <IonBackButton
                icon="arrow-round-back"
                type="button"
                defaultHref="/sessions"
              ></IonBackButton>
            </IonButton>
            <IonTitle>Session</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen class="ion-padding">
          <IonTitle>{this.session.title}</IonTitle>
          {this.renderImage()}
          <p>{this.session.description}</p>
          {this.renderSpeakers()}
        </IonContent>
      </IonApp>
    );
  }
}

export default SessionDetailPage;
