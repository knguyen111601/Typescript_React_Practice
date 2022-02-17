// React.FC is a function component 

import { useRef, useState } from "react"

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
    handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

// interface that will indicate what kind of props
export const TextField: React.FC<Props> = ({handleChange}) => {

    // tells you that the state can be a number OR null OR undefined
    const [count, setCount] = useState<number | null | undefined>(5)
    setCount(null)

    const inputRef = useRef<HTMLInputElement>(null)
    const divRef = useRef<HTMLDivElement>(null)

    return (
        <div ref={divRef}>
            <input ref={inputRef} onChange={handleChange}/>
        </div>
    )
}