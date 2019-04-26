"use strict";

function SignInController(SignInService){
    
    const ctrl = this;

    ctrl.SignInService = SignInService;

    ctrl.name = "John Doe";
    ctrl.password = "password"
};


angular
.module("SignInApp")
.component("signIn", {
    template: `
        <input type="text" placeholder="Username" ng-model="$ctrl.name"></input>
        <input type="text" placeholder="Password" ng-model="$ctrl.password"></input>
        <button ng-click="$ctrl.SignInService.setInfo({name: $ctrl.name, password: $ctrl.password})">Submit</button>
        `,
    controller: SignInController
});