import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonImg, IonIcon, IonGrid, IonText, IonList, IonItem, IonCard, IonCardContent, IonButton } from '@ionic/react';
import './Splash.css';
import { background } from 'native-base/lib/typescript/theme/styled-system';
import { globeOutline, timeOutline, notificationsOutline } from 'ionicons/icons';

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
        <IonGrid className='content' >
          <IonText color="dark" >
            <h1 className='h1'>Chambas</h1>
          </IonText>
          {/*  */}
            <IonList style={{ backgroundColor: "transparent" }}>
                  {/*  */}
                  <IonCard style={{ backgroundColor: "#f3f3f3", padding: '0px', borderRadius: '15px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
                    <div style={{display: "flex", flexDirection : "row", gap: 3}}>
                      <div style={{width:'36%'}}>
                        <IonImg src='/oviedo.png' className='logo-s' style={{width:'100%', height:"100%"}}/>
                      </div>
                      <div style={{flex: 1}}><IonCardContent style={{ padding: '10px 5px', textAlign: "left" }}>
                        
                        <div style={{display: "flex", flexDirection:"row", justifyContent: "space-between"}}>
                          <h2 style={{ margin: '0', fontSize: '1em' }}>Ayudante Digitación</h2>
                          <p style={{ color: '#888', margin: '0', fontSize: '.7em' }}>05/07/2023</p>
                        </div>
                        
                        <p style={{ color: '#555', fontSize: ".7em" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum dolor massa, eget fringilla.</p>
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                          <IonButton size="small" style={{ '--background': '#00cc66', '--border-radius': '10px', '--font-size':'.3em' }}>
                            Postular
                          </IonButton>
                          <div style={{ display: 'flex', alignItems: 'center', marginTop: '5px', color: '#555' }}>
                            <IonIcon icon={timeOutline} style={{ marginRight: '5px' }} />
                            <span>8 hrs.</span>
                          </div>
                        </div>
                        
                      </IonCardContent></div>
                    </div>

                  </IonCard>
                  {/*  */}
                  <IonCard style={{ backgroundColor: "#f3f3f3", padding: '0px', borderRadius: '15px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
                    <div style={{display: "flex", flexDirection : "row", gap: 3}}>
                      <div style={{width:'36%'}}>
                        <IonImg src='/oviedo.png' className='logo-s' style={{width:'100%'}}/>
                      </div>
                      <div style={{flex: 1}}><IonCardContent style={{ padding: '10px 5px', textAlign: "left" }}>
                        
                        <div style={{display: "flex", flexDirection:"row", justifyContent: "space-between"}}>
                          <h2 style={{ margin: '0', fontSize: '1em' }}>Ayudante Digitación</h2>
                          <p style={{ color: '#888', margin: '0', fontSize: '.7em' }}>05/07/2023</p>
                        </div>
                        
                        <p style={{ color: '#555', fontSize: ".7em" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum dolor massa, eget fringilla.</p>
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                          <IonButton size="small" style={{ '--background': '#00cc66', '--border-radius': '10px', '--font-size':'.3em' }}>
                            Postular
                          </IonButton>
                          <div style={{ display: 'flex', alignItems: 'center', marginTop: '5px', color: '#555' }}>
                            <IonIcon icon={timeOutline} style={{ marginRight: '5px' }} />
                            <span>8 hrs.</span>
                          </div>
                        </div>
                        
                      </IonCardContent></div>
                    </div>

                  </IonCard>
                  <IonCard style={{ backgroundColor: "#f3f3f3", padding: '0px', borderRadius: '15px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
                    <div style={{display: "flex", flexDirection : "row", gap: 3}}>
                      <div style={{width:'36%'}}>
                        <IonImg src='/oviedo.png' className='logo-s' style={{width:'100%'}}/>
                      </div>
                      <div style={{flex: 1}}><IonCardContent style={{ padding: '10px 5px', textAlign: "left" }}>
                        
                        <div style={{display: "flex", flexDirection:"row", justifyContent: "space-between"}}>
                          <h2 style={{ margin: '0', fontSize: '1em' }}>Ayudante Digitación</h2>
                          <p style={{ color: '#888', margin: '0', fontSize: '.7em' }}>05/07/2023</p>
                        </div>
                        
                        <p style={{ color: '#555', fontSize: ".7em" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum dolor massa, eget fringilla.</p>
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                          <IonButton size="small" style={{ '--background': '#00cc66', '--border-radius': '10px', '--font-size':'.3em' }}>
                            Postular
                          </IonButton>
                          <div style={{ display: 'flex', alignItems: 'center', marginTop: '5px', color: '#555' }}>
                            <IonIcon icon={timeOutline} style={{ marginRight: '5px' }} />
                            <span>8 hrs.</span>
                          </div>
                        </div>
                        
                      </IonCardContent></div>
                    </div>

                  </IonCard>
            </IonList>
            {/*  */}
        </IonGrid>
        
      </IonContent>
    </IonPage>
  );
};

export default Chambas;
