import React, { InputHTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {

}

const Input: React.FC<IProps> = React.forwardRef<HTMLInputElement, IProps>(({ className, ...props }, ref) => {
    return (
        <input className={cn(styles.input, className)}
               {...props}
               ref={ref}
        />
    );
});

export default Input;
