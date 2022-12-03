'use strict';

const rateCard = document.querySelector('.card__inner--rate');
const ratedCard = document.querySelector('.card__inner--message');
const rateBtn = document.querySelectorAll('.card__rate');
const submitBtn = document.querySelector('.btn');

const ratedModal = function (e) {
  e.preventDefault();
  ratedCard.classList.remove('hidden');
  rateCard.classList.add('hidden');
};

for (let i = 0; i < rateBtn.length; i++) {
  rateBtn[i].addEventListener('click', () => {
    document.querySelector('span').textContent = rateBtn[i].textContent;
  });
}

submitBtn.addEventListener('click', ratedModal);
