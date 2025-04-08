import { useEffect } from 'react';
import gsap from 'gsap';

const NavEffects = () => {
  useEffect(() => {
    const effectLayer = document.createElement('li');
    effectLayer.className = 'hover-effect';
    const navUl = document.querySelector('.main-nav__list');
    if (!navUl) return;
    navUl.appendChild(effectLayer);

    let alreadyHovered = false;

    const navigationBoundingRect = () =>
      navUl.getBoundingClientRect();

    const calculateClipPath = (element) => {
      const ulRect = navigationBoundingRect();
      const rect = element.getBoundingClientRect();
      const top = rect.top - ulRect.top;
      const left = rect.left - ulRect.left;
      const bottom = ulRect.bottom - rect.bottom;
      const right = ulRect.right - rect.right;
      // Add a class to the parent element
      element.closest('.main-nav__link')?.classList.add('-hovered');
      return `inset(${top}px ${right}px ${bottom}px ${left}px round 3.1rem)`;
    };

    const navLinks = document.querySelectorAll('.main-nav__link');
    const navItems = document.querySelectorAll('.main-nav__link');

    const mouseEnterHandler = function () {
      navLinks.forEach((navLink) => navLink.classList.remove('-hovered'));
      const newClipPath = calculateClipPath(this);
      if (!alreadyHovered) {
        gsap.set(effectLayer, {
          display: 'block',
          opacity: 0,
          clipPath: newClipPath,
          webkitClipPath: newClipPath,
        });
        gsap.to(effectLayer, {
          duration: 0.2,
          opacity: 1,
          ease: 'power3.in',
          onComplete: () => {
            alreadyHovered = true;
          },
        });
      } else {
        gsap.to(effectLayer, {
          duration: 0.5,
          opacity: 1,
          clipPath: newClipPath,
          webkitClipPath: newClipPath,
          ease: 'power3.out',
        });
      }
    };

    navItems.forEach((link) => {
      link.addEventListener('mouseenter', mouseEnterHandler);
    });

    const mouseLeaveHandler = () => {
      navLinks.forEach((navLink) => navLink.classList.remove('-hovered'));
      gsap.killTweensOf(effectLayer);
      gsap.to(effectLayer, {
        duration: 0.2,
        opacity: 0,
        ease: 'power3.in',
        onComplete: () => {
          alreadyHovered = false;
          effectLayer.style.display = 'none';
        },
      });
    };

    navUl.addEventListener('mouseleave', mouseLeaveHandler);


    return () => {
      navItems.forEach((link) => {
        link.removeEventListener('mouseenter', mouseEnterHandler);
      });
      navUl.removeEventListener('mouseleave', mouseLeaveHandler);
      if (navUl.contains(effectLayer)) {
        navUl.removeChild(effectLayer);
      }
    };
  }, []);

  return null;
};

export default NavEffects;
