# gsass.site
Personal website, written in Vue and bundled via Webpack. Is that overkill for something which could be generated as a set of static assets? Yes, but it was nice to remember how to set up a frontend project.

## Repo structure
- [index.html](./index.html) is the main page. It contains imports for the JS bundles, styles, and an app container.
- [index.js](./src/index.js) contains the main app. You do not need to edit this to publish content.
- [routes.js](./src/routes.js) is a vanilla JS module containing all the routes for the app. You will need to edit this to publish content.
- [The `content` directory](./content) is where markdown content goes. Note that while HTML is _valid_ markdown, the input sanitizer may scrub elements it interprets as security risks.

## Notes for myself

### Developing for the website
- `yarn run dev` will build the webpack bundle in development mode and watch for file changes
  - Dev site is served at http://127.0.0.1:42069/
- `yarn build` will build a production bundle

### Adding content
Content is stored in markdown in the `content` directory of this repo. You can edit it as you would markdown.

The rendered is configured to automatically apply Pure styling to various elements wherever browser defaults look bad.

### Adding a page
I'm relying on hash-based routing to avoid fighting Github Pages's router. This is a bit of a hack, but I've made the code easy to read.

To add a new page:
- Write up the content in [markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).
- Add the markdown file to the `content` directory.
- Add a new route to `routes.js`

## Wishlist/TODOs
- [ ] Responsive styling fixes
- [ ] Get "Back" button to navigate properly

