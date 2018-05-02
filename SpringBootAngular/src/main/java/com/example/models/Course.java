package com.example.models;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="course")
public class Course {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="courseid")
	public int courseid;
	
	@Column(name="coursename")
	public String coursename;
	@JsonIgnore
	@ManyToMany(mappedBy = "course")
    private Set<Student> student;
	
	public Course() {
		super();
	}


	public Course(String coursename) {
		super();
		this.coursename = coursename;
	}


	public Course(String coursename, Set<Student> student) {
		super();
		this.coursename = coursename;
		this.student = student;
	}
	public int getCourseid() {
		return courseid;
	}
	
	public void setCourseid(int courseid) {
		this.courseid = courseid;
	}
	public String getCoursename() {
		return coursename;
	}
	public void setCoursename(String coursename) {
		this.coursename = coursename;
	}
	public Set<Student> getStudent() {
		return student;
	}
	public void setStudent(Set<Student> student) {
		this.student = student;
	}
     
    // standard constructors/getters/setters   
}
