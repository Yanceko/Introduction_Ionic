import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonButton } from '@ionic/react';

const Products: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Products</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent className="ion-padding">
    <IonCard>
        <img src="/images/product1.jpg" alt="Product Image 1" />
        <IonCardHeader>
            <IonCardSubtitle>Electronics</IonCardSubtitle>
            <IonCardTitle>IPAD</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
            Price: $599.99
        </IonCardContent>
    </IonCard>
    <IonCard>
        <img src="/images/product2.jpg" alt="Product Image 2" />
        <IonCardHeader>
            <IonCardSubtitle>Electronics</IonCardSubtitle>
            <IonCardTitle>Iphone</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
            Price: $899.99
        </IonCardContent>
    </IonCard>
    <IonCard>
        <img src="/images/product3.jpg" alt="Product Image 3" />
        <IonCardHeader>
            <IonCardSubtitle>Electronics</IonCardSubtitle>
            <IonCardTitle>MACLaptop</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
            Price: $1199.99
        </IonCardContent>
    </IonCard>
    <IonCard>
        <img src="/images/product4.jpg" alt="Product Image 4" />
        <IonCardHeader>
            <IonCardSubtitle>Electronics</IonCardSubtitle>
            <IonCardTitle>Galaxy Phone </IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
            Price: $999.99
        </IonCardContent>
    </IonCard>
     
      <IonButton routerLink="/">Go Home</IonButton>
    </IonContent>
  </IonPage>
);

export default Products;
