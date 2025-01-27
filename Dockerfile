# Use the official Nginx image from Docker Hub
FROM nginx:latest

# Copy the custom nginx.conf file into the container
# COPY config/nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 8082
