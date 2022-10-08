import mongoose from 'mongoose';

// delete mongoose.connection.models['client'];

const Schema = mongoose.Schema;

const Machines = Schema({
	name: String,
	slug: String,
	extrusora: String,
	diametro: String,
	materialCheck: String,
	zona1: String,
	zona2: String,
	zona3: String,
	zona4: String,
	zona5: String,
	zona6: String,
	velocidade_da_rosca: String,
	amperagem_da_rosca: String,
	pressao_do_material_na_saida_da_rosca: String,
	pressao_do_freio: String,
	temperatura_da_agua: String,
	producao: String,
});

export default mongoose.models && mongoose.models.Machines
	? mongoose.models.Machines
	: mongoose.model('Machines', Machines);
