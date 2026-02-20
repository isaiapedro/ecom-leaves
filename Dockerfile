# Step 1: Use a stable Node LTS (Long Term Support) image for reliability
FROM node:lts-alpine

# Step 2: Set the working directory to a standard root folder
WORKDIR /app

# Step 3: Copy ONLY the package files first (Docker Cache Optimization)
COPY package*.json ./

# Step 4: Install Angular CLI and your project dependencies
RUN npm install -g @angular/cli
RUN npm install --force

# Step 5: Copy the rest of your application code
# This step runs incredibly fast because npm install is already cached!
COPY . .

# Step 6: Expose the default Angular port to tell Docker we intend to use it
EXPOSE 4200

# Step 7: Start the server, binding to 0.0.0.0 so it accepts outside connections
CMD ["ng", "serve", "--host", "0.0.0.0"]