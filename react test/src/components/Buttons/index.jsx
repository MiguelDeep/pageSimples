import { Container} from "./style";

export function Button(props, loading=false,...rest) {
    return(
        <Container 
        type="button"
        > {props.title}</Container> 
    )
}