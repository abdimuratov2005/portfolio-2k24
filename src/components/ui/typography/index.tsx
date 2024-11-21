import styled from "styled-components";
import { ReactNode } from "react";

interface Props {
    children?: ReactNode;
    as?: TextElement;
    type?: TextStyleType;
}

const StyledTypography = styled("p")<Props>({

})

export const Typography = (props: Props) => {
    const { children, type, ...rest } = props;

    return (
        <StyledTypography
            as={props.as ?? "p"}
            {...rest}
        >
            { children }
        </StyledTypography>
    )
}