type BreadcrumbsProps = {
  items: string[];
  activeIndex: number;
  availableIndex: number;
  onIndexChange: (newIndex: number) => void;
};

export default BreadcrumbsProps;
