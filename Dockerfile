# Use a lightweight Python 3.10 base image
FROM node:14-alpine

#set the working diretory
WORKDIR /app

# copy all files to current dir
COPY . .