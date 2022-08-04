import clsx from 'clsx';
import styles from './title.module.css';

const Title = ({ className, children, ...props }) => (
  <div className={clsx(styles.title, className)} {...props}>
    {children}
  </div>
);

export default Title;
