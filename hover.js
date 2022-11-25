const slide = document.getElementById('example');
const tooltip = document.getElementById('coordinates');
const toggle = document.getElementById('display-coordinates');

slide.addEventListener('mousemove', function(e) {
  // Get dimensions of slide element
  const r = this.getBoundingClientRect()

  // Set x and y values prop values based on center of slide element
  this.style.setProperty('--x', e.clientX - (r.left + Math.floor(r.width / 2)))
  this.style.setProperty('--y', e.clientY - (r.top + Math.floor(r.height / 2)))
})

slide.addEventListener('mouseleave', function() {
  // Reset x and y prop values when no longer hovering
  this.style.setProperty('--x', 0)
  this.style.setProperty('--y', 0) 
})


document.body.addEventListener('mousemove', function(e) {
  // Have coordinate values follow the user's cursor
  tooltip.style.left = e.pageX - 15 + 'px';
  tooltip.style.top = e.pageY - 70 + 'px';
})

toggle.addEventListener('change', function(e) {
  // Toggle the display of coordinate values
  this.checked
    ? document.body.classList.add('display-coordinates')
    : document.body.classList.remove('display-coordinates')           
})