# SportSee

SportSee est une startup dédiée au coaching sportif.
En pleine croissance, l’entreprise lance une nouvelle version de la page profil de l’utilisateur.
Cette page permet à l’utilisateur de suivre le nombre de sessions réalisées ainsi que le nombre de calories brûlées.

## Sommaire

1. [Installation](#installation)
2. [Fonctionnalités](#fonctionnalites)
3. [Design](#design)
4. [Technologies](#technologies)

## Installation

Pour installer le projet, clonez le dépôt GitHub

Installez les dépendances :

```bash
pnpm install
```

Lancez le projet en mode développement :

```bash
pnpm dev
```

Pour installer le back, clonez ce dépôt Github : [link](https://github.com/OpenClassrooms-Student-Center/SportSee)

## Fonctionnalités

- **Routing dynamique** : accès au profil d’un utilisateur via son ID (`/user/:id`).
- **Statistiques utilisateur** : affichage des données principales (score, calories, protéines, glucides, lipides, etc.).
- **Visualisation graphique** :
  - Activité quotidienne (poids + calories brûlées).
  - Durée moyenne des sessions.
  - Performance par type d’exercice.
  - Score global de progression.
- **Mock de données** : possibilité de tester l’application sans API.
- **Intégration API** : récupération et normalisation des données depuis le backend.

## Design

Le design a été réalisé sous Figma. Toutes les ressources (logos, icônes, etc.) sont disponibles dans la maquette.

- [Lien vers la maquette Figma](https://www.figma.com/design/BMomGVZqLZb811mDMShpLu/UI-design-Sportify-FR?node-id=0-1&p=f&t=lRmHZmhp3cJ6ua4e-0)

## Technologies

- **React**
- **Vite**
- **React Router**
- **SCSS**
- **JavaScript**
- **Recharts**
- **Axios**
