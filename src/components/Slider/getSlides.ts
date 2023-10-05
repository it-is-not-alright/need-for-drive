import { images, slides } from './constants';

const getSlides = () =>
  slides.map((slide) => ({
    ...slide,
    imageURL: images[slide.id],
  }));

export default getSlides;
