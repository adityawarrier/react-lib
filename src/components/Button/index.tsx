import classes from "./Button.module.scss";
export interface IButtonProps {
  title: string;
  onClick: () => void;
}

export const Button = (props: IButtonProps) => {
  const { title, onClick } = props;
  console.log(onClick);

  return (
    <button
      className={classes.container}
      onClick={() => {
        console.log("onClick called!");
        onClick();
      }}
    >
      {title.toUpperCase()}
    </button>
  );
};
