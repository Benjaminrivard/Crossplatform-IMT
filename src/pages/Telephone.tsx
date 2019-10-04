import React from "react";
import {
    IonBackButton,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonApp,
    IonButtons
} from "@ionic/react";
import { Plugins } from '@capacitor/core';

const { Device } = Plugins;


class TelephonePage extends React.Component<any, any> {

    constructor(props) {
        super(props);
        this.state = {
            info: {}
        };
    }

    async componentWillMount() {
        const info = await Device.getInfo();
        this.setState({
            info
        });
    }

    render() {
        return (
            <IonApp>
                <IonHeader translucent>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonBackButton defaultHref="/"></IonBackButton>
                        </IonButtons>
                        <IonTitle>Telephone</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent fullscreen class="ion-padding">
                    <p>Platform: {this.state.info.platform}</p>
                    <p>Manufacturer: {this.state.info.manufacturer}</p>
                    <p>Model: {this.state.info.model}</p>
                    <p>OS Version: {this.state.info.osVersion}</p>
                </IonContent>
            </IonApp>
        );
    }
}

export default TelephonePage;
