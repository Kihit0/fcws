export const sqlGetAllData = (table: string) => { return `SELECT * FROM ${table};`};
export const sqlGetOneById = (table: string, id: number) => { return `SELECT * FROM ${table} WHERE id=${id};` };
export const sqlCreateElement = (table: string) => { return `INSERT INTO ${table} (name, commands, birthday, type_id) VALUES (?,?,?,?);` };
export const sqlUpdateElementById = (table: string, id: number) => { return `UPDATE ${table} SET commands = ? WHERE id = ${id};`};
export const sqlDeleteElementById = (table: string, id: number) => { return `DELETE FROM ${table} WHERE id = ${id};`};