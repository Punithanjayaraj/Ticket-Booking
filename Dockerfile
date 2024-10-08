# Stage 1: Build the Angular app
FROM node:18-alpine AS build
 
# Set the working directory inside the container
WORKDIR /app
 
# Copy package.json and package-lock.json
COPY package*.json ./
 
# Install dependencies
RUN npm install
 
# Copy the entire Angular project to the working directory
COPY . .
 
# Build the Angular application in production mode
RUN npm run build --prod
 
# Stage 2: Serve the Angular app using Nginx
FROM nginx:alpine
 
# Copy the built Angular app from Stage 1
COPY --from=build /app/dist/ticket-booking /usr/share/nginx/html
 
# Copy custom Nginx configuration file, if needed
COPY nginx.conf /etc/nginx/nginx.conf
 
# Expose port 80 to the outside world
EXPOSE 80
 
# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]