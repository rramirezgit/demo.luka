# Demo Luka

Demo de la pasarela de pago Luka

## Requisitos previos

- Node.js (versión 18.16.0 o superior)
- npm (versión 10.10.0 o superior)

## Instalación

```
npm install
```

## Ejecución en modo desarrollo

Para iniciar el servidor de desarrollo, ejecuta:

```
npm run dev
```

### Configuración adicional para desarrollo

Para un entorno de desarrollo completo, también necesitas levantar el API de Luka BlueSnapPayco y BluesnapPaycoJs.

Asegúrate de tener ambos servicios en ejecución junto con el servidor de desarrollo principal para un funcionamiento correcto de la pasarela de pago en modo desarrollo.

## Apuntar a calidad en local

Para apuntar a calidad en tu entorno local, sigue estos pasos:

1. Construye la aplicación:

   ```
   npm run build
   ```

2. Inicia el servidor en modo producción:
   ```
   npm run start
   ```

Este proceso compilará la aplicación y la ejecutará en un entorno que simula la configuración de calidad.
