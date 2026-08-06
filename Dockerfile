# ────────────────────────────────────────────────
# Stage 1 — Build
# ────────────────────────────────────────────────
FROM node:22-alpine AS builder

WORKDIR /app

# Install dependencies first (leverages layer caching)
COPY package*.json ./
RUN npm ci

# Copy source and build
COPY . .
RUN npm run build

# ────────────────────────────────────────────────
# Stage 2 — Serve
# ────────────────────────────────────────────────
FROM nginx:1.27-alpine AS runner

# Remove default nginx config and set a custom one
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built assets from the builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port
EXPOSE 80

# Start nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
