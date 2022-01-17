'use strict';

class Collection {
  constructor(model) {
    this.model = model;
  }

  //add async functions

  async create(obj) {
    const newRecord = await this.model.create(obj);
    return newRecord.dataValues;
  }

  async read(id, name) {
    if (id) {
      let record = await this.model.findOne({ where: { id } });
      return record;
    } else if (name) {
      let record = await this.model.findOne({ where: { name } });
      return record;
    } else {
      let records = await this.model.findAll();
      return records;
    }
  }

  async update(obj, id) {
    const updatedRecord = await this.model.update(obj, { where: { id } });
    return updatedRecord;
  }

  async destroy(id) {
    const destroyedRecord = await this.model.destroy({ where: { id } });
    return destroyedRecord;
  }
}

module.exports = Collection;