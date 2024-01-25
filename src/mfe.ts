import { createApp, h } from 'vue'
import App from './App.vue'
import getRouter from './router'
import singleSpaVue from 'single-spa-vue'

const vueLifecycles = singleSpaVue({
  createApp,
  appOptions: {
    render() {
      return h(App, {
        props: {
          // single-spa props are available on the "this" object. Forward them to your component as needed.
          name: this.name,
          mountParcel: (this as any).mountParcel,
          singleSpa: (this as any).singleSpa
        }
      })
    }
  },
  handleInstance(app) {
    console.log(app.props)
    app.use(getRouter('/mfeAppV'))
  }
})

export const { bootstrap, mount, unmount } = vueLifecycles
