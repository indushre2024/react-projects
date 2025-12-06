import { Client, ID, Query, TablesDB } from "appwrite";

const projectId = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const databaseId = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const tableId = import.meta.env.VITE_APPWRITE_TABLE_ID;
export const client = new Client();

client.setEndpoint("https://nyc.cloud.appwrite.io/v1")
        .setProject(projectId)

const tablesDb = new TablesDB(client);

export const updateSearchTerm = async (searchTerm, movie)=>{
    try{
        //look for search term
        let results = await tablesDb.listRows({
            databaseId: databaseId,
            tableId: tableId,
            queries:[
                Query.equal('searchTerm' ,searchTerm)
            ]
        });

        //Update if present
        if(results.rows.length > 0){
            const row = results.rows[0];
            await tablesDb.updateRow({
                databaseId, tableId, rowId: row.$id, data:{count: row.count + 1}
            })
        }
        //create new entry if not present
        else{
            await tablesDb.createRow({
                databaseId: databaseId,
                tableId: tableId,
                rowId: ID.unique(),
                data:{
                    searchTerm,
                    count:1,
                    posterLink:`https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
                    movie_id: movie.id
                }
            })
        }
        
    }
    catch(e){
        console.log(e);
    }
}

export const getTopSearchedMovies = async ()=>{
    try{
        const results = await tablesDb.listRows({
            databaseId, 
            tableId, 
            queries: [
                Query.limit(5),
                Query.orderDesc('count')
            ]
        });
        if(results.rows.length > 0){
            return results.rows;
        }
    }
    catch(e){
        console.error(e);
    }
}