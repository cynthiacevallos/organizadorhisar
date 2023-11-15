import './assets/base.css'
import { createApp } from 'vue'
// import { Tooltip, Toast, Popover, Dropdown } from 'bootstrap';
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone,faRightFromBracket,faPlus,faCircleCheck,faMagnifyingGlass,faFloppyDisk,faXmark,faBan,faPen, faFileExcel, faCircleXmark, faEye,faEyeSlash, faUser, faLock,faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

import App from './App.vue'
import router from './router'
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({
  components,
  directives,
});

createApp(App).use(vuetify).use(createPinia().use(piniaPluginPersistedstate)).use(router).component("font-awesome-icon", FontAwesomeIcon).mount('#app')

//import stores from './stores'
library.add(faPhone,faRightFromBracket,faPlus,faCircleCheck,faMagnifyingGlass,faFloppyDisk,faXmark,faBan,faPen,faFileExcel,faCircleXmark,faEye,faEyeSlash,faUser,faLock,faCircleExclamation);

// const app = createApp(App)

// app.use(createPinia())
// app.use(vuetify)
// app.use(router)
//    .component("font-awesome-icon", FontAwesomeIcon)

// app.mount('#app')

//createApp(App).use(createPinia()).use(stores).mount("#app");


