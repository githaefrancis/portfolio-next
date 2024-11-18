FROM node:20-alpine AS builder

WORKDIR /app
COPY package.json package.json ./
RUN npm install

COPY . .
RUN npm run build

# Serve the app 
FROM node:20-alpine 

WORKDIR /app
COPY --from=builder /app ./


EXPOSE 3001
CMD ["npm", "run", "start"]