// sample angular code





(function () {

  'use strict';

  angular
      .module('currentAmerica')
      .controller('DashboardCtrl', DashboardCtrl);
  DashboardCtrl.$inject = [ 'energyDataService'];


  function DashboardCtrl () {
    var vm = this;
    vm.showPieGraphs = true;
    vm.togglePieGraphs = function(){
      vm.showPieGraphs = !vm.showPieGraphs;
      console.log("kyle sucks")
    }
    
  }

})();


//On Map appear fire Get Current Year append to Map data
//