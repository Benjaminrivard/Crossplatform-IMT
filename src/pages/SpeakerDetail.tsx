import { Storage } from "@capacitor/core";
import {
  IonApp,
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonRouterLink,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import React from "react";
import { withRouter } from "react-router";
import { Speaker } from "../model/Speaker.model";

const nameStyle = {
  textAlign: "center",
  marginBottom: "30px"
} as React.CSSProperties;

class PresentateurDetailPage extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      list: {},
      sessions: {}
    };
  }

  async componentWillMount() {
    const result = await Storage.get({ key: "sessions" });
    this.setState({
      sessions: JSON.parse(result.value)
    });

    const raw = await Storage.get({ key: "speakers" });
    this.setState({
      speakers: JSON.parse(raw.value)
    });
  }

  renderImage() {
    let image;
    if (
      this.state.speakers[this.props.match.params.id] &&
      this.state.speakers[this.props.match.params.id].photoUrl
    ) {
      image = (
        <img
          src={`https://devfest2018.gdgnantes.com/${this.state.speakers[this.props.match.params.id].photoUrl}`}
          alt="speaker"
        ></img>
      );
    }

    return image;
  }

  renderSessions(speakerId: number) {
    let pres = [];

    Object.keys(this.state.sessions).map(id => {
      if (
        this.state.sessions &&
        this.state.sessions[id].speakers &&
        this.state.sessions[id].speakers.includes(speakerId)
      ) {
        pres.push(
          <IonRouterLink
            key={id}
            routerDirection="forward"
            href={`/sessions/${id}`}
          >
            {this.state.sessions[id].title}
          </IonRouterLink>
        );
      }
    });
    return pres;
  }

  renderSpeaker() {
    if (
      this.state.speakers &&
      this.state.speakers[this.props.match.params.id] &&
      this.state.speakers[this.props.match.params.id].id
    ) {
      return (
        <div>
          <h4 style={nameStyle}>
            {this.state.speakers[this.props.match.params.id].name}
          </h4>
          {this.renderImage()}
          <h5>Biographie</h5>
          <p>{this.state.speakers[this.props.match.params.id].bio}</p>
          <h5>Presentations</h5>
          {this.renderSessions(
            this.state.speakers[this.props.match.params.id].id
          )}
        </div>
      );
    }
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
          {this.renderSpeaker()}
        </IonContent>
      </IonApp>
    );
  }
}

export default withRouter(PresentateurDetailPage);
