import { migrate } from "drizzle-orm/neon-http/migrator"
import { db } from "./db"

async function main(){
    try{
        await migrate(db, {
            migrationsFolder: './src/db/migrations'
        })
        console.log("migration was successful")
    }
    catch(err){
        console.log(err)
        process.exit(1)
    }
}

main()