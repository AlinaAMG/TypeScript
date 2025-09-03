# React + TypeScript + Vite

Deze kleine React-app is gebouwd met TypeScript en Vite. De app laat gebruikers persoonlijke doelen (goals) toevoegen en verwijderen.

Formulier: Gebruikers vullen een formulier in met twee inputs: één voor de titel van het doel en één voor de beschrijving.

Doelenlijst: Toegevoegde doelen worden direct weergegeven in een lijst onder het formulier.

Verwijderen van doelen: Elk doel heeft een Delete-knop, waarmee het doel uit de lijst kan worden verwijderd.

Gebruik van Hooks:

useState houdt de lijst van doelen bij en zorgt dat de UI automatisch wordt bijgewerkt bij toevoegen of verwijderen.

useRef wordt gebruikt om referenties naar de inputvelden te krijgen, zodat de invoer kan worden gelezen en het formulier kan worden geleegd na toevoegen.

TypeScript zorgt voor typeveiligheid, waardoor foutgevoelige gegevensinvoer wordt beperkt en het makkelijker is om de structuur van een doel te definiëren (id, title, description).
