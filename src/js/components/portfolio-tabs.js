const portfolioTabsNav = document.querySelector('.portfolio-tabs-nav');
const portfolioTabsBtns = document.querySelectorAll('.portfolio-tabs-nav__btn');
const portfolioTabsItems = document.querySelectorAll('.portfolio-tabs__item');
const portfolioTabsItemsVisible = document.querySelectorAll('.portfolio-tabs__item--visible');
const loadMore = document.querySelector('.portfolio-more');

const isLoadMoreNeeded = (selector) => {
  if (selector.length <= 9) {
    loadMore.style.display = 'none';
  } else {
    loadMore.style.display = 'inline-flex';
  }
};

portfolioTabsNav.addEventListener('click', (e) => {
  const target = e.target;
  if (target.classList.contains('portfolio-tabs-nav__btn')) {
    const path = target.dataset.path;

    portfolioTabsBtns.forEach(el => { el.classList.remove('portfolio-tabs-nav__btn--active')});
    target.classList.add('portfolio-tabs-nav__btn--active');

    portfolioTabsItems.forEach(el => {
      el.classList.remove('portfolio-tabs__item--visible');
      el.classList.remove('portfolio-tabs__item--visible-more');
    });

    document.querySelectorAll(`[data-target="${path}"]`).forEach(el => {
      el.closest('.portfolio-tabs__item').classList.add('portfolio-tabs__item--visible');
    });

    isLoadMoreNeeded(document.querySelectorAll(`[data-target="${path}"]`));

    if (path == 'all') {

      portfolioTabsItems.forEach(el => {
        el.classList.add('portfolio-tabs__item--visible');
      });

      isLoadMoreNeeded(document.querySelectorAll('.portfolio-tabs__item--visible'));
    }
  }
});

isLoadMoreNeeded(portfolioTabsItemsVisible);

loadMore.addEventListener('click', (e) => {
  const visibleItems = document.querySelectorAll('.portfolio-tabs__item--visible');

  const path = document.querySelector('.portfolio-tabs-nav__btn--active').dataset.path;
  console.log(path)

  if (path == 'all') {
    portfolioTabsItems.forEach(el => {
      el.classList.add('portfolio-tabs__item--visible-more');
      loadMore.style.display = 'none';
    });
  } else {
    document.querySelectorAll(`[data-target="${path}"]`).forEach(el => {
      el.closest('.portfolio-tabs__item').classList.add('portfolio-tabs__item--visible-more');
    });
    loadMore.style.display = 'none';
  }
});

// проверка количества элементов и скрытие после 9 - через Js
