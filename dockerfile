# Stage 1: Build the React app
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the project and build
COPY . .
RUN npm run build

# Stage 2: Serve the built app using a lightweight web server
FROM node:18-alpine

# Install serve to run the static site
RUN npm install -g serve

# Set working directory in the new container
WORKDIR /app

# Copy the built app from the builder stage
COPY --from=builder /app/dist ./dist

# Expose the port the app runs on
EXPOSE 3000

# Serve the app
CMD ["serve", "-s", "dist", "-l", "0.0.0.0:3000"]
