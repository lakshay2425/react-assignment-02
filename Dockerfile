FROM node:24-alpine AS builder
WORKDIR /app

# Enable Corepack to automatically prepare the default pnpm version
RUN corepack enable && corepack prepare pnpm@latest --activate

COPY package.json pnpm-lock.yaml ./

# Install ALL dependencies safely (frozen-lockfile ensures no changes to lockfile)
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm run build


FROM node:24-alpine AS final
WORKDIR /app
RUN npm install -g serve
RUN addgroup -S appgroup && adduser -S -G appgroup -h /home/appuser appuser 
COPY --from=builder /app/dist ./dist
RUN chown -R appuser:appgroup /app
USER appuser
EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]
