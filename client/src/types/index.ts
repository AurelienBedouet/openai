export type FormFieldProps = {
  labelName: string;
  type: string;
  name: string;
  placeholder: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isSurpriseMe?: boolean;
  handleSurpriseMe?: () => void;
};

export type CardProps = {
  _id: string;
  name: string;
  prompt: string;
  photo: string;
};
