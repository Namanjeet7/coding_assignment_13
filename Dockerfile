# Use the official Node.js image.
FROM node:20

# Set the working directory.
WORKDIR /Singh_Namanjeet_Coding_Assignment_13

# Copy package.json and package-lock.json (or yarn.lock).
COPY package*.json ./

# Install dependencies.
RUN npm install

# Copy the rest of the application code.
COPY . .

# Build Storybook.
RUN npm run build-storybook

# Install a simple server to serve the build.
RUN npm install -g serve

# Expose the port the app runs on.
EXPOSE 6006

# Command to serve the Storybook build.
CMD ["serve", "-s", "storybook-static", "-l", "6006"]
