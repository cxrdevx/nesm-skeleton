FROM node:8
# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
#COPY /app/package*.json ./

#RUN npm install
RUN npm install -g nodemon
RUN npm install -g sequelize-cli 
# If you are building your code for production
# RUN npm install --only=production
# Bundle app source
EXPOSE 8080

ENTRYPOINT [ "npm", "start" ]