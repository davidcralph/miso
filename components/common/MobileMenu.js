import cx from 'classix';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './MobileMenu.module.css';

export function MobileMenu({ items = [], onClose }) {
  const { pathname } = useRouter();

  const Items = ({ items, className }) => (
    <div className={cx(styles.items, className)}>
      {items.map(({ label, url, children }) => {
        const selected = pathname.startsWith(url);

        return (
          <>
            <Link
              key={url}
              href={url}
              className={cx(styles.item, { [styles.selected]: selected })}
              onClick={onClose}
            >
              {label}
            </Link>
            {children && <Items items={children} className={styles.submenu} />}
          </>
        );
      })}
    </div>
  );

  return (
    <div className={cx(styles.menu)}>
      <Items items={items} />
    </div>
  );
}

export default MobileMenu;
