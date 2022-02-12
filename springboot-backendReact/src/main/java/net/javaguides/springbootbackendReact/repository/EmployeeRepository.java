package net.javaguides.springbootbackendReact.repository;

import net.javaguides.springbootbackendReact.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}
