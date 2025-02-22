"use strict";


document.addEventListener('DOMContentLoaded', () => {

  const initHeroSection = () => {

    const IMAGE_SLIDER_HERO_DESC = ['hero_1_desc.webp', 'hero_2_desc.webp', 'hero_3_desc.webp'];
    const IMAGE_SLIDER_HERO_MOBILE = ['hero_1_mobile.webp', 'hero_2_mobile.webp', 'hero_3_mobile.webp'];
    const PATH_IMG_HERO = '../img/hero_img/';
    const MOBILE_MEDIA_QUERY = window.matchMedia('(max-width: 430px)');

    const $allToggleHero = document.querySelectorAll('.section-hero__toggle');
    const $allSliderItem = document.querySelectorAll('.slider30__item');

    let imageSliderHeroInVariables = null;

    if (MOBILE_MEDIA_QUERY.matches) {

      setVariablesImg('hero_1_mobile.webp', '--bg-image', PATH_IMG_HERO);
      imageSliderHeroInVariables = IMAGE_SLIDER_HERO_MOBILE;
      console.log("слушатели на мобильный");

    } else {

      setVariablesImg('hero_1_desc.webp', '--bg-image', PATH_IMG_HERO);
      imageSliderHeroInVariables = IMAGE_SLIDER_HERO_DESC;
    }

    
    $allToggleHero.forEach((toggleElem, indexToggle) => {

      toggleElem.addEventListener('click', function handleClick() {

        const nameImg = imageSliderHeroInVariables[indexToggle];
        updateImage(nameImg, indexToggle);

        removeAllClass($allToggleHero, 'button-common--active');
        toggleElem.classList.add('button-common--active');
      })
    })

    $allToggleHero.forEach((toggleElem, indexToggle) => {

      toggleElem.addEventListener('mouseenter', () => {

        const nameImg = imageSliderHeroInVariables[indexToggle];
        updateImage(nameImg, indexToggle);

        removeAllClass($allToggleHero, 'button-common--active');
        toggleElem.classList.add('button-common--active');
      })
    })

    MOBILE_MEDIA_QUERY.addEventListener('change', function (event) {
      if (event.matches) {
        imageSliderHeroInVariables = IMAGE_SLIDER_HERO_MOBILE;
        resetHeroImg();
        removeAllClass($allToggleHero, 'button-common--active');
        $allToggleHero[0].classList.add('button-common--active');
      } else {
        imageSliderHeroInVariables = IMAGE_SLIDER_HERO_DESC;
        resetHeroImg()
        removeAllClass($allToggleHero, 'button-common--active');
        $allToggleHero[0].classList.add('button-common--active');
      }
    })


    function updateImage(nameImg, indexToggle) {
      removeAllClass($allSliderItem, 'slider30__item--active');
      setVariablesImg(nameImg, '--bg-image', PATH_IMG_HERO);
      $allSliderItem[indexToggle].classList.add('slider30__item--active');
    }

    function resetHeroImg() {
      const nameImg = imageSliderHeroInVariables[0];
      removeAllClass($allSliderItem, 'slider30__item--active');
      setVariablesImg(nameImg, '--bg-image', PATH_IMG_HERO);
      $allSliderItem[0].classList.add('slider30__item--active');
    }

    function removeAllClass(elements, className) {
      elements.forEach(el => el.classList.remove(className));
    }

    function setVariablesImg(nameImg, variables, path) {
      const pathImg = `url(${path}${nameImg})`;
      document.documentElement.style.setProperty(variables, pathImg);
    }

  };

  initHeroSection();

  const initBurger = () => {
    
  const $burgerHeaderMenu = document.querySelector('.header__container-menu');
  const $headerNav = document.querySelector('.header__nav');
  const $burgerBtn = document.querySelector('.burger-menu');


  $burgerHeaderMenu.addEventListener('click', (e)=> {
    $headerNav.classList.toggle('header__nav--active');
    $burgerBtn.classList.toggle('burger-menu--active');
    if($burgerBtn.getAttribute('aria-expanded') === 'true') {
      $burgerBtn.setAttribute('aria-expanded', 'false');
      $burgerBtn.setAttribute('aria-label', 'Открыть меню');
    } else {
      $burgerBtn.setAttribute('aria-expanded', 'true');
      $burgerBtn.setAttribute('aria-label', 'Закрыть меню');
    }
   
  })

  document.addEventListener('click', (e) => {

    const burgerContainer = e.target.closest('.header__container-menu');
    const navMenu = e.target.closest('.header__nav');
    if(burgerContainer || navMenu) return;
    $burgerBtn.setAttribute('aria-expanded', 'false');
    $burgerBtn.setAttribute('aria-label', 'Открыть меню');
    $headerNav.classList.remove('header__nav--active');
    $burgerBtn.classList.remove('burger-menu--active');
  })
  };

  initBurger();


})

