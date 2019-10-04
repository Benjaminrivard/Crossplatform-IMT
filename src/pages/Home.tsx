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
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar
  } from '@ionic/react';
import { book, build, colorFill, grid } from 'ionicons/icons';
import React from 'react';
import './Home.css';

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
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard className="welcome-card">
          <img src="/assets/shapes.svg" alt=""/>
          <IonCardHeader>
            <IonCardSubtitle>Get Started</IonCardSubtitle>
            <IonCardTitle>Welcome to Ionic</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>
              Now that your app has been created, you'll want to start building out features and
              components. Check out some of the resources below for next steps.
            </p>
          </IonCardContent>
        </IonCard>

        <IonList lines="none">
          <IonListHeader>
            <IonLabel>Resources</IonLabel>
          </IonListHeader>
          <IonItem href="https://ionicframework.com/docs/" target="_blank">
            <IonIcon slot="start" color="medium" icon={book} />
            <IonLabel>Ionic Documentation</IonLabel>
          </IonItem>
          <IonItem href="https://ionicframework.com/docs/building/scaffolding" target="_blank">
            <IonIcon slot="start" color="medium" icon={build} />
            <IonLabel>Scaffold Out Your App</IonLabel>
          </IonItem>
          <IonItem href="https://ionicframework.com/docs/layout/structure" target="_blank">
            <IonIcon slot="start" color="medium" icon={grid} />
            <IonLabel>Change Your App Layout</IonLabel>
          </IonItem>
          <IonItem href="https://ionicframework.com/docs/theming/basics" target="_blank">
            <IonIcon slot="start" color="medium" icon={colorFill} />
            <IonLabel>Theme Your App</IonLabel>
          </IonItem>
          <IonButton color="danger" onClick={setStorage}>SET</IonButton>
          {/* <IonButton color="danger" onClick={() => getObject('sessions')}>GET SESSIONS</IonButton>
          <IonButton color="danger" onClick={() => getObject('speakers')}>GET SPEKERS</IonButton> */}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
