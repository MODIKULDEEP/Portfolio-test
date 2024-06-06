import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CommentServiceBase } from "./base/comment.service.base";

@Injectable()
export class CommentService extends CommentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
