import { Type } from "@angular/core";

export interface CmdHistory {
  command: string;
  component: Type<any>;
  message?: string;
}
