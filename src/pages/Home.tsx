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
        <IonCard className="welcome-card">
          <div id="wrapper">
            <img src="/assets/images/poulpitude.png" alt="" />
          </div>

          <IonCardHeader>
            <IonCardSubtitle></IonCardSubtitle>
            <IonCardTitle>Conference</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>
              {new Date().toLocaleDateString()} -{" "}
              {new Date("December 17, 2019 18:30:00").toLocaleDateString()}
            </p>
          </IonCardContent>
        </IonCard>
        <IonGrid>
          
        <IonButton
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
          color="light"
          expand="block"
          fill="solid">
            Voir les présentateurs
          </IonButton>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
