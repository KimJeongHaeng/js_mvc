import FormView from '../views/FormView.js'
import TabView from '../views/TabView.js'
const tag = '[MainController]'

export default{
  init() {
    FormView.setup(document.querySelector('form'))
    .on('@submit', e => this.onSubmit(e.detail.input))

    TabView.setup(document.querySelector('#tabs'))
    .hide()

  },
  onSubmit(input) {
    console.log(tag, input)
    this.search(input)
  },
  search(query) {
    
  }

}
