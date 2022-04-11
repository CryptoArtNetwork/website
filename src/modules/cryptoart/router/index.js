const routes = [
  {
      name: "root",
      path: "/",
      component: () =>
          import(/* webpackChunkName: "home" */ "@/modules/cryptoart/views/Home/Index"),
  },
]

export default routes