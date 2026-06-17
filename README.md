# L.E.O. ---> Logísitica Express para Órdenes
Bot de WhatsApp que automatiza el proceso dirario de ordenar comida para un grupo de ofocina.

# ¿Qué es L.E.O?
L.E.O  es un chatbot de WhatsApp que elimina la coordinacióm manual a la hora de ordenar comida. En lugar de que alguien tenga que escribirle
al restauranete, recopilar órdenes del grupo y enviarlas manualmente, L.E.O lo hace hace todo automaticamente de Lunes a Viernes.


# ¿COMÓ FUNCIONA?
HORA                        ACCIÓN
-------------------------------------------------------------------------------------
12:00 p.m               L.E.O le escribe al restaurante pidiendo el menú del día
12:01 - 12:40 p.m       Espera la respuesta del restaurante
Al recibir el menú      L.E.O lo reenvía al grupo de oficina
12:01 - 13:30 p.m       Los miembos del grupo responden con su orden
13:40 p.m               L.E.O consolida todas las ordenes y las envía al restaurante
-------------------------------------------------------------------------------------

# STACK TECNOLOGÍCO
- Runtime: Node.js
- WhatsApp: whatsapp-web.js - Conexion vía QR, sin necesidad de API  oficial
- Tareas Programadas: node-cron
- Almacenamiento: JSON local (órdenes del día)

# ESTRUCTURA DEL PROYECTO

L.E.O/
├── src/
|   ├── bot.js              # Inicializacion del cliente de WhatsApp
|   ├── messageHandler.js   # Procesa los mensajes entrantes
|   ├── orderManager.js     # Gestiona las órdenes del día
|   ├── scheduler.js        # Tareas Programadas (cron jobs)
|   ├── stateManager.js     # Maneja el estado del bot
|
├── data/                   # Órdenes del día (ignorado por git)
├── config.js               # Configuración: números, horarios, mensajes
├── index.js                # Punto de entrada
├── package.json


# INSTALACION

# 1.  Clona el Repositorio
git clone https://github.com/akiles-mv/L.E.O.git
cd L.E.O

# 2.  Instala las dependencias 
npm install

# 3. Configura el entorno
cp config.example.js config.js

# 4. Corre el bot
node index.js

*** Al iniciar por primera vez, se mostrara el código QR en la terminal. Escanéalo con WhatsApp para conectar al bot. ***

# CONGFIGURACION

$Edita config.js con tus datos:

    module.exports = { 
        restaurante: {
            nombre: "Nombre del restaurante",
            telefono: "521XXXXXXXXXX@c.us",
        },
        grupo: {
            nombre: "Nombre del grupo de oficina",
        },
        horarios: {
            pedirMenu: "0 12 * * 1-5",       // 12:00 pm, lun-vie
            cierreOrdenes: "30 13 * * 1-5",  // 13:30 pm, lun-vie
            enviarOrden: "40 13 * * 1-5",   //  13:40 pm, lun-vie
        },
    }

