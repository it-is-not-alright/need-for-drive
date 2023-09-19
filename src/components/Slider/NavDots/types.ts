import ISlide from '../types';

type NavDotsProps = {
  slides: ISlide[];
  activeIndex: number;
  onClick: (slideIndex: number) => void;
};

export default NavDotsProps;
