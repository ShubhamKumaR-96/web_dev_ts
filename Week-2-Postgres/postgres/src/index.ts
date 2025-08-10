import { Client } from "pg";

const pgClient=new Client('postgresql://neondb_owner:npg_z8ARGIYif2DJ@ep-crimson-block-a8qg4byg-pooler.eastus2.azure.neon.tech/neondb?sslmode=require&channel_binding=require')

async function main(){
    await pgClient.connect()

    const res=await pgClient.query('select * from users')
    console.log(res)
}
main()