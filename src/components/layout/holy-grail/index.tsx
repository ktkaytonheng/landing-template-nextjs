import { ReactNode } from 'react';
import TopBar from '@/components/layout/components/topbar';
import Content from '@/components/layout/components/content';
import css from './index.module.scss';

export default function HolyGrail({ children }: { children: ReactNode }) {
    return (
        <>
            <TopBar />
            <div className={css['container']}>
                <Content className={css['content']}>{children}</Content>
            </div>
        </>
    );
}
