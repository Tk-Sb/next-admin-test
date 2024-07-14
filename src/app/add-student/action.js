'use server'

import { db } from "../../db/db"
import { StudentsTable } from "../../db/schema"
import { revalidatePath } from "next/cache"
import { z } from "zod"

export async function CreateStudent(prevState, formData){
    // form schema + the database schema
    const regex = /^[\u0621-\u064A\u0660-\u0669a-zA-Z\-_\s]+$/ // arabic + english letters with spaces defined using a "regular expression"

    const schema = z.object({
        firstName: z.string().regex(regex),
        lastName: z.string().regex(regex),
        notes: z.array(),
        username: z.string(),
        password: z.string()
    })

    // get the entered data + enter default data
    const newStudentData = schema.parse({
        firstName: formData.get('first-name'),
        lastName: formData.get('last-name'),
        notes: [],
        username: `${formData.get('first-name')} ${formData.get('last-name')}`,
        password: "password"
    })

    try {
        await db.insert(StudentsTable).values(newStudentData)
        revalidatePath("/")
    } 
    catch (error) {
        console.log("failed " + error)
        return "Failed for some reason"
    }
}
