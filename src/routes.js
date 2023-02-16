/*
* Routes for this app are all hash-based and all here
* All routes must have attributes `name` and `hash`
* Routes may also have a `label` which allows them to appear in the nav,
* and a `contentPath` to load associated markdown content for the page
*/
const routes = [
  { name: 'home',
    hash: '#',
    label: '👋 Hi!',
    contentPath: 'home.md'},
  { name: 'resume',
    hash: '#resume',
    label: 'Résumé',
    contentPath: 'resume.md'},
  { name: 'portfolio',
    hash: '#portfolio',
    label: 'Work Portfolio',
    contentPath: 'portfolio.md'}
];

export default routes;
