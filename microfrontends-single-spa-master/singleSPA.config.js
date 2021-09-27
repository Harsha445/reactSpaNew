import { registerApplication, start } from 'single-spa'

console.log(window.myapp.counter)

registerApplication(
  'actionBar',
  () => import('./components/actionBar/index.js'),
  () => location.pathname === "/action-bar" || location.pathname === "/" ? true : false,
  (customProps) => console.log("action 1", customProps)
);

registerApplication(
  'react',
  () => import('./components/react/index.js'),
  () => location.pathname === "/react" || location.pathname === "/" ? true : false,
  (customProps) => console.log("action 2", customProps)
);

start();