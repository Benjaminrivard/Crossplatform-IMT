import React from "react";
import {
  IonBackButton,
  IonHeader,
  IonToolbar,
  IonButton,
  IonTitle,
  IonContent,
  IonApp,
  IonButtons,
  IonRouterLink
} from "@ionic/react";
import { Speaker } from "../model/Speaker.model";
import { Session } from "../model/Sessions.model";

const speakers = require("../storage/speakers.json");
const sessions = require("../storage/sessions.json");

const nameStyle = {
  textAlign: "center",
  marginBottom: "30px"
} as React.CSSProperties;

class PresentateurDetailPage extends React.Component<any, any> {
  speaker: Speaker;

  constructor(props) {
    super(props);
    this.speaker = speakers[this.props.match.params.id];
  }

  renderImage() {
    let image;
    if (this.speaker.photoUrl) {
      image = (
        <img
          src={`https://devfest2018.gdgnantes.com/${this.speaker.photoUrl}`}
          alt="speaker"
        ></img>
      );
    }

    return image;
  }

  renderSessions(speakerId: number) {
    let pres = [];
    Object.keys(sessions).map(id => {
      if (sessions[id].speakers && sessions[id].speakers.includes(speakerId)) {
        pres.push(
          <IonRouterLink
            key={id}
            routerDirection="forward"
            href={`/sessions/${id}`}
          >
            {sessions[id].title}
          </IonRouterLink>
        );
      }
    });
    return pres;
  }

  render() {
    return (
      <IonApp>
        <IonHeader translucent>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/speakers"></IonBackButton>
            </IonButtons>
            <IonTitle>Presentateur</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen class="ion-padding">
          <h4 style={nameStyle}>{this.speaker.name}</h4>
          {this.renderImage()}
          <h5>Biographie</h5>
          <p>{this.speaker.bio}</p>
          <h5>Presentations</h5>
          {this.renderSessions(this.speaker.id)}
        </IonContent>
      </IonApp>
    );
  }
}

export default PresentateurDetailPage;
