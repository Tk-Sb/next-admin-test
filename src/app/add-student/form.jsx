'use client'

import { useFormState } from "react-dom"
import { useFormStatus } from "react-dom"
import { CreateStudent } from "./action"


function SubmitButton(){
    const {pending} = useFormStatus()

    return(
        <>
            <button type="submit" disabled={pending}>
                {!pending &&
                    <h1>Add</h1>
                }
                {pending &&
                    <h1>Adding...</h1>
                }
            </button>
        </>
    )
}

export default function AddStudentForm(){
    const [state, action] = useFormState(CreateStudent, null)

    return (
        <>
            <form action={action}>
                <input type="text" name="first-name" placeholder="First name" required/>
                <input type="text" name="last-name" placeholder="Last name" required/>
                <SubmitButton />
            </form>
        </>
    )
}
