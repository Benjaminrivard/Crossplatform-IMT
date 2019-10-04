import { Storage } from "@capacitor/core";
import {
  IonApp,
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonRouterLink,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonToggle
} from "@ionic/react";
import React from "react";
import { withRouter } from "react-router-dom";

const nameStyle = {
  textAlign: "center",
  marginBottom: "30px",
  fontWeight: "bold"
} as React.CSSProperties;

const imgStyle = {
  borderRadius: "50%",
  padding: "1rem 3rem"
} as React.CSSProperties;

const titleStyle = {
  textAlign: "center",
  fontWeight: "bold"
} as React.CSSProperties;

class PresentateurDetailPage extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      list: {},
      sessions: {}
    };
  }

  async componentDidMount() {
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
          style={imgStyle}
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
            <IonCard>
              <IonCardHeader>
                <IonCardSubtitle>
                  {this.state.sessions[id].title}
                </IonCardSubtitle>
              </IonCardHeader>
            </IonCard>
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
          <div className="inline-flex">
            Ajouter à la liste de contact <IonToggle />
          </div>

          {this.renderImage()}
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Biographie</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              {this.state.speakers[this.props.match.params.id].bio}
            </IonCardContent>
          </IonCard>
          <h2 style={titleStyle}>Presentations</h2>
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
