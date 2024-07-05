const
    DB_NAME = "sysdev_recruitment",    
    TABLE_NAME = "programming_languages"
    FAVORITE_PROGRAMMING_LANGUAGE = "TypeScript"
;

// database/schema creation

const
    mysql = require( "mysql" ),
    credentials = {
        host: "localhost",
        user: "root",
        password: "specquil"
    }
;

let connection = mysql.createConnection( {
    ...credentials,
    database: DB_NAME
} );

let languagesData;

connection.connect( ( error ) => {

    if( error ) throw error;

    sql = `SELECT * FROM ${ TABLE_NAME }`;
    connection.query( sql, ( error, results ) => {

        if( error ) throw error;
        languagesData = results;

        // displaying results

        

    } );
    

} );

const http = require( "http" );
http.createServer( ( req, res ) => {

    res.writeHead( 200, { "Content-Type": "text/html" } );
    res.end( `
        <table>
            <thead><tr>
                <th>id</th>
                <th>favorites</th>
            </tr></thead>
            <tbody>${
                languagesData.map( ( { id, favorites } ) => `
                    <tr>
                        <td>${ id }</td>
                        <td>${ favorites }</td>
                    </tr>
                ` ).join( "" )
            }</tbody>
        </table>
    ` );
    console.log( languagesData.map( ( { id, favorites } ) => ( { id, favorites } ) ) );

} ).listen( 3000 );

// Running:
// npm start
