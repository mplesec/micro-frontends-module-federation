import { initRouter } from './router.js';

import '../styles/reset.css';
import '../styles/app.css';

// TODO: TEST, remove
// import './temp_common.js';

import 'micro_frontend_header/app';

const appRoot = document.getElementById('app-root');
initRouter(appRoot);
