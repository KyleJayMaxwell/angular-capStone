// sample angular code





(function () {

  'use strict';

  angular
      .module('currentAmerica')
      .controller('DashboardCtrl', DashboardCtrl);
  DashboardCtrl.$inject = [ 'energyDataService'];


  function DashboardCtrl () {
    var vm = this;
    vm.showPieGraphs = false;
    vm.showUsMap = false;
    vm.toggleUsMap = function(){
      vm.showUsMap = !vm.showUsMap;
    }
    vm.togglePieGraphs = function(){
      vm.showPieGraphs = !vm.showPieGraphs;
    }
    
   
  }

})();


//On Map appear fire Get Current Year append to Map data
//