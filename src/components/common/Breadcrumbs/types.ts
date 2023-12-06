type BreadcrumbsProps = {
  items: string[];
  currentIndex: number;
  reachedIndex: number;
  onIndexChange: (newIndex: number) => void;
};

export { BreadcrumbsProps };
