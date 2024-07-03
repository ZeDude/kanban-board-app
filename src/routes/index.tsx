import { RouteObject } from 'react-router';
import Layout from '../layout';
import Kanban from '../pages/Kanban';
import Projects from '../pages/Projects';
import Tests from '../pages/Tests';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        children: [
          {
            path: '',
            element: <Projects />
          },
          {
            path: 'projects',
            element: <Projects />
          },
          {
            path: 'tests',
            element: <Tests />
          },
          {
            path: 'kanban',
            element: <Kanban />
          }
        ]
      }
    ]
  }
];

export default routes;
