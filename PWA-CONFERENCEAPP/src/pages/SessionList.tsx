import { Storage } from "@capacitor/core";
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
import { RouteComponentProps, withRouter } from "react-router-dom";
type SesionListState = {
  list: {};
  elementsType: string;
};

class SessionList extends React.Component<
  RouteComponentProps<{}>,
  SesionListState
> {
  constructor(props) {
    super(props);
    this.state = {
      list: {},
      elementsType: "sessions"
    };
  }

  async componentDidMount() {
    const result = await Storage.get({ key: "sessions" });
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
            routerDirection="none"
            href={`/${this.state.elementsType}/${id}`}
          >
            <IonLabel>
              <span>{this.state.list[id].title}</span>
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

export default withRouter(SessionList);
