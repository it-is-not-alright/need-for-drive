type InputSelectProps = {
  placeholder: string;
  value: string | null;
  onChange: (newValue: string) => void;
  items: string[];
  id: string;
};

export default InputSelectProps;
