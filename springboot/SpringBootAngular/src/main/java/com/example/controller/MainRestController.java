package com.example.controller;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.models.Course;
import com.example.models.StCourse;
import com.example.models.Student;
import com.example.repository.CourseRepo;
import com.example.repository.StudentRepo;

@RestController
public class MainRestController {
	@Autowired
	private StudentRepo studentRepo;
	@Autowired
	private CourseRepo courseRepo;

	@RequestMapping(value = "/getAllStudent")
	public Iterable<Student> retrieveAllStudents() {
		return studentRepo.findAll();
	}

	@RequestMapping(value = "/viewStudent/{id}")
	public Student retrieveStudentById(@PathVariable("id") int id) {
		return studentRepo.findById(id).orElse(null);
	}
	@RequestMapping(value = "/viewStudent2/{id}")
	public Set<Course> retrieveStudentById1(@PathVariable("id") int id) {
		Student student = studentRepo.findById(id).orElse(null);
		return student.getCourse();
	}
	@RequestMapping(value = "/deleteStudent/{id}")
	public void deleteStudentById(@PathVariable("id") int id) {
		Student student = studentRepo.findById(id).orElse(null);
		studentRepo.delete(student);
	}

	

	@RequestMapping(value = "/add_student/")
	public void saveStudent(@RequestBody Student student) {
		studentRepo.save(student);
	}

	@RequestMapping(value = "/edit_student/")
	public void editStudent(@RequestBody Student student) {
		studentRepo.save(student);
	}

	@RequestMapping(value = "/add_course_student/")
	public void addCourseStudent(@RequestBody StCourse stcourse) {
		Course course = courseRepo.findById(stcourse.getCourseid()).orElse(null);
		Student student = studentRepo.findById(stcourse.getId()).orElse(null);
		student.getCourse().add(course);
		studentRepo.save(student);
		courseRepo.save(course);
	}
	@RequestMapping(value = "/delete_course_student/")
	public void deleteCourseStudent(@RequestBody StCourse stcourse) {
		Course course = courseRepo.findById(stcourse.getCourseid()).orElse(null);
		Student student = studentRepo.findById(stcourse.getId()).orElse(null);
		student.getCourse().remove(course);
		studentRepo.save(student);
		courseRepo.save(course);
	}

	// course
	@RequestMapping(value = "/getAllCourse")
	public Iterable<Course> retrieveAllCourses() {
		return courseRepo.findAll();
	}

	@RequestMapping(value = "/deleteCourse/{courseid}")
	public void deleteCourseById(@PathVariable("courseid") int courseid) {
		Course course = courseRepo.findById(courseid).orElse(null);
		courseRepo.delete(course);
	}

	@RequestMapping(value = "/add_course/")
	public void saveCourse(@RequestBody Course course) {
		courseRepo.save(course);
	}

	@RequestMapping(value = "/viewCourse/{courseid}")
	public Course retrieveCourseById(@PathVariable("courseid") int courseid) {
		return courseRepo.findById(courseid).orElse(null);
	}
	
	@RequestMapping(value = "/edit_course/")
	public void editCourse(@RequestBody Course course) {
		courseRepo.save(course);
	}

	@RequestMapping(value = "/numberofStudent/{courseid}")
	public int numberofStCourse(@PathVariable int courseid) {
		return courseRepo.findStudentByCourseId(courseid);
	}

	@RequestMapping(value = "/delete_studentofcourse/")
	public void deleteStudentofCourse(@RequestBody StCourse stcourse) {
		Course course = courseRepo.findById(stcourse.getCourseid()).orElse(null);
		Student student = studentRepo.findById(stcourse.getId()).orElse(null);
		course.getStudent().remove(student);
		studentRepo.save(student);
		courseRepo.save(course);
	}

	@RequestMapping(value = "/courseDetail/{courseid}")
	public Set<Student> viewStudentByCourseId(@PathVariable("courseid") int courseid) {
		Course course = courseRepo.findById(courseid).orElse(null);
		return course.getStudent();
	}

}
