'use strict';

const ratingModalEl = document.querySelector('.rating--modal');
const rateModalEl = document.querySelector('.rate--modal');
const rateBtn = document.querySelectorAll('.number-rate');
const submitBtn = document.querySelector('.submit-btn');

const ratedModal = function () {
  ratingModalEl.classList.remove('hidden');
  rateModalEl.classList.add('hidden');
};

for (let i = 0; i < rateBtn.length; i++) {
  rateBtn[i].addEventListener('click', () => {
    document.querySelector('.selected--rate').textContent =
      rateBtn[i].textContent;
  });
}

submitBtn.addEventListener('click', ratedModal);
