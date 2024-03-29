import { mapActions } from 'vuex';

import renderMarkdown from './renderer.js';

/*
* Define App components
*/
const navMenu = {
  /*
  * Top-level navigation menu
  */
  props: { routes: Array },
  computed: {
    links() {
      return this.routes.filter(item => !!item.label)
    }
  },
  methods: mapActions([ 'navigate' ]),
  template: `
    <div class="pure-g nav-menu">
      <div v-for="link, index in links" :key="link.hash" :class="link.isHeading ? 'pure-u-1 nav-heading': 'pure-u-1-3 pure-u-lg-1' ">
        <a :href="link.hash" @click="navigate(link)" class="pure-menu-link">
          {{ link.label }}
        </a>
      </div>
    </div>
  `
};

const renderedMarkdown = {
  /*
  * Renders markdown documents from the content directory as sanitized HTML
  */
  props: { content: Function },
  computed: {
    rendered() {
      return renderMarkdown(this.content());
    }
  },
  methods: {
    ...mapActions([ 'navigate' ]),
    connectRenderedLinks() {
      // Adds a `navigate` action to the onclick event of local links
      this.$refs.content.querySelectorAll("a[href]").forEach((link) => {
        const url = new URL(link.href);
        if (url.hostname === window.location.hostname) { link.onclick = () => this.navigate(url) }
      }, this);
    }
  },
  mounted() { this.$nextTick(() => this.connectRenderedLinks()) },
  updated() { this.$nextTick(() => this.connectRenderedLinks()) },
  template: `<div class="content" ref="content" v-html="rendered"></div>`
};

export default { navMenu, renderedMarkdown };
