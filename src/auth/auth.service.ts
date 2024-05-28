import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService {
  login() {
    return { msg: "I just signed in" };
  }

  signup() {
    return { msg: "I just signed up" };
  }
}
