var myApp = angular.module('myApp', []);
myApp.controller('myCtrl', function($scope, $http,$window) {
    //get all student
    $http.get("http://localhost:8082/getAllStudent")
    .then(function(response) {
        $scope.students= response.data;       
    },
    function(errResponse){
            console.error('Error while fetching Users');
            deferred.reject(errResponse);
            $scope.error='error getting'
    });
    
   

    //add student
    $scope.addStudent= function(student){
   	 var student={
   		        id: $scope.id,
   		   		name:$scope.name,
   		   		address:$scope.address
   		   		
   		   	 };

        $http({
            method : 'POST',
            url : 'http://localhost:8082/add_student/',
            data: student

//            params: {studentName: $scope.studentName,studentAge: $scope.studentAge,studentLocation: $scope.studentLocation}
        }).then(function(response) {
                $window.location.href='http://localhost:8082';
                console.log("thanh cong roi")
                },function(errresponse){
                deferred.reject(errResponse);
                $scope.error='error getting';
                	alert("failse")
            });
    };
     //delete by id
    $scope.deleteStudent = function(id) {
                    $http({
                        method : 'GET',
                        url : 'http://localhost:8082/deleteStudent/'+id,
                    }).then(function(response) {
                    	$window.location.href='http://localhost:8082';
    						},function(errResponse){
				            console.error('Error while fetching Users');
				            deferred.reject(errResponse);
				            $scope.error='error getting'
   				 		});
					};
	//find student by id to view and edit
	$scope.viewStudent = function(id) {
                    $http({
                        method : 'GET',
                        url : 'http://localhost:8082/viewStudent/'+id,
                    }).then(function(response) {
                    	$window.localStorage.setItem('testObject',JSON.stringify(response.data));	
                    	console.log($scope.students1)
    						},function(errResponse){
				            console.error('Error while fetching Users');
				            deferred.reject(errResponse);
				            $scope.error='error getting'
   				 		});
                    
                    $http({
                        method : 'GET',
                        url : 'http://localhost:8082/viewStudent2/'+id,
                    }).then(function(response) {
                    	$window.localStorage.setItem('testObject2',JSON.stringify(response.data));	
    						},function(errResponse){
				            console.error('Error while fetching Users');
				            deferred.reject(errResponse);
				            $scope.error='error getting'
   				 		});
                };	
             $scope.students1=JSON.parse(localStorage.getItem('testObject'));
             $scope.students2=JSON.parse(localStorage.getItem('testObject2'));
         //edit student
          $scope.editStudent2= function(student){
                   var student={
                		 id: $scope.students1.id, 
                		 name: $scope.name,
                		 address: $scope.address
                	 };
                     $http({
                         method : 'POST',
                         url : 'http://localhost:8082/edit_student/',
                         data: student
                     }).then(function(response) {
                             $window.location.href='http://localhost:8082';
                             console.log("thanh cong roi")

                             },function(errresponse){
                             
                             $scope.error='error getting';
                                alert("fail")
                         });
                 };

          //get course by id
          $scope.getCoursebyId= function(id){
                                $http({
                                      method : 'GET',
                                      url : 'http://localhost:8082/viewCourse/'+id,
                                  }).then(function(response) {
                                  $window.localStorage.setItem('addObject',JSON.stringify(response.data));
                                    // $window.location.href='http://localhost:8082/viewStudent';
                                  
                              },function(errResponse){
                                  console.error('Error while fetching Users');
                                  deferred.reject(errResponse);
                                  $scope.error='error getting'
                                });

          };
        
        
});

//view_Student.html
myApp.controller('myCtrl2', function($scope, $http,$window) {
	$scope.students1=JSON.parse(localStorage.getItem('testObject'));
    $scope.students2=JSON.parse(localStorage.getItem('testObject2'));
    var range = [];
                for(var i=0;i<Object.size($scope.students2);i++) {
                  range.push(i);
                }
                $scope.size = range;

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
     //add course for student
         
              $scope.addCourseForStudent=function(stcourse){
                    var stcourse ={
                      id:$scope.id,
                      courseid:$scope.courseid
                  };
                    
                    
                    $http({
                         method : 'POST',
                         url : 'http://localhost:8082/add_course_student/',
                         data: stcourse
                     }).then(function(response) {
                             $window.location.href='http://localhost:8082/viewStudent';
                             console.log("thanh cong roi")

                             },function(errresponse){
                             
                             $scope.error='error getting';
                                alert("fail")
                         });
         };

         //delete course for student

         $scope.deleteStudentCourse=function(students1id,deletedcourseid){

         		var stcourse2={
         			id:students1id,
         			courseid:deletedcourseid
         		};
         		 $http({
                         method : 'POST',
                         url: 'http://localhost:8082/delete_course_student/',
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
