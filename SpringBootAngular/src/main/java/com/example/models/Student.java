package com.example.models;
import java.util.Set;

import javax.persistence.Access;
import javax.persistence.AccessType;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
@Entity
@Table(name="student")
public class Student {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id")
	public int id;

	@Column(name="name")
	public String name;
	@Column(name="address")
	public String address;
	
	private Set<Course> course;
	
	@Access(AccessType.PROPERTY)
	@JsonIgnore
	@ManyToMany(
		fetch = FetchType.LAZY,
		cascade = { 
			    CascadeType.PERSIST, 
			    CascadeType.MERGE})
    @JoinTable(
        name = "studentcourse", 
        joinColumns = { @JoinColumn(name = "id") }, 
        inverseJoinColumns = { @JoinColumn(name = "courseid") }
    )
	public Set<Course> getCourse() {
		return course;
	}
	public void setCourse(Set<Course> course) {
		this.course = course;
	}
	public Student() {
		super();
	}
	
	public Student(String name, String address) {
		super();
		this.name = name;
		this.address = address;
		
	}
	public Student(String name, String address, Set<Course> course) {
		super();
		this.name = name;
		this.address = address;
		
		this.course = course;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	
	
	
}