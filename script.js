let bookmark = document.querySelector('.bookmark');
const active = document.querySelector('.active');
const inactive = document.querySelector('.inactive');


  document.getElementById("btn").onclick = function(){
    this.style.color ="var(--white)";
    this.style.backgroundColor = 'var(--dark-cyan)';
    active.style.display = 'block';
    inactive.style.display = 'none';
};