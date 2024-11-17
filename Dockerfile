FROM node:18-alpine AS builder

WORKDIR /app
COPY package.json package.json ./
RUN npm install

COPY . .
RUN npm run build

# Serve the app 
FROM node:18-alpine 

WORKDIR /app
COPY --from=builder /app ./
RUN npm install --production

EXPOSE 3001
CMD ["npm", "start"]