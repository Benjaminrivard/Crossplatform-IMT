import React from "react";
import {
  IonBackButton,
  IonHeader,
  IonToolbar,
  IonButton,
  IonTitle,
  IonContent,
  IonIcon,
  IonApp,
  IonTextarea,
  IonItem,
  IonLabel
} from "@ionic/react";


import { Session } from "../model/Sessions.model";
import { Note } from "../model/Note.model";

import { Plugins } from "@capacitor/core";
const { Storage } = Plugins;


const sessions = require("../storage/sessions.json");

const labelStyle = {
  textAlign: "center",
  color: "#949494"
} as React.CSSProperties;

const titleStyle = {
  textAlign: "center",
  fontWeight: "bold"
} as React.CSSProperties;

class SessionDetailPage extends React.Component<any, any> {

  sessionID = this.props.match.params.id;
  session: Session;
  note: Note;

  constructor(props) {
    super(props);
    this.session = sessions[this.sessionID];
    this.getNote();    
  }

  async getNote() {
    const ret = await Storage.get({ key: 'notes' });
    const notes = ret.value != null ? JSON.parse(ret.value.toString()) : null;
    this.note = notes.find(note => note.session == this.sessionID);
  }

  saveNote = () => {
    console.log("saveNote")
  }

  render() {
    return (
      <IonApp>
        <IonHeader translucent>
          <IonToolbar>
            <IonButton slot="start">
              <IonBackButton defaultHref="/sessions"></IonBackButton>
            </IonButton>
            <IonTitle>Session</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen class="ion-padding">
          <p style={labelStyle}>Session :</p>
          <h3 style={titleStyle}>{this.session.title}</h3>
          <hr/>
          <IonItem>
            <IonLabel position="floating">Note</IonLabel>
            <IonTextarea autoGrow={true}></IonTextarea>
          </IonItem>
          <br/>
          <IonButton expand="block" onClick={this.saveNote}>Enregistrer</IonButton>
        </IonContent>
      </IonApp>
    );
  }
}

export default SessionDetailPage;
