import classes from "./Button.module.scss";
export interface IButtonProps {
  title: string;
  onClick: () => void;
}

export const Button = (props: IButtonProps) => {
  const { title, onClick } = props;

  return (
    <button className={classes.container} onClick={onClick}>
      {title.toUpperCase()}
    </button>
  );
};
