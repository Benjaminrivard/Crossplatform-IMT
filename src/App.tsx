import { Plugins } from "@capacitor/core";
import { IonApp, IonRouterOutlet, IonSplitPane } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";
import "@ionic/react/css/display.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/float-elements.css";
/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/typography.css";
import { calendar, home, microphone } from "ionicons/icons";
import React from "react";
import { Redirect, Route } from "react-router-dom";
import Menu from "./components/Menu";
import { AppPage } from "./declarations";
import Home from "./pages/Home";
import List from "./pages/List";
import SessionDetail from "./pages/SessionDetail";
/* Theme variables */
import "./theme/variables.css";

const sessions = require("./storage/sessions.json");
const speakers = require("./storage/speakers.json");

const { Network, Storage, Toast } = Plugins;
const baseUrl = "https://devfest-nantes-2018-api.cleverapps.io/";

const appPages: AppPage[] = [
  {
    title: "Home",
    url: "/home",
    icon: home
  },
  {
    title: "Session",
    url: "/sessions",
    icon: calendar
  },
  {
    title: "Présentateurs",
    url: "",
    icon: microphone
  }
];

class App extends React.Component {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <IonApp>
        <IonReactRouter>
          <IonSplitPane contentId="main">
            <Menu appPages={appPages} />
            <IonRouterOutlet id="main">
              <Route path="/home" component={Home} exact={true} />
              <Route path="/sessions" component={List} exact={true} />
              <Route
                path="/sessions/:id"
                component={SessionDetail}
                exact={true}
              />
              <Route exact path="/" render={() => <Redirect to="/home" />} />
            </IonRouterOutlet>
          </IonSplitPane>
        </IonReactRouter>
      </IonApp>
    );
  }
}
const fetchStorage = async () => {
  await fetchData("sessions");
  await fetchData("speakers");
};

const setStorage = async () => {
  await Storage.set({
    key: "sessions",
    value: JSON.stringify(sessions)
  });

  await Storage.set({
    key: "speakers",
    value: JSON.stringify(speakers)
  });
};

const fetchData = async (key: string) => {
  fetch(baseUrl + key)
    .then(function(response) {
      return response.json();
    })
    .then(async function(json) {
      await Storage.set({
        key: key,
        value: JSON.stringify(json)
      });
    });
};

let handler = Network.addListener("networkStatusChange", status => {
  console.log("Network status changed", status);

  setTimeout(async () => {
    if (status.connected) {
      fetchStorage();
    } else {
      console.log("CONNECTION LOST");

      await Toast.show({
        text: "Connection lost!"
      });
    }
  }, 500);
});

Network.getStatus().then(result => {
  if (result.connected) {
    fetchStorage();
  } else {
    setStorage();
  }
});

export default App;
