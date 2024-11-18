FROM node:20-alpine AS builder

WORKDIR /app
COPY package.json package.json ./
RUN npm install

COPY . .
RUN npm run build

# Serve the app 
FROM node:20-alpine AS runner

WORKDIR /app
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3001
CMD ["npm", "run", "start"]