const fs = require('fs');
const path = require('path');

module.exports.supplierTypes = fs.readFileSync(path.join(__dirname, 'supplierTypes.gql'), 'utf8');
