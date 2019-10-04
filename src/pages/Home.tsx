import {
  IonButtons,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonGrid,
  IonRow,
  IonCol,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import { book, build, colorFill, grid } from "ionicons/icons";
import React from "react";
import "./Home.css";
import ListPage from "./List";

import { Plugins } from '@capacitor/core';

const speakers = require('../storage/speakers.json');
const sessions = require('../storage/sessions.json');

const HomePage: React.FC = () => {
  const { Storage } = Plugins;

  // JSON "set" example
  async function setStorage() {
    await Storage.set({
      key: 'speakers',
      value: JSON.stringify(speakers)
    });

    await Storage.set({
      key: 'sessions',
      value: JSON.stringify(sessions)
    });
  }

  // JSON "get" example
  async function getAll(key: string) {
    const ret = await Storage.get({ key });
    console.log(ret)
    return ret != null ? JSON.parse(ret.toString()) : null;
  }

  // JSON "get" example
  async function getOne(key: string, id: string) {
    const ret = await getAll(key);
    return ret[id];
  }

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
            <img src="/assets/image/poulpitude.png" alt="" />
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
          <IonRow justify-content-around>
            <IonCol>
              <IonButton
                color="light"
                expand="block"
                fill="solid"
                routerDirection="forward"
                href="/sessions"
              >
                <IonIcon slot="start" name="md-calendar" />
                Voir les sessions
              </IonButton>
            </IonCol>
            <IonCol>
              <IonButton color="light" expand="block" fill="solid">
                <IonIcon slot="start" name="md-microphone" />
                Voir les présentateurs
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
