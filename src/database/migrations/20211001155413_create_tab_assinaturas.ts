import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return await knex.schema.createTable('assinaturas', (table) => {
    table.increments('id').unique()
    table.specificType('titulo','VARCHAR(20)').notNullable().unique()
    table.specificType('descricao','VARCHAR(124)').notNullable().unique()
    table.specificType('categoria','VARCHAR(20)').notNullable()
    table.specificType('imagem','LONGBLOB').notNullable()
  })
}

export async function down(knex: Knex): Promise<void> {
    return await knex.schema.dropTable('assinaturas')
}

