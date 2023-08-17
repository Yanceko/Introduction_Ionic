import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonImg, IonText, IonButton } from '@ionic/react';

const About: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>About Me</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent className="ion-padding">
      <IonImg src="profile.jpg" alt="Profile Image" />
      <IonText>
        <h2>Chadric Nathan</h2>
        <p>Algorithm Alchemists</p>
        <p>An aspiring software developer looking to make it big in the Tech world.</p>
      </IonText>
      <IonButton routerLink="/">Go Home</IonButton>
    </IonContent>
  </IonPage>
);

export default About;
