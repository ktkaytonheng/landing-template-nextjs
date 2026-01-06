import css from './index.module.scss';
import cx from 'classnames';

export default function SideBar({ className }: { className?: string }) {
    return <div className={cx(css['sidebar'], className)}>sidebar</div>;
}
