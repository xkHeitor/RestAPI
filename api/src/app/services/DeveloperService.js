import { OK, CREATED, NO_CONTENT, FORBIDDEN } from '../../config/httpResponse';

import ResponseDTO 			from "../utils/ResponseDTO";
import DeveloperRepository 	from "../repositories/DeveloperRepository";

class DeveloperService {

	async index (req, res) {
		let resDTO	= new ResponseDTO(res, { ok: OK } , false, []);
		let params	= req.query;
		
		try {
			if (!Object.keys(params).length)
				resDTO.data = await DeveloperRepository.getAll() || 'Nenhum dev cadastrado';
			else
				resDTO.data = await DeveloperRepository.getList({
					offset	: `${(params.page -1) * params.limit}`,
					limit	: `${params.limit}`,
				});
		} catch (e) {
			console.error(`Error - 'index'. e: ${e}`);
			[ resDTO.error, resDTO.data ] = [ true, 'Erro ao buscar lista de Devs.' ];
		}

		return resDTO.response();
	}

	async getById (req, res) {
		let params	= req.params;
		let resDTO 	= new ResponseDTO(res, { ok: OK, error: FORBIDDEN } , false, []);
		
		try {
			let dev = await this.getDev(resDTO, params.id);
			if (dev)
				resDTO.data = dev;
		} catch (e) {
			console.error(`Error - 'getById'. e: ${e}`);
			[ resDTO.error, resDTO.data ] = [ true, 'Erro ao buscar Developer.' ];
		}

		return resDTO.response();
	}

	async store (req, res) {
		let resDTO = new ResponseDTO(res, { ok: CREATED } , false, null);
		let dev;

		try {
			dev = await DeveloperRepository.create(req.body);
			resDTO.data = { id: dev.id, nome: dev.nome };
		} catch (e) {
			console.error(`Error - 'store'. e: ${e}`);
			[ resDTO.error, resDTO.data ] = [ true, 'Erro ao salvar Developer.' ];
		}

		return resDTO.response();
	}

	async update (req, res) {
		let params	= req.params;
		let resDTO	= new ResponseDTO(res, { ok: OK } , false, null);

		try {
			let dev = await this.getDev(resDTO, params.id);
			if (!dev) 
				return resDTO.response();
			
			dev = await DeveloperRepository.update(dev, req.body);
			resDTO.data = { 
				nome	: dev.nome,		sexo	: dev.sexo,
				idade	: dev.idade,	hobby	: dev.hobby,
			};
		} catch (e) {
			console.error(`Error - 'update'. e: ${e}`);
			[ resDTO.error, resDTO.data ] = [ true, 'Erro ao editar Developer.' ];
		}
		
		return resDTO.response();
	}

	async delete (req, res) {
		let params	= req.params;
		let resDTO	= new ResponseDTO(res, { ok: NO_CONTENT } , false, null);

		try {
			let dev = await this.getDev(resDTO, params.id);
			if (!dev) 
				return resDTO.response();

			await DeveloperRepository.delete(dev);
		} catch (e) {
			console.error(`Error - 'delete'. e: ${e}`);
			[ resDTO.error, resDTO.data ] = [ true, 'Erro ao deletar Developer.' ];
		}
		
		return resDTO.response();
	}

	async getDev (resDTO, id) {
		let dev = await DeveloperRepository.getOne(id);
		if (!dev) {
			[ resDTO.error, resDTO.data ] = [ true, 'Developer não encontrado' ];
			return false;
		} else {
			return dev;
		}
	}

}

export default new DeveloperService();