## Setup

1. Fork the [repository](https://github.com/JoinCODED/RJS3-TheIndex-Components-and-Props)
2. Clone it.
3. `cd` into the project directory.
4. Install the required packages for the task.

```shell
$ yarn install
```

*5.* Run the project

```shell
$ yarn start
```

---

## Task

**Everything** is being rendered in `App.js` right now. This makes it hard to manage the application.  
In this task, you're going to separate the UI into independent components:

![slicing](https://i.imgur.com/F9rTBGL.png)

#### 1. `Sidebar.js`

Move the `sidebar` JSX from `App.js` into a separate component:

1. Create a new component file in the `src` directory called `Sidebar.js`
2. At the top of your file, `import React from 'react'`
3. Create a new component function called `Sidebar` (don't forget to export it at the bottom of your file).
4. Move the relevant JSX from `App.js` into the new component.
6. Import and use the new component in `App.js`.

#### 2. `AuthorList.js`

![authorlist](https://i.imgur.com/3Cc1FNb.png)

1. Turn the grid of authors into its own `AuthorList` component. Import it and use it in `App.js`.
2. You're going to have a lot of `'authors' is not defined` errors in your console!
3. Fix your app by passing the `authors` array from `App.js` into your new component as a prop.

#### 3. `AuthorCard.js`

![authorcard](https://i.imgur.com/e5RGE9W.png)

1. Make a new component for an individual author card.
2. Import it and use it in your author list component.
3. Make sure each card is displaying data for a different author.
4. Use a `.map` to dynamically create the author cards. Don't forget to give each card a `key` attribute.

---

#### Submission

1.  Push your code.
