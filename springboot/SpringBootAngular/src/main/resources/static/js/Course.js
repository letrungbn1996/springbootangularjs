var myApp = angular.module('myApp', []);
myApp.controller('myCtrl3', function($scope, $http,$window) {

	//get all course
    $http.get("http://localhost:8082/getAllCourse")
    .then(function(response) {
        $scope.courses= response.data; 

    },
    function(errResponse){
            console.error('Error while fetching Users');
            deferred.reject(errResponse);
            $scope.error='error getting'
    });
    //get number of course's student
   
    $scope.init = function(id){
    	   $scope.number = {};
                $http.get('http://localhost:8082/numberofStudent/'+id)
                .then(function (response) {
                    $scope.number[id] = response.data;// gan gia tri cung voi id cua no
                })
                ,function(errResponse){
		            console.error('Error while fetching Users');
		            deferred.reject(errResponse);
		            $scope.error='error getting'
                }
};

  
     //delete by id
    $scope.deleteCourse = function(id) {
                    $http({
                        method : 'GET',
                        url : 'http://localhost:8082/deleteCourse/'+id,
                    }).then(function(response) {
                    	$window.location.href='http://localhost:8082/viewCourse';
    						},function(errResponse){
				            console.error('Error while fetching Users');
				            deferred.reject(errResponse);
				            $scope.error='error getting'
   				 		});
					};

	//add course
	$scope.addCourse= function(course){
                	 var course={
                		        courseid: $scope.studentid,
                		   		coursename:$scope.coursename
                		   	 };
             
                     $http({
                         method : 'POST',
                         url : 'http://localhost:8082/add_course/',
                         data: course
                             }).then(function(response) {
                             $window.location.href='http://localhost:8082/viewCourse';
                             console.log("thanh cong roi")
                             },function(errresponse){
                             deferred.reject(errResponse);
                             $scope.error='error getting';
                             	alert("failse")
                         });
                 };

     //view course
     
     	$scope.viewCourse = function(id) {
                    $http({
                        method : 'GET',
                        url : 'http://localhost:8082/viewCourse/'+id,
                    }).then(function(response) {
                    	$window.localStorage.setItem('testObject3',JSON.stringify(response.data));	
    						},function(errResponse){
				            console.error('Error while fetching Users');
				            deferred.reject(errResponse);
				            $scope.error='error getting'
   				 		});
                 
                $http({
                        method : 'GET',
                        url : 'http://localhost:8082/courseDetail/'+id,
                    }).then(function(response) {
                        $window.localStorage.setItem('testObject5',JSON.stringify(response.data));  
                            },function(errResponse){
                            console.error('Error while fetching Users');
                            deferred.reject(errResponse);
                            $scope.error='error getting'
                        });
                };	
            $scope.courses1=JSON.parse(localStorage.getItem('testObject3'));
            $scope.courses2=JSON.parse(localStorage.getItem('testObject5'));
             console.log($scope.courses2)  ; 
             var range = [];
                for(var i=0;i<Object.size($scope.courses2);i++) {
                  range.push(i);
                }
                $scope.size = range;
     //edit course

      $scope.editCourse= function(course){
                   var course={
                		 courseid: $scope.courses1.courseid, 
                		 coursename: $scope.coursename
                	 };
                     $http({
                         method : 'POST',
                         url : 'http://localhost:8082/edit_course/',
                         data: course
                     }).then(function(response) {
                             $window.location.href='http://localhost:8082/viewCourse';
                             console.log("thanh cong roi")

                             },function(errresponse){
                             
                             $scope.error='error getting';
                                alert("fail")
                         });
                 };
                 $scope.deleteStudentofCourse=function(deletedstudents1id,courses2id){

              		var stcourse2={
              			id:deletedstudents1id,
              			courseid:courses2id
              		};
              		 $http({
                              method : 'POST',
                              url : 'http://localhost:8082/delete_studentofcourse/',
                              data: stcourse2
                          }).then(function(response) {
                         	 	alert("Xóa Thành Công");
                                 $window.location.href='http://localhost:8082';
                                 

                                  },function(errresponse){
                                  
                                  $scope.error='error getting';
                                     alert("fail")
                              });
              };

});

    //dinh nghia ham size
    Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};