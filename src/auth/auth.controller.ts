import { Controller, Post, Req } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { Request} from "express"
// Controllers are responsible for handling incoming requests and returning responses to the client.
@Controller("auth") //decorator- enables nest create a routing map by associating the class with the metadata
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("signup")
  signup(@Req() req: Request) {
    return this.authService.signup();
  }

  @Post("signin")
  signin() {
    return this.authService.login();
  }
}
