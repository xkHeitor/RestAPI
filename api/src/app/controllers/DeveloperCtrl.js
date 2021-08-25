import DeveloperService from '../services/DeveloperService';

class DeveloperCtrl {

	async index (req, res) {
		return await DeveloperService.index(req, res); 
	}

	async getOne (req, res) {
		return await DeveloperService.getById(req, res); 
	}

	async getList (req, res) {
		return await DeveloperService.getList(req, res); 
	}

	async store (req, res) {
		return await DeveloperService.store(req, res);
	}

	async update (req, res) {
		return await DeveloperService.update(req, res);
	}

	async delete (req, res) {
		return await DeveloperService.delete(req, res);
	}

};

export default new DeveloperCtrl();