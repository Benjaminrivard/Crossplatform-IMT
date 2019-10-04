import { Storage } from "@capacitor/core";
import {
  IonApp,
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonRouterLink,
  IonItem,
  IonAvatar
} from "@ionic/react";
import React from "react";
import { Session } from "../model/Sessions.model";
import { Speaker } from "../model/Speaker.model";

class SessionDetailPage extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      list: {},
      session: {},
      speakers: {}
    };
  }

  sessionID = this.props.match.params.id;

  async componentWillMount() {
    const result = await Storage.get({ key: "sessions" });
    this.setState({
      list: JSON.parse(result.value)
    });

    const speakers = await Storage.get({ key: "speakers" });
    this.setState({
      speakers: JSON.parse(speakers.value)
    });
  }

  renderTitle() {
    if (
      this.state.list &&
      this.state.list[this.sessionID] &&
      this.state.list[this.sessionID].title
    ) {
      return <IonTitle>{this.state.list[this.sessionID].title}</IonTitle>;
    }
  }

  renderImage() {
    if (
      this.state.list &&
      this.state.list[this.sessionID] &&
      this.state.list[this.sessionID].image
    ) {
      return (
        <img
          src={`https://devfest2018.gdgnantes.com/${this.state.list[this.sessionID].image}`}
          alt="session"
        ></img>
      );
    }
  }

  renderSpeakerImage(speaker: Speaker) {
    let image;
    if (speaker && speaker.photoUrl) {
      image = (
        <img
          src={`https://devfest2018.gdgnantes.com/${speaker.photoUrl}`}
          alt="speaker"
        />
      );
    }

    return image;
  }

  renderDescription() {
    if (
      this.state.list &&
      this.state.list[this.sessionID] &&
      this.state.list[this.sessionID].description
    ) {
      return <p>{this.state.list[this.sessionID].description}</p>;
    }
  }

  renderSpeakers() {
    let element = [];
    if (
      this.state.list[this.sessionID] &&
      this.state.list[this.sessionID].speakers
    ) {
      this.state.list[this.sessionID].speakers.forEach(id => {
        const speaker: Speaker = this.state.speakers[id];
        if (speaker) {
          element.push(
            <IonItem key={`speaker_${speaker.id}`}>
              <IonAvatar>{this.renderSpeakerImage(speaker)}</IonAvatar>
              <IonRouterLink
                routerDirection="forward"
                href={`/speakers/${speaker.id}`}
              >
                {speaker.name}
              </IonRouterLink>
            </IonItem>
          );
        }
      });
    }
    return element;
  }

  render() {
    return (
      <IonApp>
        <IonHeader translucent>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/sessions"></IonBackButton>
            </IonButtons>
            <IonTitle>Session</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          {this.renderTitle()}
          {this.renderImage()}
          {this.renderDescription()}
          {this.renderSpeakers()}
        </IonContent>
      </IonApp>
    );
  }
}

export default SessionDetailPage;
