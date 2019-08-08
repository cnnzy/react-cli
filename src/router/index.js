import home from '../pages/home'
import about from '../pages/about'
import topics from '../pages/topics'
import hot from '../pages/hot'


const routes = [
    {
        path: "/",
        exact: true,
        component: home,
    },
    {
        path: "/topics",
        component: topics,
    },
    {
        path: "/hot",
        component: hot,
    },
    {
        path: "/about",
        component: about,
    },
];

export default routes;

