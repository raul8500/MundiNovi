import NotFound404 from '@/modules/common/pages/NotFound404.vue';
import HomePage from '@/modules/landing/pages/HomePage.vue';
import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'langing',
      component: () => import('@/modules/landing/layouts/LandingLayout.vue'),
      children: [
        {
          path: '/home',
          name: 'home',
          component: HomePage,
        },
        {
          path: '/features',
          name: 'Features',
          component: () => import('@/modules/landing/pages/FeaturesPage.vue'),
        },
        {
          path: '/contact',
          name: 'Contact',
          component: () => import('@/modules/landing/pages/ContactPage.vue'),
        },
        {
          path: '/pricing',
          name: 'Pricing',
          component: () => import('@/modules/landing/pages/PricingPage.vue'),
        },
        {
          path: '/pokemon/:id',
          name: 'Pokemon',
          props: (route) => {
            const id = Number(route.params.id);
            return isNaN(id) ? { id: 1 } : { id };
          },

          component: () => import('@/modules/pokemons/pages/PokemonPage.vue'),
        },
      ],
    },

    //Auth

    {
      path: '/auth',
      redirect: '/login',
      component: () => import('@/modules/auth/layouts/AuthLayout.vue'),
      children: [
        {
          path: '/login',
          component: () => import('@/modules/auth/pages/LoginPage.vue'),
        },
      ],
    },

    //Main Page

    {
      path: '/',
      redirect: '/',
      component: () => import('@/modules/main/layouts/MainLayout.vue'),
      children: [
        {
          path: '/',
          component: () => import('@/modules/main/pages/MainPage.vue'),
        },
      ],
    },

    {
      path: '/:pathMatch(.*)*',
      component: NotFound404,
    },
  ],
});

export default router;
