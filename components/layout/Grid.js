import { Row, Column } from 'react-basics';
import cx from 'classix';
import styles from './Grid.module.css';

export function GridRow(props) {
  const { className, ...otherProps } = props;
  return <Row {...otherProps} className={cx(styles.row, className)} />;
}

export function GridColumn(props) {
  const { className, ...otherProps } = props;
  return <Column {...otherProps} className={cx(styles.col, className)} />;
}
