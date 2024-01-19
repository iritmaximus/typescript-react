import { TotalProps } from "../types";

export const Total = (props: TotalProps) => {
    const courseParts = props.courses;

    return (
        <div>
        <p>
            Number of exercises{" "}
            {courseParts.reduce((carry, part) => carry + part.exerciseCount, 0)}
        </p>
        </div>
    )
}
