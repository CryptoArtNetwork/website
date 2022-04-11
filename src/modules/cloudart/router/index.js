const routes = [
    {
        name: "root",
        path: "/chain",
        component: () =>
            import(/* webpackChunkName: "home" */ "@/modules/cloudart/views/Home/Index"),
    },
]

export default routes
