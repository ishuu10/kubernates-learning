FROM mcr.microsoft.com/playwright:v1.52.0-jammy

WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Install Playwright browsers
RUN npx playwright install

# Copy test files
COPY tests ./tests

# Copy playwright config
COPY playwright.config.js ./

# Set Docker environment variable for headless mode
ENV DOCKER=true

# Run the demo-todo-app test in headless mode
CMD ["npx", "playwright", "test", "tests-examples/demo-todo-app.spec.js"]