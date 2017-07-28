import MainComp from './components/Main.vue';
import towerone from './components/towers/Towerone.vue';
import towertwo from './components/towers/towertwo.vue';

export const routes = [
  { path: '', component: MainComp },
  { path: '/towerone', component: towerone },
  { path: '/towertwo', component: towertwo }
];
