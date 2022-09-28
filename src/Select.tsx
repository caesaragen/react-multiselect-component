
type SelectOption = {
    value: string;
    label: string;
};
type SelectProps = {
    options: SelectOption[];
    value?: SelectOption;
    onChange: (value: SelectOption | undefined) => void;
}

export function Select({ value, onChange, options }: SelectProps) {
    
}