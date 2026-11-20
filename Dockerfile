# ==========================================
# Google Cloud Run Multi-Stage Dockerfile
# Peculiar College Doma School Management System
# ==========================================

# Stage 1: Build the client bundle and compiled server
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files and install all dependencies (including devDependencies)
COPY package*.json ./
RUN npm ci

# Copy application source code
COPY . .

# Build Vite React SPA and bundle Express TypeScript server into dist/
RUN npm run build

# Stage 2: Production runtime image (lightweight)
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=8080

# Install production runtime dependencies only
COPY package*.json ./
RUN npm ci --only=production && npm cache clean --force

# Copy compiled bundles and static assets from builder stage
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/public ./public
COPY --from=builder /app/.data-store.json ./.data-store.json

# Ensure non-root node user owns application directory
RUN chown -R node:node /app

# Run as non-root user for security hardening
USER node

# Expose standard Cloud Run port
EXPOSE 8080

# Launch compiled CommonJS backend
CMD ["node", "dist/server.cjs"]
