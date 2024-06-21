import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonImg, IonIcon, IonButton, IonGrid, IonCol, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonInput  } from '@ionic/react';
import './Splash.css';

import { background } from 'native-base/lib/typescript/theme/styled-system';
import { notificationsOutline } from 'ionicons/icons';
import { personCircleOutline } from 'ionicons/icons';

const Splash: React.FC = () => {

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
          <IonCol>
            <IonImg src='/logo.png' className='logo' />
            <IonCol>
              <IonCard style={{textAlign: 'left', backgroundColor: "#f3f3f3", color: "#333"}}>
                <IonCardHeader >
                  <IonCardTitle style={{color: "#333"}}><IonIcon icon={personCircleOutline}></IonIcon> Inicio de Sesión</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonInput label="Usuario"></IonInput>
                  <IonInput label="Password" type="password" value="password"></IonInput>
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonButton size="small" color="secondary">Iniciar Sesión</IonButton>
              <IonButton size="small" color="secondary" fill="clear">Registrarse</IonButton>
            </IonCol>
          </IonCol>
        </IonGrid>
        
      </IonContent>
    </IonPage>
  );
};

export default Splash;
