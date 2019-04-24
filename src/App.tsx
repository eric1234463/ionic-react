import React, { Component } from 'react';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import {
  IonApp,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
} from '@ionic/react';
import MemberCard from './MemberCard';

class App extends Component {
  render() {
    return (
      <IonApp>
        <IonContent>
          <IonCard>
            <IonCardHeader>
              <IonCardSubtitle>Welcome to Ionic</IonCardSubtitle>
              <IonCardTitle>Running on React</IonCardTitle>
              <IonCard>
                <IonCardHeader>Card Heading</IonCardHeader>
                <IonCardContent>This is some card content.</IonCardContent>
              </IonCard>
              <MemberCard />
            </IonCardHeader>
          </IonCard>
        </IonContent>
      </IonApp>
    );
  }
}

export default App;
