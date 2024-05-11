import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonImg } from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Page.css';
import { background } from 'native-base/lib/typescript/theme/styled-system';

const Page: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  return (
    <IonPage>
      <IonHeader className='head'>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle></IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className='content'>
      </IonContent>
    </IonPage>
  );
};

export default Page;
