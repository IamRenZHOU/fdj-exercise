# fdj-exercise

## Context

Développement Front Paris Sportifs

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

* Front Angular 13
* Back NestJS
* Node.js 18
* MongoDB
* Docker/Docker-compose
* Load Balancing ...
* Test performance : JMeter
* PM2 Process manager

## Roadmap

Documentation : DAT

(MVP)
* Front + Back + BDD pour affichage de la liste
* Affichage de joueurs

(SP2)
* Recherche par rapport à une league
* Gestion de l'erreur
* Swagger

(SP3)
* Auto complétion
* PM2 mode production

(SP4)
* Monitoring Status des applications

(Options)
* Auto complétion avec Elasticsearch
* Clustering de la base de donnée
