package com.example.models;
//tạo class lấy id của student và course
public class StCourse {
			private int id;
			private int courseid;
			
			public StCourse(int id, int courseid) {
				super();
				this.id = id;
				this.courseid = courseid;
				
			}
			public int getId() {
				return id;
			}
			public void setId(int id) {
				this.id = id;
			}
			public int getCourseid() {
				return courseid;
			}
			public void setCourseid(int courseid) {
				this.courseid = courseid;
			}
			public StCourse() {
				super();
			}
			
}
