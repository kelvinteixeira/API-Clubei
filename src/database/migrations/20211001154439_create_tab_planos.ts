import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return await knex.schema.createTable('planos', (table) => {
    table.increments('id').unique()
    table.specificType('titulo','VARCHAR(20)').notNullable().unique()
    table.specificType('descricao','VARCHAR(124)').notNullable().unique()
    table.specificType('valor','FLOAT').notNullable()
  })
}

export async function down(knex: Knex): Promise<void> {
  return await knex.schema.dropTable('planos')
}

