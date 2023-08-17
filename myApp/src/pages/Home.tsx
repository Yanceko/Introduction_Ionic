import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Link, Redirect, Route } from 'react-router-dom';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ionic Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        The world is your oyster.
        <p>
          If you get lost, the{' '}
          <a target="_blank" rel="noopener" href="https://ionicframework.com/docs/">
            docs
          </a>{' '}
          will be your guide.
        </p>
        <a href="/about">Go to About Page</a>
        <br></br>
        <a href="/products">Go to Products Page</a>
      </IonContent>
    </IonPage>
  );
};

export default Home;
