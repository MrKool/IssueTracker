'use strict';
app.controller('TrackerController', ['$scope', function ($scope) {
        $scope.user = 'Guest';
        $scope.issueNo = 0;
        $scope.showModal = false;
        $scope.addModal = false;
        $scope.detailModal = false;
        this.issues = [];
        $scope.loginSubmit = function() {
             window.alert("email :"+$scope.name);
            $scope.showModal = !$scope.showModal;
            
        };
        $scope.addSubmit = function() {
             window.alert("Hi there!");
            $scope.addModal = !$scope.addModal;
            
        };

        $scope.login = function() {
            //window.alert("Hi " + $scope.user);
             $scope.showModal = !$scope.showModal; 
        };
        $scope.add = function () {
            $scope.addModal = !$scope.addModal;
        };
        $scope.detailsPage = function () {
            $scope.detailModal = !$scope.detailModal;
        };
        this.increment = function (args) {
            return (args = args + 1);
        };
        function Issue(args) {
            this.issueNo = args.issueNo;
            this.defect = args.defect;
            this.descr = args.descr;
            this.dateOpened = args.dateOpened;
            this.openedBy = args.openedBy;
            this.fixedBy = args.fixedBy;
            this.closedBy = args.closedBy;
            this.status = args.status;
            this.dateFixed = args.dateFixed;
            this.appln = args.appln;
            this.dateClosed = args.dateClosed;
            this.remarks = args.remarks;
        }
        this.issues = [
            new Issue({
                issueNo : ++$scope.issueNo,
                defect : "Defect",
                descr : "PDA edittext box is not working",
                dateOpened : "15/09/2015",
                openedBy : "Manoj",
                fixedBy : "Suresh",
                closedBy : "Manoj",
                status : "Closed",
                dateFixed : "18/09/2015",
                appln : "PDA",
                dateClosed : "18/09/2015",
                remarks : "Steps to reproduce ...."
            }),
            new Issue({
                issueNo : ++$scope.issueNo,
                defect : "Defect",
                descr : "ICO detailed report",
                dateOpened : "15/09/2015",
                openedBy : "Manoj",
                fixedBy : "Sagarika",
                closedBy : "Manoj",
                status : "Closed",
                dateFixed : "18/09/2015",
                appln : "Server",
                dateClosed : "18/09/2015",
                remarks : "Steps to reproduce ...."
            }),
            new Issue({
                issueNo : ++$scope.issueNo,
                defect : "Defect",
                descr : "ICO detailed report",
                dateOpened : "15/09/2015",
                openedBy : "Manoj",
                fixedBy : "Sagarika",
                closedBy : "Manoj",
                status : "Closed",
                dateFixed : "18/09/2015",
                appln : "Server",
                dateClosed : "18/09/2015",
                remarks : "Steps to reproduce ...."
            })
        ];
        this.issues.push(
            new Issue({
                issueNo : ++$scope.issueNo,
                defect : "CR",
                descr : "StoreCheck is not working",
                dateOpened : "15/09/2015",
                openedBy : "Manoj",
                fixedBy : "Suresh",
                closedBy : "Manoj",
                status : "Closed",
                dateFixed : "18/09/2015",
                appln : "PDA",
                dateClosed : "18/09/2015",
                remarks : "Steps to reproduce ...."
            })
        );
    }]);

app.directive('modal',  function () {
    return {
      template: '<div class="modal fade">' + 
          '<div class="modal-dialog">' + 
            '<div class="modal-content">' + 
              '<div class="modal-header">' + 
                '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' + 
                '<h4 class="modal-title">{{ title }}</h4>' + 
              '</div>' + 
              '<div class="modal-body" ng-transclude></div>' + 
            '</div>' + 
          '</div>' + 
        '</div>',
      restrict: 'E',
      transclude: true,
      replace:true,
      scope:true,
      link: function postLink(scope, element, attrs) {
        scope.title = attrs.title;

        scope.$watch(attrs.visible, function(value){
          if(value == true)
            $(element).modal('show');
          else
            $(element).modal('hide');
        });

        $(element).on('shown.bs.modal', function(){
          scope.$apply(function(){
            scope.$parent[attrs.visible] = true;
          });
        });

        $(element).on('hidden.bs.modal', function(){
          scope.$apply(function(){
            scope.$parent[attrs.visible] = false;
          });
        });
      }
    };
  });
