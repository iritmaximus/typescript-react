import { ContentProps, CoursePart } from "../types";
const parseCoursePart = (course: CoursePart): JSX.Element => {
    switch (course.kind) {
        case "group":
            return (
                <div>
                    {course.name} {course.exerciseCount}
                </div>
            )
        case: ""
    }
}

export const Content = (props: ContentProps) => {
    const courseParts: CoursePart[] = props.courses;
    return (
        <div>
            <p>
                {courseParts[0].name} {courseParts[0].exerciseCount}
                <br/>
                {courseParts[0].kind === "group" ? "" : courseParts[0].description}
            </p>
            <p>
                {courseParts[1].name} {courseParts[1].exerciseCount}
                <br/>
                {courseParts[1].kind === "group" ? "" : courseParts[1].description}
            </p>
            <p>
                {courseParts[2].name} {courseParts[2].exerciseCount}
                <br/>
                {courseParts[2].kind === "group" ? "" : courseParts[2].description}
            </p>
        </div>
    )
}
