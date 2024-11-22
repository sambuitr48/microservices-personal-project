# Usa una imagen base de Node.js
FROM node:20.14.0

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia el package.json y el package-lock.json (si existe)
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia todo el código fuente en el contenedor
COPY . .

# Expone el puerto en el que corre el microservicio
EXPOSE 3001

# Comando para ejecutar el servicio
CMD ["npm", "start"]
