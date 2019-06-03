import { Router } from 'director/build/director';
import { autorun } from 'mobx';

export default function startRouter(store) {
  // update state on url change
  const router = new Router({
    '/wppusher': () => store.showWPPusher(),
    '/': () => store.showBase()
  });
  const temp = router.configure({
    notfound: () => store.showBase(),
    html5history: true
  });
  // eslint-disable-next-line no-unused-vars
  const temp2 = temp.init();

  // update url on state changes
  autorun(() => {
    const path = store.currentPath;
    if (path !== window.location.pathname)
      window.history.pushState(null, null, path);
  });
}
