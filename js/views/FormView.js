import View from './View.js'

const tag = '[FromView]'

const FormView = Object.create(View)

FormView.setup = function(el) {
  this.init(el)
  console.log(tag, this.el)
  return this
}

export default FormView
