import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
// Controllers are responsible for handling incoming requests and returning responses to the client.
@Controller("auth") //decorator- enables nest create a routing map by associating the class with the metadata
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("signup")
  signup() {
    return "I just signed up";
  }

  @Post("signin")
  signin() {
    return "I just signed in";
  }
}
