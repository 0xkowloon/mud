import { describe, it, expect } from "vitest";
import { createSqliteTable } from "./createSqliteTable";

describe("createSqliteTable", () => {
  it("should create table from schema", async () => {
    const table = createSqliteTable({
      namespace: "test",
      name: "users",
      keySchema: { x: "uint32", y: "uint32" },
      valueSchema: { name: "string", addr: "address" },
    });

    expect(table).toMatchInlineSnapshot(`
      {
        "table": SQLiteTable {
          "addr": SQLiteBlobBuffer {
            "config": {
              "default": "0x0000000000000000000000000000000000000000",
              "hasDefault": true,
              "name": "addr",
              "notNull": true,
              "primaryKey": false,
            },
            "default": "0x0000000000000000000000000000000000000000",
            "hasDefault": true,
            "name": "addr",
            "notNull": true,
            "primary": false,
            "table": [Circular],
          },
          "name": SQLiteText {
            "config": {
              "default": "",
              "enumValues": [],
              "hasDefault": true,
              "length": undefined,
              "name": "name",
              "notNull": true,
              "primaryKey": false,
            },
            "default": "",
            "enumValues": [],
            "hasDefault": true,
            "length": undefined,
            "name": "name",
            "notNull": true,
            "primary": false,
            "table": [Circular],
          },
          "x": SQLiteInteger {
            "autoIncrement": false,
            "config": {
              "autoIncrement": false,
              "default": 0,
              "hasDefault": true,
              "name": "x",
              "notNull": true,
              "primaryKey": true,
            },
            "default": 0,
            "hasDefault": true,
            "name": "x",
            "notNull": true,
            "primary": true,
            "table": [Circular],
          },
          "y": SQLiteInteger {
            "autoIncrement": false,
            "config": {
              "autoIncrement": false,
              "default": 0,
              "hasDefault": true,
              "name": "y",
              "notNull": true,
              "primaryKey": true,
            },
            "default": 0,
            "hasDefault": true,
            "name": "y",
            "notNull": true,
            "primary": true,
            "table": [Circular],
          },
          Symbol(drizzle:Name): "test:users",
          Symbol(drizzle:OriginalName): "test:users",
          Symbol(drizzle:Schema): undefined,
          Symbol(drizzle:Columns): {
            "addr": SQLiteBlobBuffer {
              "config": {
                "default": "0x0000000000000000000000000000000000000000",
                "hasDefault": true,
                "name": "addr",
                "notNull": true,
                "primaryKey": false,
              },
              "default": "0x0000000000000000000000000000000000000000",
              "hasDefault": true,
              "name": "addr",
              "notNull": true,
              "primary": false,
              "table": [Circular],
            },
            "name": SQLiteText {
              "config": {
                "default": "",
                "enumValues": [],
                "hasDefault": true,
                "length": undefined,
                "name": "name",
                "notNull": true,
                "primaryKey": false,
              },
              "default": "",
              "enumValues": [],
              "hasDefault": true,
              "length": undefined,
              "name": "name",
              "notNull": true,
              "primary": false,
              "table": [Circular],
            },
            "x": SQLiteInteger {
              "autoIncrement": false,
              "config": {
                "autoIncrement": false,
                "default": 0,
                "hasDefault": true,
                "name": "x",
                "notNull": true,
                "primaryKey": true,
              },
              "default": 0,
              "hasDefault": true,
              "name": "x",
              "notNull": true,
              "primary": true,
              "table": [Circular],
            },
            "y": SQLiteInteger {
              "autoIncrement": false,
              "config": {
                "autoIncrement": false,
                "default": 0,
                "hasDefault": true,
                "name": "y",
                "notNull": true,
                "primaryKey": true,
              },
              "default": 0,
              "hasDefault": true,
              "name": "y",
              "notNull": true,
              "primary": true,
              "table": [Circular],
            },
          },
          Symbol(drizzle:BaseName): "test:users",
          Symbol(drizzle:IsAlias): false,
          Symbol(drizzle:ExtraConfigBuilder): undefined,
          Symbol(drizzle:IsDrizzleTable): true,
          Symbol(drizzle:SQLiteInlineForeignKeys): [],
        },
        "tableName": "test:users",
      }
    `);
  });
});
