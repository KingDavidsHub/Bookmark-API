import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
  imports:[PrismaModule],
  controllers: [AuthController], // handles request
  providers: [AuthService] //handling business logic
})
export class AuthModule {}
