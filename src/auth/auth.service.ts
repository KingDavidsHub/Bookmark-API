import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";


@Injectable()
export class AuthService {

  constructor(private prisma: PrismaService){}
  login() {
    return { msg: "I just signed in" };
  }

  signup() {
    return { msg: "I just signed up" };
  }
}
