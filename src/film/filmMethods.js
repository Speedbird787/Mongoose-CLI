const { argv } = require("yargs");
const FilmModel = require("./filmModel");

// create
exports.addMovie = async (newFilm) => {
    try {
        let movie = new FilmModel(newFilm)
        await movie.save()
        console.log(`Movie added: "${argv.title}" (${argv.year})`)
    }
    catch (error) {
        console.log(error)
    }
};

// read/find
exports.listOne = async () => {
    try {
        const listResult = await FilmModel.findOne(
            { title: argv.title, year: argv.year }
        )
        console.log(listResult) 
    }
    catch (error) {
        console.log(error)
    }
};

// read
exports.listMovie = async () => {
    try {
        if (argv.title) {
            const listResult = await FilmModel.find(
                { title: argv.title }
            )
            console.log(listResult)
        }
        else if (argv.year) {
            const listResult = await FilmModel.find(
                { year: argv.year }
            )
            console.log(listResult)
        }
        else if (argv.actor) {
            const listResult = await FilmModel.find(
                { actor: argv.actor }
            )
            console.log(listResult)
        }
        else if (argv.genre) {
            const listResult = await FilmModel.find(
                { genre: argv.genre }
            )
            console.log(listResult)
        }
        else if (argv.rating) {
            const listResult = await FilmModel.find(
                { rating: argv.rating }
            )
            console.log(listResult)
        }
        else {
            const listResult = await FilmModel.find()
            console.log(listResult)
        }
    }
    catch (error) {
        console.log(error)
    }
};

// update
exports.updateMovie = async () => {
    try {
        if (argv.newtitle) {
            await FilmModel.updateOne(
                { title: argv.title, year: argv.year },
                { $set: { title: argv.newtitle } }
            )
            console.log(`Movie title updated: "${argv.newtitle}" (${argv.year})`)
        }
        else if (argv.newyear) {
            await FilmModel.updateOne(
                { title: argv.title, year: argv.year },
                { $set: { year: argv.newyear } }
            )
            console.log(`Movie year updated: "${argv.title}" (${argv.newyear})`)
        }
        else if (argv.newactor) {
            await FilmModel.updateOne(
                { title: argv.title, year: argv.year },
                { $set: { actor: argv.newactor } }
            )
            console.log(`Movie actor updated: ${argv.newactor} - "${argv.title}" (${argv.year})`)
        }
        else if (argv.newgenre) {
            await FilmModel.updateOne(
                { title: argv.title, year: argv.year },
                { $set: { genre: argv.newgenre } }
            )
            console.log(`Movie genre updated: ${argv.newgenre} - "${argv.title}" (${argv.year})`)
        }
        else if (argv.newrating) {
            await FilmModel.updateOne(
                { title: argv.title, year: argv.year },
                { $set: { rating: argv.newrating } }
            )
            console.log(`Movie rating updated: ${argv.newrating} - "${argv.title}" (${argv.year})`)
        }
    }
    catch (error) {
        console.log(error)
    }
};

// DELETE 
exports.deleteMovie = async () => {
    try {
        await FilmModel.deleteOne(
            { title: argv.title, year: argv.year }
        )
        console.log(`Movie "${argv.title}" (${argv.year}) deleted`) 
    }
    catch (error) {
        console.log(error)
    }
};

// delete with filter option
exports.deleteAll = async () => {
    try {
        if (argv.title) {
            await FilmModel.deleteMany(
                { title: argv.title }
            )
            console.log(`All movies named "${argv.title}" deleted`)
        }
        else if (argv.year) {
            await FilmModel.deleteMany(
                { year: argv.year }
            )
            console.log(`All ${argv.year} movies deleted`)
        }
        else if (argv.actor) {
            await FilmModel.deleteMany(
                { actor: argv.actor }
            )
            console.log(`All movies starring ${argv.actor} deleted`)
        }
        else if (argv.genre) {
            await FilmModel.deleteMany(
                { genre: argv.genre }
            )
            console.log(`All ${argv.genre} movies deleted`)
        }
        else if (argv.rating) {
            await FilmModel.deleteMany(
                { rating: argv.rating }
            )
            console.log(`All ${argv.rating}-rated movies deleted`)
        }
        else {
            await FilmModel.deleteMany()
            console.log("All movies in database deleted")
        }
    }
    catch (error) {
        console.log(error)
    }
};