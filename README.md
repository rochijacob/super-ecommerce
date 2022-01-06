# Installar las librerias

Instalar las librerias con `npm install`

## Connectar API key de Commerce.js

1. Crearse un perfil en [Commerce.js](https://commercejs.com/)
2. Crear un archivo `.env`
3. Conectar con tu API Key REACT_APP_CHEC_PUBLIC_KEY=COMMERCEJS_KEY (Usar Sandbox Public Key)
4. Crear un perfil en stripe
5. Conectar con tu API Key REACT_APP_STRIPE_PUBLIC_KEY=STRIPE_KEY

Falta la conexion efectiva de Commerce.js y Stripe, los pagos no se efectuan entonces no se genera la orden. Deberia probar con el test [Commerce.js](https://commercejs.com/docs/guides/test-gateway#example-implementation)
