type InputSelectProps = {
  placeholder: string;
  value: string | null;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  items: string[];
  id: string;
};

export default InputSelectProps;
