package com.example.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MainController {
	
	@RequestMapping("/index")
	public String welcome() {
		return "index.html";
	}
	
	@RequestMapping("/add_student")
		public String addStundent(){
			return "add_student.html";
		}
	
	@RequestMapping("/viewStudent")
	public String addStunsdent(){
		return "view_Student.html";
	}

	@RequestMapping("/edit_student")
	public String editStundent(){
		return "edit_student.html";
	}
	
	@RequestMapping("/viewCourse")
	public String listCourse(){
		return "view_Course.html";
	}
	@RequestMapping("/add_course")
	public String addCourse(){
		return "add_course.html";
	}
	@RequestMapping("/edit_course")
	public String edit_course(){
		return "edit_course.html";
	}
	
	@RequestMapping("/course_detail")
	public String course_detail(){
		return "course_detail.html";
	}

}
