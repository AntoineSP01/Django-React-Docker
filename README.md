# Projet Django-React avec Docker

Ce projet est une application web utilisant Django pour le backend et React pour le frontend, le tout étant orchestré avec Docker. Le backend est exposé sur un port spécifique via Docker et communique avec une base de données PostgreSQL.

## Prérequis

Avant de démarrer le projet, assurez-vous d'avoir les outils suivants installés sur votre machine :

- **Docker** : pour exécuter l'application dans des conteneurs.
- **Docker Compose** : pour gérer la configuration multi-conteneurs.
- **Python 3.x** (pour le backend Django).
- **Node.js et npm** (pour le frontend React, si vous avez besoin de développer le frontend en dehors de Docker).

## Structure du projet

- **Backend (Django)** : Le serveur Django qui gère les APIs et les interactions avec la base de données PostgreSQL.
- **Frontend (React)** : L'application React qui communique avec le backend via les APIs exposées.
- **Docker** : Utilisé pour containeriser l'ensemble du projet (backend et base de données).

## Installation et démarrage du projet avec Docker

### 1. Cloner le projet

Clonez le projet depuis le dépôt Git :

```bash
git clone <url_du_dépôt>
cd <nom_du_dépôt>

# Configuration et Lancement du Projet

## 2. Configuration des variables d'environnement

Le projet utilise des variables d'environnement pour configurer la base de données, les clés secrètes et d'autres paramètres. Assurez-vous d'ajouter un fichier `.env` à la racine du projet, avec les informations nécessaires.

### Exemple de contenu pour `.env` :
    - DB_NAME=qlovers_db 
    - DB_USER=postgres 
    - DB_PASSWORD=yourpassword 
    - DB_HOST=db DB_PORT=5432

## 3. Lancer Docker

Dans la racine de votre projet, vous trouverez un fichier `docker-compose.yml` qui définit les services Docker pour le backend Django, la base de données PostgreSQL et le frontend React. Pour démarrer le projet avec Docker, utilisez la commande suivante :

```bash
docker-compose up --build

## 4. Initialiser la base de données

Une fois les conteneurs lancés, vous devez initialiser la base de données (en appliquant les migrations Django). Pour ce faire, vous pouvez exécuter la commande suivante dans un nouveau terminal :

```bash 
docker-compose exec backend python manage.py migrate

Maintenant vous pouvez utilisé le site comme bon vous semble.
