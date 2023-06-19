# PruebaTecnicaBsale

¡Bienvenido al repositorio de la Prueba Técnica Bsale! En este proyecto encontrarás una aplicación desarrollada en Node.js con el objetivo de cumplir con los requerimientos de la prueba técnica.




## Instalación

Para comenzar, asegúrate de tener Node.js instalado en tu máquina. Luego, sigue estos pasos:

1. Clona este repositorio en tu máquina local.
2. Abre una terminal en el directorio raíz del proyecto.
3. Ejecuta el siguiente comando para instalar todas las dependencias necesarias:

   ```bash
   npm install

## Estructura del proyecto

El proyecto se organiza en varias carpetas, cada una con un propósito específico:

- `utils`: Contiene archivos con utilidades y funciones compartidas utilizadas en diferentes partes del proyecto.
- `routes`: Contiene los archivos de configuración y manejo de las rutas de la aplicación.
- `functionsUnique`: Contiene archivos con funciones únicas o personalizadas utilizadas en el proyecto.
- `controller`: Contiene archivos con la lógica del controlador, que se encarga de procesar las solicitudes entrantes y generar las respuestas correspondientes.

Cada archivo dentro de estas carpetas está debidamente comentado y explicado para facilitar la comprensión del código.

Además, este proyecto cuenta con un manejador de errores personalizado que captura y gestiona los errores en `src/routes/routes.js`. También se utiliza una clase personalizada en `src/utils/trycatchErr.js` para lanzar errores personalizados de manera más controlada.

## Contribución

Si quieren contribuir a este proyecto,  estoy abierto a mejoras, correcciones de errores y nuevas funcionalidades.


## Ejecución

Una vez que hayas instalado todas las dependencias y configurado el proyecto, estás listo/a para ejecutarlo. Utiliza el siguiente comando para iniciar el proyecto:

```bash
npm start

