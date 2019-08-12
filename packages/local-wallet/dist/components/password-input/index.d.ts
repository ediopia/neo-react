/// <reference types="react" />
interface PasswordInputProps {
    value: string;
    onChange: (value: string) => void;
    onKeyDown: () => void;
    isLoading?: boolean;
}
declare const PasswordInput: ({ value, onChange, onKeyDown, isLoading }: PasswordInputProps) => JSX.Element;
export default PasswordInput;
//# sourceMappingURL=index.d.ts.map