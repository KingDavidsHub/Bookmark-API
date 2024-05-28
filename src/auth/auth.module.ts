import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";

@Module({
  controllers: [AuthController], // handles request
  providers: [AuthService] //handling business logic
})
export class AuthModule {}
