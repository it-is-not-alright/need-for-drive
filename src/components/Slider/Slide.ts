import slideData from './slide-data.json';
import images from './images';

class Slide {
  public id: number;

  public title: string;

  public description: string;

  public colorTheme: string;

  public imageURL: string;

  public static fromObject(obj: object): Slide {
    function getProperty(name: string) {
      type ObjectKey = keyof typeof obj;
      return obj[name as ObjectKey];
    }
    const slide: Slide = new Slide();
    slide.id = getProperty('id') || 0;
    slide.title = getProperty('title') || '?';
    slide.description = getProperty('description') || '?';
    slide.colorTheme = getProperty('colorTheme') || '?';
    slide.imageURL = images[slide.id];
    return slide;
  }
}

function getSlides(): Slide[] {
  const slides: Slide[] = [];
  (slideData as object[]).forEach((obj: object) => {
    slides.push(Slide.fromObject(obj));
  });
  return slides;
}

export default Slide;
export { getSlides };
