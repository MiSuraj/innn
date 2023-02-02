const { EntitySchema } = require("typeorm");
const { RELATION_PATIENT } = require("../../constants");
module.exports = new EntitySchema({
  name: RELATION_PATIENT,
  tableName: RELATION_PATIENT,
  columns: {
    patient_id: {
      primary: true,
      generated: true,
      type: "int",
    },
    name: {
      type: "varchar",
    },
    mobile: {
      type: "varchar",
      unique: true,
      nullable: true,
    },
    email: {
      type: "varchar",
      unique:true,
    },
    address: {
      type: "varchar",
      nullable: true,
    },
    photo: {
      type: "varchar",
    },
    password: {
      type: "varchar",
      nullable: true,
    },
    psychiatrist_id: {
      type: "int",
    },
    created_at: {
      type: "timestamp",
      createDate: true,
    },
    updated_at: {
      type: "timestamp",
      updateDate: true,
    },
  },
});
