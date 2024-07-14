import { db } from "../../db/db"
import { StudentsTable } from "../../db/schema"

export default async function AllStudents(){
    const allStudents =  await db.select().from(StudentsTable)

    return (
        <>
            {allStudents.map(({ id, firstName, lastName, notes }) => (
                <Link href={`/all-students/${id}`}>
                    <p key={id}>Student {firstName} {lastName}</p>
                </Link>
            ))}
        </>
    )
}
