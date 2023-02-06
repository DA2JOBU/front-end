export interface Props{
    children: React.ReactNode;
    label: string;
}
export const RadioGroup = (props: Props) => {
    const {children, label} = props;
    return (
      <fieldset>
        <legend>{label}</legend>
        {children}
      </fieldset>
    );
  }