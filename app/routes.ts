import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('common/home.tsx'),
  route('/account/login', 'features/account/login/page.tsx'),
  route('/account/signup', 'features/account/signup/page.tsx'),
] satisfies RouteConfig;
