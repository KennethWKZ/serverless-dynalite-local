declare module "dynalite-kwz" {
  import { Server } from "http";

  type DynaliteOptions = {
    path?: string;
  };
  export default function dynalite(opts?: DynaliteOptions): Server;
}
