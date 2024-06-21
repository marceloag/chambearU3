import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonImg, IonIcon, IonButton, IonGrid, IonCol, IonText, IonCard, IonCardContent} from '@ionic/react';
import './Notificaciones.css';
import { background } from 'native-base/lib/typescript/theme/styled-system';
import { notificationsOutline } from 'ionicons/icons';

const Notificaciones: React.FC = () => {

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
            <h1 className='h1'>Tienes 3 notificaciones sin leer</h1>
          </IonText>
          <div className='notificaciones'>
            {/* MATCH */}
            <IonCard style={{ backgroundColor: "#69FFA5", padding: '.3em 0px', borderRadius: '15px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
              <div style={{display: "flex", flexDirection : "row", gap: 3, alignItems: "center"}}>
                  <div style={{width:'20%'}}>
                    <IonImg src='/celebration.png' className='logo-s' style={{width:'100%', padding:".4em"}}/>
                  </div>
                  <div style={{flex: 1}}>
                    <IonCardContent style={{ padding: '10px 5px', textAlign: "left" }}>
                      <div style={{display: "flex", flexDirection:"column", justifyContent: "space-between"}}>
                        <h2 style={{ margin: '0', fontSize: '1.2em', fontWeight: "bold", color:"#333" }}>Hiciste Match!</h2>
                        <small>Hace 20 minutos</small>
                      </div>
                      
                      <p style={{ color: '#555', fontSize: ".7em" }}>Tu postulación a la chamba Ayudante Digitación ha sido aceptada (...)</p>
                    
                    </IonCardContent>
                  </div>
              </div>
            </IonCard>
            {/* Fail */}
            <IonCard style={{ backgroundColor: "#f3f3f3", padding: '.3em 0px', borderRadius: '15px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
              <div style={{display: "flex", flexDirection : "row", gap: 3, alignItems: "center"}}>
                  <div style={{width:'20%'}}>
                    <IonImg src='/fail.png' className='logo-s' style={{width:'100%', padding:".4em"}}/>
                  </div>
                  <div style={{flex: 1}}>
                    <IonCardContent style={{ padding: '10px 5px', textAlign: "left" }}>
                      <div style={{display: "flex", flexDirection:"column", justifyContent: "space-between"}}>
                        <h2 style={{ margin: '0', fontSize: '1.2em', fontWeight: "bold" }}>Lo Sentimos ...</h2>
                        <small>Hace 20 minutos</small>
                      </div>
                      
                      <p style={{ color: '#555', fontSize: ".7em" }}>Tu postulación a la chamba Ayudante Digitación no ha sido aceptada (...)</p>
                    
                    </IonCardContent>
                  </div>
              </div>
            </IonCard>
            <IonCard style={{ backgroundColor: "#f3f3f3", padding: '.3em 0px', borderRadius: '15px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
              <div style={{display: "flex", flexDirection : "row", gap: 3, alignItems: "center"}}>
                  <div style={{width:'20%'}}>
                    <IonImg src='/fail.png' className='logo-s' style={{width:'100%', padding:".4em"}}/>
                  </div>
                  <div style={{flex: 1}}>
                    <IonCardContent style={{ padding: '10px 5px', textAlign: "left" }}>
                      <div style={{display: "flex", flexDirection:"column", justifyContent: "space-between"}}>
                        <h2 style={{ margin: '0', fontSize: '1.2em', fontWeight: "bold" }}>Lo Sentimos ...</h2>
                        <small>Hace 20 minutos</small>
                      </div>
                      
                      <p style={{ color: '#555', fontSize: ".7em" }}>Tu postulación a la chamba Ayudante Digitación no ha sido aceptada (...)</p>
                    
                    </IonCardContent>
                  </div>
              </div>
            </IonCard>
          </div>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Notificaciones;
