import classes from "./Box.module.scss";

export interface IBoxProps {
  color?: string;
  size?: number;
}

export const Box = (props: IBoxProps) => {
  const { color, size = 100 } = props;

  return (
    <div
      className={classes.container}
      style={{ backgroundColor: color, width: size, height: size }}
    />
  );
};
