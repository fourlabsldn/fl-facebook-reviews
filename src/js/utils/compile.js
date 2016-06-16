export default function compile(str) {
  const container = document.createElement('div');
  container.innerHTML = str;
  return container.children[0];
}
