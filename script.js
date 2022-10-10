let bookmark = document.querySelector('.bookmark');
let activeStatus = document.querySelector('.status');
const btn = document.getElementById('btn');

btn.onclick = function () {
  if (activeStatus.innerHTML == "Bookmark") {
    activeStatus.style.color = "var(--dark-cyan)";
    activeStatus.innerHTML = 'Bookmarked';
    bookmark.style.backgroundImage = "url(./images/icon-check-bookmark.svg)";
  } else if (activeStatus.innerHTML == "Bookmarked") {
    activeStatus.innerHTML = "Bookmark";
    activeStatus.style.color = "var(--black)";
    bookmark.style.backgroundImage = "url(./images/icon-bookmark.svg)";
  } else {
    return '';
  }
};
