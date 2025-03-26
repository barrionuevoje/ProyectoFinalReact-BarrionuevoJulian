E-commerce con React y Firebase

Este es un proyecto de e-commerce desarrollado con React y Firebase. Permite listar productos, filtrar por categoría, ver detalles de un producto y agregar productos al carrito de compras.

📌 Tecnologías utilizadas

React.js

React Router

Firebase Firestore

React Bootstrap

Context API

🚀 Instalación y configuración

Clonar el repositorio:

git clone https://github.com/tu-usuario/tu-repositorio.git

Instalar dependencias:

npm install

Configurar Firebase:

Crear un proyecto en Firebase.

Obtener las credenciales de Firebase y agregarlas en un archivo .env:

REACT_APP_FIREBASE_API_KEY=tu_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=tu_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=tu_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=tu_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=tu_sender_id
REACT_APP_FIREBASE_APP_ID=tu_app_id

🛠️ Funcionalidades

ItemListContainer: Muestra una lista de productos con filtrado por categoría.

ItemDetailContainer: Muestra los detalles de un producto.

Carrito de compras: Permite agregar productos y gestionar el carrito.

Conexión con Firestore: Obtiene los productos desde Firebase Firestore.

📂 Estructura del proyecto

📦 src
 ┣ 📂 components
 ┃ ┣ 📜 ItemList.jsx
 ┃ ┣ 📜 ItemDetail.jsx
 ┃ ┣ 📜 ItemCount.jsx
 ┃ ┗ 📜 CartWidget.jsx
 ┣ 📂 context
 ┃ ┗ 📜 CartContext.js
 ┣ 📂 services
 ┃ ┗ 📜 firebaseDB.js
 ┣ 📜 App.js
 ┣ 📜 index.js

▶️ Ejecutar el proyecto

npm start

📌 Autor

Desarrollado por Julián
