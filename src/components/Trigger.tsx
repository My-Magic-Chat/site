import { CSSProperties, forwardRef } from 'react';

type TriggerProps = Pick<CSSProperties, 'top' | 'bottom' | 'background'>;
const Trigger = forwardRef<HTMLDivElement, TriggerProps>(({ top = 0, background = 'trasparent' }: TriggerProps, ref) => {
    return (
        <div
            ref={ref}
            style={{
                top,
                background,
                padding: 10,
                position: 'absolute',
            }}
        />
    );
});

Trigger.displayName = 'Trigger';

export default Trigger;