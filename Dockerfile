# Use a lightweight Python 3.10 base image
FROM node:14-alpine

#create a user-group  and system-user
RUN addgroup app && adduser -S -G app app

#set user
USER app

#set the working diretory
WORKDIR /app

# copy all files to current dir
COPY . .

# install dependencies
RUN npm install

# set env vraibale 
ENV API_URL=http://api.myapp.com/


#document the port
EXPOSE 3000


#default command 
CMD npm start

