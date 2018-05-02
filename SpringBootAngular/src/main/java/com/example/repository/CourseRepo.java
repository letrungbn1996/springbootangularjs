package com.example.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.example.models.Course;

public interface CourseRepo extends CrudRepository<Course, Integer>{
	@Query("select size(u.student) from Course u where u.courseid=:courseid")
	int findStudentByCourseId(@Param("courseid")Integer courseid);
}
