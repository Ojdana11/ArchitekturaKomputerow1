package com.ak1.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

@Configuration
public class AuthenticationProviderConfig {


    @Bean(name = "dataSource")
        public DriverManagerDataSource dataSource() {
        DriverManagerDataSource driverManagerDataSource = new DriverManagerDataSource();
        driverManagerDataSource.setDriverClassName("com.mysql.jdbc.Driver");
        driverManagerDataSource.setUrl("jdbc:mysql://localhost:3306/ak1");
        driverManagerDataSource.setUsername("root");
        driverManagerDataSource.setPassword("1221");
        return driverManagerDataSource;
    }

}