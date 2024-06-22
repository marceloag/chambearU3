# Trabajo Unidad 3 - Dispositivos Moviles

Este proyecto es parte de la Unidad 3 del curso de Dispositivos Móviles. El objetivo del proyecto es desarrollar el esqueleto de una aplicación móvil que cumpla con el mapa de navegación desarrollado en la unidad anterior.

![Mapa de Navegacion Chambear](https://github.com/marceloag/chambearU3/blob/main/public/mapa-nav.jpg?raw=true)

## Descripción del proyecto

El proyecto consiste en crear la cáscara de navegación para una aplicación móvil que permita a los usuarios buscar y aplicar a ofertas de trabajo. La aplicación final tiene las siguientes funcionalidades:

- Registro de usuarios: Los usuarios podrán crear una cuenta en la aplicación proporcionando su información personal.
- Búsqueda de ofertas de trabajo: Los usuarios podrán buscar ofertas de trabajo utilizando diferentes criterios como ubicación, categoría, salario, etc.
- Gestión de perfiles: Los usuarios podrán editar su perfil, agregar experiencia laboral, habilidades, etc.
- Notificaciones: Los usuarios recibirán notificaciones sobre nuevas ofertas de trabajo, actualizaciones en sus aplicaciones, etc.

## Dificultades Encontradas

Durante el desarrollo del proyecto la mayor dificultad fue la de enteder el sistema de routing. Elegí en particular React pues ya poseo cierta experiencia en el framework asi como en React Native.

Más información sobre el routing utilizado ( React Router ) se encuentra en la [Documentación de Ionic - React Navigation](https://ionicframework.com/docs/react/navigation)

## Tecnologías utilizadas

El proyecto se desarrollará utilizando las siguientes tecnologías:

- Ionic Framework
- React

## Instalación

El proyecto esta construido con Ionic 7.2.0 y React, una vez clonado el repositorio 

``` git clone git@github.com:marceloag/chambearU3.git ```

debe ejecutar


``` npm install ```


## Ejecución

Para ejecutar el proyecto se debe utilizar el cli de ionic desde terminal

``` cd chambear-U3 ```  
``` ionic serve ```

Si no tiene instalado el cli de ionic, puede instalarlo con el siguiente comando

``` npm install -g @ionic/cli ```

Para simular el viewport movil se debe abrir las developer tools en Chrome presionado

``` Ctrl+Shift+I ``` o ``` Cmd+Opt+I ``` en OSX.


# Trabajo Unidad 4 - Dispositivos Moviles

## Componentes Añadidos

En Ionic, un componente es una unidad modular y reutilizable de código que encapsula tanto la lógica como la presentación de una parte específica de la interfaz de usuario de una aplicación. Los componentes en Ionic se utilizan para construir y estructurar la interfaz de usuario de manera eficiente y coherente.

Se construyeron las vistas para el inicio de sesión y la sección "Chambas", en estas vistas se agregaron los componentes:

+ IonCard como contenedor de los input de ingreso de usuario
+ IonInput para los campos de texto de usuario y password
+ IonList para la lista de Chambas
+ IonButton para diferentes botones en ambas vistas

Cabe destacar que se incorporaron más elementos como parte de la diagramación pero se consideran estos como los mas relevantes para la funcionalidad de la aplicación

## Parte B

Para la parte B del desarrollo de la aplicación se agregaron componentes restantes para realizar el 50% restante de la aplicación, entre ellos:

+ IonProgressBar
+ IonChip 
+ IonCard y IonContent


Para finalizar se configuró capacitor para crear el build para android en un APK sin firmar disponible en la carpeta /APK y en el siguiente link [Descargar APK](https://www.dropbox.com/scl/fi/15rj6caqceat74ftvgtrc/Chambear.apk?rlkey=yz4wg96ck9b5rzmej9piej6mf&dl=0)