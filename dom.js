const webutilshtml = {
  elements: {
    createElement(type, content, attributes) {
      const a = document.createElement(type);
      a.textContent = content;
      if (attributes == null) return a;
      for (const [attr, val] of Object.entries(attributes)) {
        a.setAttribute(attr, val);
      }
      return a;
    },
    select(elmnt) {
      return document.querySelector(elmnt);
    },
    selectAll(elmnts) {
      return document.querySelectorAll(elmnts);
    }
  }
}
