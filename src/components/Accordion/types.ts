import { Ref, ComputedRef } from "vue";

export interface AccordionContext {
  activePanels: Ref<string[]>;
  handleToggleClick: (id: string) => void;
}

export interface AccordionItemContext {
  id: string;
  isActive: ComputedRef<boolean>;
  toggleId: ComputedRef<string>;
  panelId: ComputedRef<string>;
}
