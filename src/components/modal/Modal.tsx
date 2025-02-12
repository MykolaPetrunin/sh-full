import { FC, PropsWithChildren } from 'react';

export const Modal: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className="absolute inset-0 bg-primary/50">
            <div className="absolute inset-5 md:inset-10 flex flex-col justify-center">{children}</div>
        </div>
    );
};
