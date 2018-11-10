import Home from "./components/Home";
import Secret from "./components/Secret";

export default [
    {
        path: "/",
        component: Home,
        exact: true,
    },
    {
        path: "/secret",
        component: Secret,
        exact: true,
    }
];
