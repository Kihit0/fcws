"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sqlDeleteElementById = exports.sqlUpdateElementById = exports.sqlCreateElement = exports.sqlGetOneById = exports.sqlGetAllData = void 0;
const sqlGetAllData = (table) => { return `SELECT * FROM ${table};`; };
exports.sqlGetAllData = sqlGetAllData;
const sqlGetOneById = (table, id) => { return `SELECT * FROM ${table} WHERE id=${id};`; };
exports.sqlGetOneById = sqlGetOneById;
const sqlCreateElement = (table) => { return `INSERT INTO ${table} (name, commands, birthday, type_id) VALUES (?,?,?,?);`; };
exports.sqlCreateElement = sqlCreateElement;
const sqlUpdateElementById = (table, id) => { return `UPDATE ${table} SET commands = ? WHERE id = ${id};`; };
exports.sqlUpdateElementById = sqlUpdateElementById;
const sqlDeleteElementById = (table, id) => { return `DELETE FROM ${table} WHERE id = ${id};`; };
exports.sqlDeleteElementById = sqlDeleteElementById;
//# sourceMappingURL=sql.request.js.map