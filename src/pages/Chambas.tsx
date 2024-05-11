import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonImg, IonIcon, IonButton, IonGrid, IonCol, IonText } from '@ionic/react';
import './Splash.css';
import { background } from 'native-base/lib/typescript/theme/styled-system';
import { notificationsOutline } from 'ionicons/icons';

const Chambas: React.FC = () => {

  return (
    <IonPage>
      <IonHeader className='head'>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>
            <IonImg src='/logo.png' className='logo-s' />
          </IonTitle>
          <IonButtons slot="end">
            <IonIcon icon={notificationsOutline}/>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen  style={{ backgroundColor: "#f3f3f3" }}>
        <IonGrid className='content'>
          <IonText color="dark" >
            <h1 className='h1'>Chambas</h1>
          </IonText>
        </IonGrid>
        
      </IonContent>
    </IonPage>
  );
};

export default Chambas;
