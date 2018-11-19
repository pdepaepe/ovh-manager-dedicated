import angular from 'angular';

import ducContract from './contract';

const moduleName = 'dedicatedUniverseComponents';

angular
  .module(moduleName, [
    ducContract,
  ]);

export default moduleName;
