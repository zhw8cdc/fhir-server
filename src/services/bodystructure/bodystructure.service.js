// Autogenerated by generate_services.py. Do not edit.
const { COLLECTION } = require('../../constants');
const base_service = require('../base/base.service');

const resource_name = 'BodyStructure';
const collection_name = COLLECTION.BODYSTRUCTURE;

module.exports.search = (args, { req }) =>
  base_service.search(args, { req }, resource_name, collection_name);

module.exports.searchById = (args, { req }) =>
  base_service.searchById(args, { req }, resource_name, collection_name);

module.exports.create = (args, { req }) =>
  base_service.create(args, { req }, resource_name, collection_name);

module.exports.update = (args, { req }) =>
  base_service.update(args, { req }, resource_name, collection_name);

module.exports.merge = (args, { req }) =>
  base_service.merge(args, { req }, resource_name, collection_name);

module.exports.remove = (args, { req }) =>
  base_service.remove(args, { req }, resource_name, collection_name);

module.exports.searchByVersionId = (args, { req }) =>
  base_service.search(args, { req }, resource_name, collection_name);

module.exports.everything = (args, { req }) =>
  base_service.everything(args, { req }, resource_name, collection_name);

module.exports.history = (args, { req }) =>
  base_service.history(args, { req }, resource_name, collection_name);

module.exports.historyById = (args, { req }) =>
  base_service.historyById(args, { req }, resource_name, collection_name);

module.exports.patch = (args, { req }) =>
  base_service.patch(args, { req }, resource_name, collection_name);

module.exports.validate = (args, { req }) =>
  base_service.validate(args, { req }, resource_name, collection_name);

module.exports.graph = (args, { req }) =>
  base_service.graph(args, { req }, resource_name, collection_name);

module.exports.expand = (args, { req }) =>
  base_service.expand(args, { req }, resource_name, collection_name);


