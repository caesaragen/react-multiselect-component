import styles from './Select.module.css';

type SelectOption = {
    value: any;
    label: string;
};
type SelectProps = {
    options: SelectOption[];
    value?: SelectOption;
    onChange: (value: SelectOption | undefined) => void;
}

export function Select({ value, onChange, options }: SelectProps) {
    return (
        <div tabIndex={0} className={styles.container}>
            <span className={styles.value}>Value </span>
                <button className={styles["clear-button"]}>&times;</button>
                <div className={styles.divider}></div>
                <div className={styles.caret}></div>
            <ul className={`${ styles.options } ${styles.show} `}>
                {options.map((option) => (
                    <li key={option.label} className={ styles.option }>
                        {option.label}
                    </li>
                ))}
                </ul>
        </div>       
    )
}