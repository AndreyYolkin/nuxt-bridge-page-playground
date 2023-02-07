import { extendPages, defineNuxtModule } from '@nuxt/kit';
import { resolve } from 'pathe';

export default defineNuxtModule({
  setup() {
    extendPages((routes) => {
      routes.push(
        {
          path: '/',
          component: resolve('pa/index.vue')
        },
        {
          path: '/pa/1',
          component: resolve('pa/pa/1.vue')

        },
        {
          path: '/pa/2',
          component: resolve('pa/pa/2.vue')
        });
      return routes;
    });
  },
});
