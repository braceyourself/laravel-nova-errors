Nova.booting((Vue, router, store) => {
  router.addRoutes([
    {
      name: 'errors',
      path: '/errors',
      component: require('./components/Tool'),
    },
  ])
})
