const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const resourceSchema = new Schema({
   /* id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },*/
  animalStock: { type: Number},
  veg: { type: Number},
  gold: { type: Number},
  energy: { type: Number},
  coal: { type: Number},
  oil: { type: Number},
  education: { type: Number},
  security: { type: Number},
  health: { type: Number},
  infrastructureQuality: { type: Number},
  environmentalSustainability: { type: Number},
  population: { type: Number},
  unemployment: { type: Number},
  peopleFood: { type: Number}, // Seeds for planting crops
  animalFood: { type: Number}, // Animal feed for livestock
  nutrients: { type: Number}, // Nutrients for hydroponic farming
  constructionMaterials: { type: Number}, // Construction materials for building projects
  fertilizers: { type: Number}, // Fertilizers for farming projects
  chemicalFertilizers: { type: Number}, // Chemical fertilizers for intensive farming
  pesticides: { type: Number}, // Pesticides for pest control in farming
  trees: { type: Number} // Trees for agroforestry projects
  
});

module.exports = mongoose.model('resources', resourceSchema);
