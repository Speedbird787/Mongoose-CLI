require ("./db/connection")
const mongoose = require('mongoose')
const yargs = require ('yargs/yargs')
const { hideBin } = require ('yargs/helpers');
const { addMovie, listMovie, updateMovie, deleteMovie, deleteAll } = require("./film/filmMethods");
const argv = yargs (hideBin(process.argv)).argv;

const app = async () => {
try {
    if (argv.add) {
        await addMovie({
            title: argv.title,
            actor: argv.actor,
            genre: argv.genre,
            rating: argv.rating,
            year: argv.year,
        })
    }
    else if (argv.listOne) {
        await listMovie()
    }
    else if (argv.list) {
        await listMovie()
    }
     else if (argv.update) {
        await updateMovie()
    }
    else if (argv.delete) {
        await deleteMovie()
    }
    else if (argv.deleteAll) {
        await deleteAll()
    }
    else {
        console.log("Wrong command")
    }
    mongoose.connection.close()
}
    

catch (error) {
        console.log(error)
    }

}

app();
