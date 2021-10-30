import { InjectionKey } from "vue";
import { AccordionContext, AccordionItemContext } from "./types";

export const AccordionContextKey: InjectionKey<AccordionContext> =
  Symbol("AccordionContext");

export const AccordionItemContextKey: InjectionKey<AccordionItemContext> =
  Symbol("AccordionItemContext");
