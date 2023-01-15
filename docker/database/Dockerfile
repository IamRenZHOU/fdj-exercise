FROM mongo

RUN useradd -ms /bin/bash mongod

COPY secrete/mongo.keyfile /mongo.keyfile
RUN chown mongod:mongod /mongo.keyfile
RUN chown -R mongod:mongod /data

USER mongod

