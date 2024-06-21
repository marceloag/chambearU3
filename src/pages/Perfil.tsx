import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonImg, IonIcon, IonButton, IonGrid, IonCol, IonText, IonChip } from '@ionic/react';
import './Perfil.css';
import { background } from 'native-base/lib/typescript/theme/styled-system';
import { notificationsOutline } from 'ionicons/icons';
import { IonProgressBar } from '@ionic/react';
import { useState } from 'react';

const Splash: React.FC = () => {

  const [progress, setProgress] = useState(95);

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
          <div className='ficha'>
            <div className='avatar'>
              <IonImg src='/avatar.png' />
            </div>
            <div className='datos'>
              <IonText color="dark">
                <h2 className='h2'>Benjamin Fieldhouse</h2>
                  <small className="small">Administracion de Emrpesas</small>
                  <small className="small">2do Semestre</small>
                <h6 className='h6'>ChambaScore 95%</h6>
                <IonProgressBar value={.95}></IonProgressBar>
              </IonText>
            </div>
          </div>

          <div className='disponibilidad'>
            <h2>Disponible para:</h2>
            <div className='tags'>
                <IonChip color="secondary" className='chip'>Chambas</IonChip>
                <IonChip color="secondary" className='chip'>Part Time</IonChip>
                <IonChip color="success" className='chip'>Práctica</IonChip>
                <IonChip color="tertiary" className='chip'>Full Time Diurno</IonChip>
                
                <IonChip color="warning" className='chip'>Proyectos</IonChip>
            </div>
          </div>
        </IonGrid>
        
      </IonContent>
    </IonPage>
  );
};

export default Splash;
