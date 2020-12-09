import * as Navigo from 'navigo';

const declareRoutes = (router, el) => {
  const routes = {
    '/app_1': {
      name: 'app-1',
      component: () => import('micro_frontend_app_1/app'),
    },
    '/app_2': {
      name: 'app-2',
      component: () => import('micro_frontend_app_2/app'),
    },
    '/app_3': {
      name: 'app-3',
      component: () => import('micro_frontend_app_3/app'),
    },
  };

  const resetAppRoot = () => el.innerHTML = '';
  const registerRoute = path => router.on(path, () => onRouteTo(path))
  const onRouteTo = async path => {
    const { name, component } = routes[path];

    const handleFetchFail = err => console.error(err);
    const handleFetchSuccess = () => {
      resetAppRoot();
      el.appendChild(document.createElement(name));
    };

    await component()
      .then(handleFetchSuccess)
      .catch(handleFetchFail);
  };
  const registerRoutes = routes => {
    Object.keys(routes).forEach(registerRoute);
    router.on('/', resetAppRoot);
    router.notFound(() => console.log('No matching route found'));
    router.resolve();
  };

  registerRoutes(routes);
};

export const initRouter = el => {
  const router = new Navigo('');
  declareRoutes(router, el);

  // window.addEventListener('unload', function (event) {
  //   console.log(event);
  // });
};
