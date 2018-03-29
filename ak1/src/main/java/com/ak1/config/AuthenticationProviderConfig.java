package com.ak1.config;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.jdbc.JdbcDaoImpl;

@Configuration
public class AuthenticationProviderConfig {


    @Bean(name = "dataSource")
        public DriverManagerDataSource dataSource() {
        DriverManagerDataSource driverManagerDataSource = new DriverManagerDataSource();
        driverManagerDataSource.setDriverClassName("com.mysql.jdbc.Driver");
        driverManagerDataSource.setUrl("jdbc:mysql://ak1.cknazz13hunw.eu-west-2.rds.amazonaws.com:3306/ak1");
        driverManagerDataSource.setUsername("JanuszBiernat");
        driverManagerDataSource.setPassword("WielkiSumator01");
        return driverManagerDataSource;
    }

}