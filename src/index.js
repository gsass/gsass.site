import { createApp } from 'vue'
import { createStore, mapGetters, mapState } from 'vuex'

import routes from './routes.js';
import components from './components.js';

// Cache for fetched markdown content
let contentCache = [
  // Stores elements of form {hash: String, content: String}
];
const notFoundMessage = '## 404! Sad Times, Dogg.';

// Set up the state manager, a `vuex` store
const store = createStore({
  state: { path: null },
  getters: {
    content(state) {
      // Get content to render, keying off the path in state
      const cached = contentCache.find(item => item.hash === state.path) || {};
      return cached.content || notFoundMessage;
    }
  },
  mutations: {
    setPath(state, newPath) { state.path = newPath }
  },
  actions: {
    navigate({ commit }, newLocation) {
      // Only navigate between hashes. Follow links normally otherwise.
      if (newLocation.pathname && newLocation.pathname !== "/") {
        return Promise.resolve(false);
      }

      const pageHash = newLocation.hash.split('-')[0] || '#'; // Allow kebab links, default safely
      const route = routes.find(route => route.hash === pageHash);

      // Fetch and cache content if it's defined in routes.js but not loaded
      const contentIsCached = contentCache.some(cached => cached.hash === pageHash)
      if (route && route.contentPath && !contentIsCached) {
        return fetch(`./content/${route.contentPath}`)
          .then(r => r.text())
          .then(content => contentCache.push({hash: pageHash, content }))
          .then(() => commit('setPath', pageHash));
      }
      // Otherwise, set the new path and allow re-render immediately
      return new Promise(() => commit('setPath', pageHash));
    }
  }
});

/*
* Set up the main app, and mount it in the container.
*/
const app = createApp({
  components,
  data() {
    return { routes, ...mapState(['path']), ...mapGetters(['content'])};
  },
  template: `
    <div class="pure-g">
      <div id="menu" class="pure-u-1 pure-u-lg-1-5">
        <nav-menu :routes="routes"></nav-menu>
      </div>
      <div id="contentWrapper" class="pure-u-1 pure-u-lg-4-5">
        <rendered-markdown :content="content"></rendered-markdown>
      </div>
    </div>
  `
})

// Connect app to the state store
app.use(store);

// Navigate to the initial path, then render the app
store.dispatch('navigate', window.location).then(() => app.mount("#app"));

// Listen for browser navigation events and trigger 'navigate' on them
addEventListener(
  'popstate',
  (e) => {
    e.preventDefault();
    store.dispatch('navigate', window.location);
  },
);
