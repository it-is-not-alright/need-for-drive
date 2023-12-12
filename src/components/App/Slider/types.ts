type Slide = {
  id: number;
  title: string;
  description: string;
  colorTheme: string;
  imageSource: string;
};

type SliderProps = {
  isDisplay: boolean;
};

export { Slide, SliderProps };
