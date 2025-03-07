/* eslint-disable no-console */

if (process.env.NODE_ENV === 'production') {
  import('register-service-worker').then(({ register }) => {
    register(`${process.env.BASE_URL}service-worker.js`, {
      ready() {
        console.log('Service worker is active')
      },
      registered(registration) {
        console.log('Service worker registered:', registration)
      },
      cached() {
        console.log('Content cached for offline use')
      },
      updatefound() {
        console.log('New content is downloading...')
      },
      updated() {
        console.log('New content available; please refresh')
      },
      offline() {
        console.log('No internet connection. Running in offline mode')
      },
      error(error) {
        console.error('Service worker error:', error)
      }
    })
  }).catch((error) => {
    console.error('Failed to load service worker:', error)
  })
}