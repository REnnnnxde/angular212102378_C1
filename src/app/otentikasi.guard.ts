import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const otentikasiGuard: CanActivateFn = (route, state) => {
  console.log("Otentikasi dimulai");

  var userId = sessionStorage.getItem("userId");
  console.log("userId : " + userId);

  if (userId == null) {
    // console.log('Otentikasi gagal');
    // return false;
  } else if (userId == "undefined") {
    // console.log('userId == undefined');
    // return false;
  } else if (userId == "") {
    // console.log("userId == ''");
    // return false;
  } else {
    return true;
  }

  inject(Router).navigate(["/login"]);
  return false;
};

