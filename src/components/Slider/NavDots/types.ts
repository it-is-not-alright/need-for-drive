import { Slide } from '../types';

type NavDotsProps = {
  slides: Slide[];
  activeIndex: number;
  onClick: (slideIndex: number) => void;
};

export { NavDotsProps };
