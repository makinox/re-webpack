async function getComponent() {
  const element = document.createElement('div');
  const { default: _ } = await import('lodash');
  const { default: Print } = await import('./print');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.onclick = Print.bind(null, 'Hello webpack!');

  return element;
}

getComponent().then((component) => {
  document.body.appendChild(component);
});
