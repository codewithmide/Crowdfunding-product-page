let bookmark = document.querySelector('.bookmark');
let activeStatus = document.querySelector('.status');
let bambooBtn = document.getElementById('bamboo-btn');
let blackBtn = document.getElementById('black-btn');
let btn = document.getElementById('btn');
let backProject = document.querySelector('.project');
let modalSection = document.querySelector('.modal');
let modalSectionQuit = document.querySelector('.quit-modal');
let stepTwo = document.querySelector('.step-two');
let stepThree = document.querySelector('.step-three');
let content = document.querySelector('.contents');
let modalBoxOne = document.querySelector('.one');
let modalBoxTwo = document.querySelector('.two');
let modalBoxThree = document.querySelector('.three');
let checkBoxOne = document.getElementById('label-one');
let checkBoxTwo = document.getElementById('label-two');
let checkBoxThree = document.getElementById('label-three');
let pledge = document.querySelector('.pledge');
let pledgeTwo = document.querySelector('.pledge-two');
let finalStage = document.querySelector('.final');
let finalStageTwo = document.querySelector('.final-two');
let finalStageThree = document.querySelector('.final-three');
let successPage = document.querySelector('.success');

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
    return;
  }
};


bambooBtn.addEventListener('click', () => {
  if (bambooBtn.style.backgroundColor == 'var(--cyan)'){
    return bambooBtn.style.backgroundColor = 'var(--dark-cyan)';
  } else if (bambooBtn.style.backgroundColor = 'var(--cyan)') {
    return bambooBtn.style.backgroundColor = 'var(--cyan)';
  } else {
    return bambooBtn.style.backgroundColor = 'var(--cyan)';
  }
})


blackBtn.addEventListener('click', () => {
  if (blackBtn.style.backgroundColor == 'var(--cyan)'){
    return blackBtn.style.backgroundColor = 'var(--dark-cyan)';
  } else if (blackBtn.style.backgroundColor = 'var(--cyan)') {
    return blackBtn.style.backgroundColor = 'var(--cyan)';
  } else {
    return blackBtn.style.backgroundColor = 'var(--cyan)';
  }
})


backProject.addEventListener('click', () => {
  modalSection.classList.remove('hidden');
  stepTwo.style.backgroundColor = 'rgba(0, 0, 0, 0.223)';
  stepTwo.style.display = 'flex';
  content.style.zIndex = '0';
  stepThree.style.visibility = 'hidden';
  stepTwo.style.zIndex = '1';
  stepThree.style.zIndex = '0';
})

modalSectionQuit.addEventListener('click', () => {
  modalSection.classList.add('hidden');
  stepTwo.style.display ='none';
})

checkBoxOne.addEventListener('click', () => {
  if (modalBoxOne.style.borderColor == 'var(--grey)' || modalBoxOne.style.borderColor != 'var(--cyan)') {
    modalBoxOne.style.borderColor = 'var(--cyan)';
  } else if (modalBoxOne.style.borderColor == 'var(--cyan)') {
    modalBoxOne.style.borderColor = 'var(--grey)';
  } else {
    return modalBoxOne.style.borderColor = 'var(--cyan)';
  }
});

checkBoxTwo.addEventListener('click', () => {
  if (modalBoxTwo.style.borderColor == 'var(--grey)' || modalBoxTwo.style.borderColor != 'var(--cyan)') {
    modalBoxTwo.style.borderColor = 'var(--cyan)';
    pledge.classList.remove('hidden-pledge')
  } else if (modalBoxTwo.style.borderColor == 'var(--cyan)') {
    modalBoxTwo.style.borderColor = 'var(--grey)';
    pledge.classList.add('hidden-pledge')
  } else {
    return modalBoxTwo.style.borderColor = 'var(--cyan)';
  }
});

checkBoxThree.addEventListener('click', () => {
  if (modalBoxThree.style.borderColor == 'var(--grey)' || modalBoxThree.style.borderColor != 'var(--cyan)') {
    modalBoxThree.style.borderColor = 'var(--cyan)';
    pledgeTwo.classList.remove('hidden-pledge')
  } else if (modalBoxThree.style.borderColor == 'var(--cyan)') {
    modalBoxThree.style.borderColor = 'var(--grey)';
    pledgeTwo.classList.add('hidden-pledge')
  } else {
    return modalBoxThree.style.borderColor = 'var(--cyan)';
  }
});

finalStage.addEventListener('click', () => {
  modalSection.style.display = 'none';
  stepTwo.style.display = 'none';
  successPage.style.display = 'flex';
  stepThree.style.backgroundColor = 'rgba(0, 0, 0, 0.223)';
  stepThree.style.display = 'flex';
  stepThree.style.visibility = 'visible';
  content.style.visibility = 'visible';
  content.style.zIndex = '0';
  stepThree.style.zIndex = '1';
});

finalStageTwo.addEventListener('click', () => {
  modalSection.style.display = 'none';
  stepTwo.style.display = 'none';
  successPage.style.display = 'flex';
  stepThree.style.backgroundColor = 'rgba(0, 0, 0, 0.223)';
  stepThree.style.display = 'flex';
  stepThree.style.visibility = 'visible';
  content.style.visibility = 'visible';
  content.style.zIndex = '0';
  stepThree.style.zIndex = '1';
});

finalStageThree.addEventListener('click', () => {
  modalSection.style.display = 'none';
  stepTwo.style.display = 'none';
  successPage.style.display = 'flex';
  stepThree.style.backgroundColor = 'rgba(0, 0, 0, 0.223)';
  stepThree.style.display = 'flex';
  stepThree.style.visibility = 'visible';
  content.style.visibility = 'visible';
  content.style.zIndex = '0';
  stepThree.style.zIndex = '1';
});


// mobile view

let navLinks = document.querySelector('.mobile-nav-links');
let menu = document.querySelector('.menu');
let close = document.querySelector('.close');

menu.addEventListener('click', () => {
  navLinks.style.display = 'flex';
  menu.style.display = 'none';
  close.style.display = 'flex';
})

close.addEventListener('click', () => {
  navLinks.style.display = 'none';
  menu.style.display = 'flex';
  close.style.display = 'none';
})