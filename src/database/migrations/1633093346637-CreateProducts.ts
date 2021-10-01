import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateProducts1633093346637 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "products",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                    {
                        name: "price",
                        type: "varchar", //pode ser float?
                    },
                    {
                        name: "bar_code",
                        type: "varchar",
                        isUnique: true,
                    },
                    {
                        name: "user_creator",
                        type: "uuid",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()",
                    }
                ],
                foreignKeys: [
                    {
                        name: "FKUserCreator",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ["user_creator"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("products");
    }

}
