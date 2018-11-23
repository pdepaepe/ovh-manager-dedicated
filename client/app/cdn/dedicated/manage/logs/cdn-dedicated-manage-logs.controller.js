angular.module('App').controller(
  'CdnLogsCtrl',
  class CdnLogsCtrl {
    constructor($scope, $stateParams, OvhTailLogs, Cdn) {
      this.$scope = $scope;
      this.$stateParams = $stateParams;
      this.OvhTailLogs = OvhTailLogs;
      this.cdn = Cdn;
    }

    $onInit() {
      this.logger = new this.OvhTailLogs({
        source: () => this.cdn
          .getLogs(this.$stateParams.productId)
          .then(logs => logs.url),
        delay: 2000,
      });

      this.startLog();
    }

    $onDestroy() {
      this.logger.stop();
    }

    stopLog() {
      this.logger.stop();
    }

    startLog() {
      this.logger.log();
    }

    getLogs() {
      this.logger = this.logger.logs;
      return this.logger;
    }
  },
);
