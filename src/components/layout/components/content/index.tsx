import { ReactNode } from 'react';
import css from './index.module.scss';
import cx from 'classnames';

export default function Content({ children, className }: { children: ReactNode; className?: string }) {
    return <div className={cx(css['content'], className)}>{children}</div>;
}
