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
  IonToolbar,
  IonRouterLink
} from "@ionic/react";
import React from "react";
import { withRouter, RouteComponentProps } from "react-router";
import { Storage } from "@capacitor/core";

type SpeakerListState = {
  list: {};
  elementsType: string;
};

const imgStyle = {
  borderRadius: "50%",
  height: "40px",
  margin: "0.5rem 1rem"
} as React.CSSProperties;


class SpeakerList extends React.Component<
  RouteComponentProps<{}>,
  SpeakerListState
> {
  constructor(props) {
    super(props);
    this.state = {
      list: {} = {},
      elementsType: "speakers"
    };
  }

  async componentWillMount() {
    const result = await Storage.get({ key: "speakers" });
    console.log(JSON.parse(result.value))
    this.setState({
      list: JSON.parse(result.value)
    });
  }

  renderListItem() {
    return (
      <IonList>
        {Object.keys(this.state.list).map(id => (
          <IonItem
            detail
            key={id}
            routerDirection="forward"
            href={`/${this.state.elementsType}/${id}`}
          >
             <img
              style={imgStyle}
              src={`https://devfest2018.gdgnantes.com/${this.state.list[id].photoUrl}`}
              alt="speaker"
            ></img>
            <IonLabel>
              <span>{this.state.list[id].name}</span>
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
            <IonTitle class="ion-text-uppercase">
              {this.state.elementsType}
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>{this.renderListItem()}</IonContent>
      </IonPage>
    );
  }
}

export default withRouter(SpeakerList);
