import { ISlide } from '../types';

export type NavDotsProps = {
  slides: ISlide[];
  activeIndex: number;
  onClick: (slideIndex: number) => void;
};
