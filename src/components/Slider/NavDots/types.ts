import { Slide } from '../types';

export type NavDotsProps = {
  slides: Slide[];
  activeIndex: number;
  onClick: (slideIndex: number) => void;
};
