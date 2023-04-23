import cx from 'classix';
import styles from './NoData.module.css';
import useMessages from 'hooks/useMessages';

export function NoData({ className }) {
  const { formatMessage, messages } = useMessages();

  return (
    <div className={cx(styles.container, className)}>{formatMessage(messages.noDataAvailable)}</div>
  );
}

export default NoData;
