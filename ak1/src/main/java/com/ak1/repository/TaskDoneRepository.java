package com.ak1.repository;

import com.ak1.model.TaskDone;
import com.ak1.model.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface TaskDoneRepository extends CrudRepository<TaskDone, Long> {
    @Query(value="select t from TaskDone t where t.lastname = :lastname", nativeQuery = true)
    User findByUsername(@Param("lastname") String username);
}
