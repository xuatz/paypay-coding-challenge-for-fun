const { Sequelize, DataTypes, Deferrable } = require('sequelize');

const sequelize = new Sequelize('sfs', 'sfs', 'verysecuresfspassword', {
  host: 'localhost',
  dialect: 'mysql',
});

const Employee = sequelize.define('Employee', {
  id: {
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  isAdmin: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

const PerformanceReview = sequelize.define('PerformanceReview', {
  // Model attributes are defined here
  id: {
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  revieweeId: {
    type: DataTypes.UUID,
    references: {
      model: Employee,
      key: 'id',
      deferrable: Deferrable.INITIALLY_IMMEDIATE,
    },
  },
  description: {
    type: DataTypes.TEXT,
  },
});

const PerformanceReviewAssignment = sequelize.define('PerformanceReviewAssignment', {
  feedback: DataTypes.TEXT,
});
Employee.belongsToMany(PerformanceReview, { through: 'PerformanceReviewAssignment' });
PerformanceReview.belongsToMany(Employee, { through: 'PerformanceReviewAssignment' });

(async () => {
  await sequelize.sync();
})();

module.exports = {
  Employee,
  PerformanceReview,
  PerformanceReviewAssignment,
};
