import classes from './Box.scss';

interface IBoxProps {
  color?: string;
  size?: number;
}

export const Box = (props: IBoxProps) => {
  const { color, size = 100 } = props;

  return (
    <div
      className={classes.container}
      style={{ color, width: size, height: size }}
    />
  );
};
