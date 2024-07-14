import { db } from "../../db/db"
import { StudentsTable } from "../../db/schema"
import AddStudentForm from "./form"



export default async function AddStudent(){
    const allStudents =  await db.select().from(StudentsTable)
    
    return (
        <>
            <h1>Add student</h1>
            <AddStudentForm></AddStudentForm>
            {allStudents.map(({ id, firstName, lastName, notes }) => (
                <p key={id}>Student {firstName} {lastName}</p>
            ))}
        </>
    )
}
