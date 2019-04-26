"use strict"

function SignInService()  {

    const service = this;

    service.info = {};

    service.setInfo = function(value){
        service.info = value;
        console.log("service.info = "+service.info+" which === \n{name: "+value.name+",\n password: "+value.password+"}");
    };
  }
    
angular
    .module("SignInApp")  // tells it what module/app it is a part of
    .service("SignInService", SignInService);  // defines the name of the service?