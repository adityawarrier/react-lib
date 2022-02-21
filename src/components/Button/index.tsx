export interface IButtonProps {
  title: string;
  onClick: () => void;
}

export const Button = (props: IButtonProps) => {
  const { title, onClick } = props;
  return <button onClick={onClick}>{title}</button>;
};
