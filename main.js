const horizontalBar = document.querySelector('.horizontal.bar');
const verticalBar = document.querySelector('.vertical.bar');
const container = document.querySelector('.container');
const body = document.querySelector('body');

window.addEventListener('resize', () => {
  updateSizes();
})

updateSizes();

function updateSizes() {
  horizontalBar.firstChild.textContent = `${horizontalBar.clientWidth} px`;
  verticalBar.firstChild.textContent = `${verticalBar.clientHeight} px`;
  container.querySelector('.width').textContent = `Width: ${body.clientWidth} px`;
  container.querySelector('.height').textContent = `Height: ${body.clientHeight} px`;
}