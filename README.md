![Recipe App Image](./Recipe-app.png 'Recipe App image')

_if you just want to run it locally without specifications, you can go to the [How to run it locally section](#how-to-run-it-locally)_

# What is this App about?

It's a Recipe App that lets you search for recipes and also show you some in the homepage if you're interested in being surprised.

# What technologies were used?

- Reactjs
- NPM packages as:
  - Styled-components for using the CSS inside the JSX.
  - Splidejs for the sliding feature of the homepage.
  - React-router-dom for the routes of the App.
  - Framer-motion for animations when changing pages.
  - React icons.

# How to run it locally

### First things

You've got to have Yarn installed, if you don't have it, run this command in your terminal:

```node
npm install --global yarn
```

If it doesn't work, it's possible that you don't have Node installed, so go ahead and download and install it here: [Node.](https://nodejs.org 'Node Website')

If don't know what Yarn is, you can check their documentation by [clicking here.](https://classic.yarnpkg.com/en/docs/getting-started 'Yarn Documentation')

### Installing dependencies

Now that you already have Node and Yarn installed, you can run this command inside the cloned folder:

```
  yarn install
```

After installing all dependencies, you still have to do some things, firstly, create your account on the [Spoonacular's API](https://spoonacular.com/food-api 'Recipe API'), the API we're using for this Web App, it's free for 150 Requests per day.

Now you can go to MY CONSOLE, on the top right corner and then Profile and get your API key. Save your API key in a .env file like that:

```
  REACT_APP_API_KEY=YOURAPIKEYWITHOUTSPACESORSEMICOLON
```

And now run your application using `yarn start`.

_**PS: the number of recipes shown is limited to 9 on the URL, you can always change it on the requests by changing the variable**_ `numberOfRandomRecipes` _**on**_ `Veggie.js` _**and**_ `Popular.js` _**or by simply inserting it on the URL.**_

With that, you should be able to search any recipe or filter it by Italian, American, Thai and Japanese food. You can always search for the [documentation of the API](https://spoonacular.com/food-api/docs "Spoonacular's API documentation") if you want to improve this website.

Hope this documentation is useful to you.
