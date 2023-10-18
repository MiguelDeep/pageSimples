import { ButtonText } from "./style";

export function ButtonTxt({ title, ...rest }) {
    return (
        <ButtonText type="button">
            {title}
        </ButtonText>
    );
}