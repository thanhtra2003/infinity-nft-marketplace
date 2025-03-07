# Use official Node.js image as base
FROM node:18 as build-stage

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Build the Vue.js application
RUN npm run build

# Set up a minimal Node.js server to serve the built files
FROM node:18 as production-stage

WORKDIR /app

# Copy built files from the previous stage
COPY --from=build-stage /app/dist /app/dist

# Install a simple HTTP server
RUN npm install -g serve

# Expose port 5678
EXPOSE 5678

# Start the server
CMD ["serve", "-s", "dist", "-l", "5678"]
