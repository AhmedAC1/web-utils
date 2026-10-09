class Element {
  constructor(type) { this.element = document.createElement(type) }
  on(event, func) { this.element.addEventListener(event, func) }
  delete() { this.element.remove() }
  deleteOn(event) { this.element.addEventListener(event, ()=>{this.element.remove()}) }
  setId(id) { this.element.id = id }
  is(type) { return this.element.tagName.toLowerCase() === type }
  set classNames(names) { this.element.className = names.join(' ') }
  get parent() { return this.element.parentElement }
  set hidden(boo) { this.element.hidden = boo }
  newAttr(name, value) { this.element.setAttribute(name, value) }
  delAttr(name) { this.element.removeAttribute(name) }
  getAttr(name) { return this.element.getAttribute(name) }
  get allAttrs() { return this.element.getAttributeNames() }
  removeAllAttrs() { this.element.getAttributeNames().forEach(a => this.element.removeAttribute(a)) }
  set text(text) { this.element.textContent = text }
  set html(text) { this.element.innerHTML = text }
  set outHtml(text) { this.element.outerHTML = text }
  get text() { return this.element.textContent }
  get html() { return this.element.innerHTML }
  get outHtml() { return this.element.outerHTML }
  set style(style) { this.element.style.cssText = style }
  newCssVar(name, value) { this.element.style.setProperty('--' + name, value) }
  getCssVar(name) { return this.element.style.getPropertyValue(name) }
  delCssVar(name) { return this.element.style.removeProperty(name) }
  putClass(name) { this.element.classList.add(name) }
  delClass(name) { this.element.classList.remove(name) }
  togClass(name) { this.element.classList.toggle(name) }
  hasClass(name) { return this.element.classList.contains(name) }
  appendTo(element) { element.appendChild(this.element) }
  get() { return this.element }
  delete() { delete this.element }
}
