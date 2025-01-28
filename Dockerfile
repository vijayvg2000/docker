# backend/Dockerfile

# Use the official Node.js image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy the rest of the application
COPY . .

# Expose port 3000 for the backend
EXPOSE 3000

# Start the backend server
CMD npm start serve
