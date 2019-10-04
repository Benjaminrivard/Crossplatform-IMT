import { Storage } from "@capacitor/core";
import {
  IonApp,
  IonAvatar,
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonRouterLink,
  IonTitle,
  IonToolbar,
  IonLabel,
  IonCard
} from "@ionic/react";
import React from "react";
import { Speaker } from "../model/Speaker.model";
import { withRouter } from "react-router-dom";

const divStyle = {
  padding: "1rem"
} as React.CSSProperties;

const imgStyle = {
  borderRadius: "50%",
  height: "70px",
  width: "auto",
  margin: "1rem 1rem"
} as React.CSSProperties;

const speakerDivStyle = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "1rem 0"
} as React.CSSProperties;

const paragraphStyle = {
  color: "#999999"
} as React.CSSProperties;

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

  async componentDidMount() {
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
      return <h2>{this.state.list[this.sessionID].title}</h2>;
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
          style={imgStyle}
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
      return <p style={paragraphStyle}>{this.state.list[this.sessionID].description}</p>;
    }
  }

  renderSpeakers() {
    let element = [];
    if (
      this.state.list[this.sessionID] &&
      this.state.list[this.sessionID].speakers
    ) {
      element.push(<h3>Presentateurs : </h3>)
      this.state.list[this.sessionID].speakers.forEach(id => {
        const speaker: Speaker = this.state.speakers[id];
        if (speaker) {
          element.push(
            <IonRouterLink
              routerDirection="forward"
              href={`/speakers/${speaker.id}`}
              key={speaker.id}
            >
              <IonCard key={`speaker_${speaker.id}`}>
                <div style={speakerDivStyle}>
                  {this.renderSpeakerImage(speaker)}
                  <IonLabel>{speaker.name}</IonLabel>
                </div>
              </IonCard>
            </IonRouterLink>
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
          {this.renderImage()}
          <div style={divStyle}>
            {this.renderTitle()}
            {this.renderDescription()}
            {this.renderSpeakers()}
            <br/>
            <IonButton
              routerDirection="forward"
              expand="block"
              href={`/sessions/${this.sessionID}/note`}
            >
              Mes Notes
            </IonButton>
          </div>
        </IonContent>
      </IonApp>
    );
  }
}

export default withRouter(SessionDetailPage);
