FROM nginx:1.23.3-alpine as build

LABEL name="mfe-app-v" \
      description="Micro-Frontend application using Vuejs, module federation and Single-SPA" \
      eu.mia-platform.url="https://www.mia-platform.eu" \
      eu.mia-platform.version="0.1.0"

COPY nginx /etc/nginx

RUN touch ./off \
  && chmod o+rw ./off \
  && echo "mfe-app-v: $COMMIT_SHA" >> /etc/nginx/commit.sha

WORKDIR /usr/static

COPY ./dist .

USER nginx
