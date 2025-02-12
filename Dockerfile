# Use an official Node.js runtime as the base image
FROM node:22

# Set the working directory in the container to /app
WORKDIR /usr/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose port 8000 for the application
EXPOSE 8000

# Define the command to run the application
CMD [ "npm", "start" ]