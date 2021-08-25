import Developer from '../models/Developer';

class DeveloperRepository {
    
    async getAll () {
        return await Developer.findAll();
    }   

    async getList (where) {
        return await Developer.findAll(where);
    }   

    async getOne (id) {
        return await Developer.findByPk(id);
    }

    async create (params) {
        return await Developer.create(params);
    }

    async update (dev, params) {
        return await dev.update(params);
    }

    async delete (dev) {
        return await dev.destroy();
    }
}; 

export default new DeveloperRepository();