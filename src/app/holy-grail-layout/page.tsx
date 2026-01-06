import HolyGrail from '@/components/layout/holy-grail';
import css from './pages.module.scss';

export default function Page() {
    const generateContent = () => {
        const numbers = Array.from({ length: 100 }, (_, i) => i + 1);
        return (
            <>
                {numbers.map(i => (
                    <div key={i} className={css['item']}>
                        {i}
                    </div>
                ))}
            </>
        );
    };
    return (
        <HolyGrail>
            <div className={css['item-list']}>
                Holy Grail Layout
                {generateContent()}
            </div>
        </HolyGrail>
    );
}
