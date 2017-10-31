# Styling guide
This is a simple guide to deal with styling.

## Compiling
We're using ``node-sass-chokidar`` to compile ``.scss`` to ``.css`` and our approach is using the ``.css`` files in the main project. Each ``.scss`` file will have a ``.css`` counterpart, it served as our enrty point to styling. 

## Structure
We're using a semi 7-in-1 style, meaning because this project is only for the components, we're not implementing ``pages`` or ``layout`` directories. 
- **base**: Any styling dealing with reset or other base styling goes here.
- **bootstrap**: This folder is used for customizing bootstrap and theming it.
- **components**: style of each compoenent comes here, with the same name as the compoenent itself. 
- **App.scss**: This file is the main app style enrty point, later when we decide to have pages, we're going to relocate the file and put it in the ``pages`` directory.
- **index.scss**: This file is the global styling entry point and its ``.css`` counterpart will be imported by ``index.js``.

## Theming
In order to apply your desired theme, you must decalre a ``_variables.scss`` in bootstrap directory and override these variables to implement your desired style. Then you'll need to create a ``bootstrap.scss`` which will be referenced by ``index.scss`` and its structured as follows:
```
@import "./variables";
@import "./bootswatch";
@import "node_modules/bootstrap/scss/bootstrap";
```
Simple as that! :)

## Using Fonts
In order to use fonts, put them inside ``font`` directory and then reference it in the ``farsi.css`` or ``font.css``