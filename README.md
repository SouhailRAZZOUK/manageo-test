# Test Front-End en Javasript pour BeWeb

## Instructions d'utilisation

### Pre-requis

* Git
* NodeJS
* NPM
* GulpJS (installer globalement `npm install gulp -g`)

### Acquisition du code

Clonez cette _repository_ avec Git:

```batch
git clone https://github.com/SouhailRAZZOUK/manageo-test.git
```

Puis positionez vous dans le dossier du projet:

```batch
cd manageo-test
```

### Installation

1- Installez les modules node:

```batch
npm insatll
```

2- Installez les composants bower: 

```batch
bower install
```

### Compilation et Resultat

Executez `gulp` dans votre console:

```batch
gulp
```

Apres que `gulp` fini la compilation, vous allez trouver le code compiler dans le dossier `bin` et vous pouvez voir le resultat dans votre navigateur web en visitant: `http://localhost:3000/`.

Si le port `3000` et deja utilisez pensez a changer le numero de port dans `gulpfile.js`.