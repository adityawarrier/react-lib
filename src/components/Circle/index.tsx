import classes from "./Circle.module.scss";

export interface ICircleProps {
  color?: string;
  size?: number;
}

export const Circle = (props: ICircleProps) => {
  const { color = "blue", size = 100 } = props;

  return (
    <div
      className={classes.container}
      style={{
        backgroundColor: color,
        width: size,
        height: size,
        borderRadius: size / 2,
      }}
    />
  );
};
