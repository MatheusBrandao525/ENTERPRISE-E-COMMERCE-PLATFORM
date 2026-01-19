FROM node:18-alpine

WORKDIR /app

# Install dependencies first for caching
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Ensure permissions (optional but good for some environments)
# RUN chown -R node:node /app
# USER node 
# (Skipping user change to avoid permission headaches in simple demo)

EXPOSE 3000

# Explicitly run node to avoid npm signal swallowing
CMD ["node", "server.js"]
