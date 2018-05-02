package com.example.repository;
import org.springframework.data.repository.CrudRepository;

import com.example.models.Student;
public interface StudentRepo extends CrudRepository<Student, Integer>{
}
