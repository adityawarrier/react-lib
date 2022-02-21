import classes from "./Button.scss";
export interface IButtonProps {
  title: string;
  onClick: () => void;
}

export const Button = (props: IButtonProps) => {
  const { title, onClick } = props;
  return (
    <button className={classes.container} onClick={onClick}>
      {title}
    </button>
  );
};
