export interface RadioButtonProps{
    children: React.ReactNode;
    value: string;
    name: string;
    defaultChecked: boolean;
    disabled: boolean;
}
export const Radio = (props: RadioButtonProps) => {
    const {children, value, name, defaultChecked, disabled} = props;
    return (
      <span>
        <input
          type="radio"
          value={value}
          name={name}
          defaultChecked={defaultChecked}
          disabled={disabled}
        />
        {children}
      </span>
    );
  }