# WaterSense UI

This project was bootstrapped with [Vite - React](https://vitejs.dev/guide/).

View the deployed app at https://watersense-ui.vercel.app/
## Project setup
1. Install [pnpm](https://pnpm.io/installation#using-corepack). I used the corepack method in the installation docs.
2. `pnpm i` to install dependencies.
3. Install the vscode extensions below. These extensions will auto fix formatting errors on your code on save:
    * [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
    * [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
4. Run the app in development mode using `pnpm dev`.

## Available Scripts

In the project directory, you can run:

### `pnpm dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `pnpm build`

Builds the app for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `pnpm preview`

Runs the production built app. Open [http://localhost:4173](http://localhost:4173) to view it in the browser. Previews the previously built site using the `dist` folder generated from `pnpm build`. 

## Tooling

These tools are currently installed in the project.

### UI Component Libraries

Rapidly build up the UI using prebuilt components.

1. [NextUI](https://nextui.org/)
2. [React Bootstrap](https://react-bootstrap.github.io/). You can either use the React components or use className="" to style base components using Bootstrap css.
3. [FontAwesome v6](https://fontawesome.com/icons).
4. Chart library TBC.

### Styling

To customise components.

1. [Styled Components](https://styled-components.com/)

### State management
We'll be using React context hooks for global state management.

## Project structure
Outline of the project.

```
watersense-ui
    src
        assets - for storing images, favicons, etc
        components - folder for components
        pages - each url page will be contained within each file in this folder
        store - base state and reducer
        styles - customised themeing and colour schemes
        App.jsx - app entrypoint
        main.jsx - for providers only
    .env - store env variables
```