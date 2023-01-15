# fdj-exercise

## Context

Développement Frontend + Backend pour un exercice de Francaise des jeux

1. Champs de recherche permettant de rechercher une league
2. Proposer de l’auto-complétion dans le champ de recherche
3. Affichage de la liste des équipes
4. L’utilisateur sélectionne une équipe à affichage de la liste des joueurs
    - Nom / Prénom
    - Position
    - Date de naissance
    - Montant du transfert
    - Image centrée sur visage (à défaut ; thumbnail du joueur)
5. Gestion des erreurs

## Techno

![Image](https://github.com/IamRenZHOU/fdj-exercise/blob/main/resources/architecture.drawio.png?raw=true)

* Front Angular 15
* Back NestJS
* Node.js 18
* MongoDB/Cluster
* Docker/Docker-compose
* Load Balancing ...
* Test performance : JMeter
* PM2 Process manager

## Demo
![Image](https://github.com/IamRenZHOU/fdj-exercise/blob/main/resources/Team%20List%20View.png?raw=true)
![Image](https://github.com/IamRenZHOU/fdj-exercise/blob/main/resources/Team%20View.png?raw=true)
![Image](https://github.com/IamRenZHOU/fdj-exercise/blob/main/resources/Autocomplete.png?raw=true)
![Image](https://github.com/IamRenZHOU/fdj-exercise/blob/main/resources/Without%20Team.png?raw=true)

## Roadmap

Documentation : DAT

(MVP)
- [x] Front + Back + BDD pour affichage de la liste
- [x] Affichage de joueurs

(SP2)
- [x] Recherche par rapport à une league
- [x] Gestion de l'erreur
- [x] Swagger

(SP3)
- [x] Auto complétion
- [ ] PM2 mode production
- [ ] Lazy loading module
- [ ] Lazy loading without populating players and teams

(SP4)
- [ ] Monitoring Status des applications

(Options)
- [ ] Script d importe avec des fake données pour créer de volume
- [x] Clustering de la base de données
- [ ] Load balancing 
- [ ] Chaos Monkey tests

## Remind

### import mongo data
```shell
docker exec -it fdj-exercise-mongo-1 bash
mongorestore --uri=mongodb://localhost -u root -p example --authenticationDatabase=admin --nsInclude=fjd.players /data/players.bson
mongorestore --uri=mongodb://localhost -u root -p example --authenticationDatabase=admin --nsInclude=fjd.teams /data/teams.bson
mongorestore --uri=mongodb://localhost -u root -p example --authenticationDatabase=admin --nsInclude=fjd.leagues /data/leagues.bson

```

### Start project
```
cd back && npm start
cd front && npm run start:dev
```

### Mongo cluster
https://github.com/minhhungit/mongodb-cluster-docker-compose
