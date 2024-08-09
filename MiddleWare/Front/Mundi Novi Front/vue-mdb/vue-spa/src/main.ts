import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import 'mdb-vue-ui-kit/css/mdb.min.css';
import router from './router';

const app = createApp(App);
app.use(router);
app.mount('#app');
