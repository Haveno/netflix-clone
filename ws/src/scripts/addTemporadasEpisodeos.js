const database = require('../services/database');
const Filme = require('../models/filme');
const Temporada = require('../models/temporada');
const Episodeo = require('../models/episodeo');

const addTemporadasEpisodeos = async () => {
    try {
        const series = await Filme.find({  tipo: 'serie'}).select('_id');
        for (let serie of series) {
            console.log(`Filme ${serie}-----`);
            const numTemporadas = Math.floor(Math.random() * 5) + 1;
            for (let i = 0; i <= numTemporadas; i++) {
                console.log(`Inserindo temporada ${i} de ${numTemporadas}`);  
                const temporada = await new Temporada({
                    filme_id: serie,
                    titulo: `Temporada ${i}`
                }).save();
                const numEpisodeos = Math.floor(Math.random() * 5) + 1;
                for (let x = 1; x <= numEpisodeos; x++) {
                    console.log(`Inserindo episódeos ${x} de ${numEpisodeos}`);
                    await new Episodeo({
                        temporada: temporada._id,
                        titulo: `Episódeos ${x}`,
                        numero: x,
                        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim eros, lacinia nec nisl quis, rutrum condimentum massa. Phasellus sodales a justo vitae consequat.',
                        capa: 'https://picsum.photos/300/200'
                    }).save();
                    
                }              
            }    
        }
        console.log('Final do script');
    } catch (err) {
        console.log(err.message);
    }
}

addTemporadasEpisodeos();