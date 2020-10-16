import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createImages1602892184579 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'images',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                  },
                  {
                    name: 'path',
                    type: 'varchar',
                  },
                  {
                    name: 'empreendedor_id',
                    type: 'integer',
                  },
            ],
            foreignKeys:[
                {
                    name: 'imageEmpreendedor',
                    columnNames: ['empreendedor_id'],
                    referencedTableName: 'empreendedores',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE',
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
