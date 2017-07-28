import MainComp from './components/Main.vue';
import tower from './components/towers/Tower';

export const routes = [
  { path: '', component: MainComp },
  { path: '/tower', name:'tower', component: tower },
];
