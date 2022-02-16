// React.FC is a function component 

interface Person {
    firstName: string,
    lastName: string
}

interface Props {
    text: string
    ok?: boolean // question mark means prop is optional 
    i?: number
    fn?: (bob: string) => string
    obj?: {
        field1: string
    }
    person: Person
}

// interface that will indicate what kind of props
export const TextField: React.FC<Props> = () => {
    return (
        <div>
            <input />
        </div>
    )
}