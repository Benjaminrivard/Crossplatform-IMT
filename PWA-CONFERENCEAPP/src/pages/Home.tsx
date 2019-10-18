import { Plugins } from "@capacitor/core";

import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonGrid,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar
} from "@ionic/react";

import React from "react";
import "./Home.css";

const divStyle = {
  padding: "1rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%"
} as React.CSSProperties;

const btnStyle = {
  width: "100%"
} as React.CSSProperties;

const HomePage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Conference</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div style={divStyle}>
          <div id="wrapper">
            <img src="/assets/images/poulpitude.png" alt="" />
          </div>

          <h1>DevFest Prog.</h1>

          <p>
            {new Date().toLocaleDateString()} -{" "}
            {new Date("December 17, 2019 18:30:00").toLocaleDateString()}
          </p>

          <br/>
          
          <IonButton
            style={btnStyle}
            color="light"
            expand="block"
            fill="solid"
            routerDirection="forward"
            href="/sessions"
          >
            Voir les sessions
          </IonButton>
          <br/>
          <IonButton
            style={btnStyle}
            color="light"
            expand="block"
            fill="solid">
              Voir les présentateurs
            </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
