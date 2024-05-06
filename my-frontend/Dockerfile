FROM node as build
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 3000
RUN npm run build

#serve in nginx
FROM nginx
WORKDIR /usr/share/nginx/html
RUN rm -rf *
COPY --from=build /app/build .
EXPOSE 80
# we need to run this as a single application o we are doing daemon off
ENTRYPOINT ["nginx","-g","daemon off;"] 