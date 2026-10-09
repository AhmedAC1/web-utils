class Element {
  constructor(type) { this.element = document.createElement(type) }
  on(event, func) { this.element.addEventListener(event, func) }
  delete() { this.element.remove() }
  deleteOn(event) { this.element.addEventListener(event, ()=>{this.element.remove()}) }
  setId(id) { this.element.id = id }
  is(type) { return this.element instanceof type }
}
