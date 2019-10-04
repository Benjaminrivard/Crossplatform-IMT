import { Plugins } from "@capacitor/core";
import {
  IonApp,
  IonBackButton,
  IonButton,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonTextarea,
  IonTitle,
  IonToolbar,
  IonButtons
} from "@ionic/react";
import React from "react";
import { withRouter } from "react-router-dom";

const { Storage } = Plugins;

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

  constructor(props) {
    super(props);

    this.state = {
      session: {},
      notes: [],
      note: {}
    };

    this.getNote();
  }

  async componentDidMount() {
    const result = await Storage.get({ key: "sessions" });
    this.setState({
      session: JSON.parse(result.value)[this.sessionID]
    });
  }

  getNote = async () => {
    const ret = await Storage.get({ key: "notes" });

    let notes = ret.value != null ? JSON.parse(ret.value.toString()) : [];
    let note = notes.find(note => note.session.toString() === this.sessionID);

    if (!note) {
      note = {
        description: "",
        session: +this.sessionID
      };
    }

    this.setState({ note, notes });
  };

  updateNote = evt => {
    let note = this.state.note;
    note.description = evt.target.value;

    this.setState({ note });
  };

  saveNote = async () => {
    let newNotes = this.state.notes.filter(
      note => note.session.toString() !== this.sessionID
    );
    newNotes.push(this.state.note);

    await Storage.set({
      key: "notes",
      value: JSON.stringify(newNotes)
    });
  };

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
        <IonContent fullscreen class="ion-padding">
          <p style={labelStyle}>Session :</p>
          <h3 style={titleStyle}>{this.state.session.title}</h3>
          <hr />
          <IonItem>
            <IonLabel position="floating">Note</IonLabel>
            <IonTextarea
              autoGrow={true}
              value={this.state.note.description}
              onIonChange={this.updateNote}
            ></IonTextarea>
          </IonItem>
          <br />
          <IonButton expand="block" onClick={this.saveNote}>
            Enregistrer
          </IonButton>
        </IonContent>
      </IonApp>
    );
  }
}

export default withRouter(SessionDetailPage);
