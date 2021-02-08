package com.example.accessingdatamysql.service;

//import java.util.Optional;

import com.example.accessingdatamysql.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;


}
