# React Native skill-test by Pablo Larios

Aqui muestro mi app hecha en react-native utilizando componentes con hooks.
## Pasos para correr el proyecto

- Necesitaremos contar con el cli de React-Native, si no lo tienes te dejo la liga [react-native doc](https://reactnative.dev/docs/environment-setup)
- Ubicarnos dentro de la raíz del proyecto y ejecutar:
    - yarn
- Si queremos correr en ios( necesitamos una mac )
    -   En la raiz del proyecto ejecutar:
        - cd ios && pod install & cd ..
    -   Abrir la ultima versión de xcode
    -   Abrir nuestro testFemsa.xcworkspace ubicado en testFemsa/ios/
    -   Dentro de xcode ejecutar play y listo
- Si queremos correr en android
    -   Abrir la ultima version de Android Studio
    -   Abrir projecto android ( abrir la carpeta android que se encuentra en testFemsa/android) desde la opcion "Open an exist project
    -   Esperar a que termine el build.
    -   Ejecturar run app

## Como usar la app

- Home:
    -   Aquí veremos un listado de productos.
    -   Al hacer click en uno de ellos te llevara a la vista canje.
    -   Contamos con un boton de "Canjeados" con el cual podemos visualizar los productos que ya canjeamos puntos.
    -   Contamos con un boton de "Ganados" con el cual podemos visualizar los productos que nos dieron nuevos puntos.
- Vista canje:
    -   Nos aparece la informacion de nuestro producto.
    -   Nos indica los puntos ganados.
    -   Contamos con un boton que nos permite regresar

#### Saludos y gracias por su atencion