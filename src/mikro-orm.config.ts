import { Post } from "./entities/Post";
import { User } from "./entities/User";
import { __prod__, dbUser, dbUserPass } from "./constants";
import { MikroORM } from "@mikro-orm/core";
import path from "path";

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"),
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  entities: [Post, User],
  dbName: "reddit-clone",
  type: "postgresql",
  debug: true,
  user: dbUser,
  password: dbUserPass,
} as Parameters<typeof MikroORM.init>[0];