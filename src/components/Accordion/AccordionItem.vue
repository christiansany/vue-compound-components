<script setup lang="ts">
import { provide, computed } from "vue";
import { injectStrict } from "../../helpers";
import { AccordionContextKey, AccordionItemContextKey } from "./symbols";

const { id } = defineProps<{ id: string }>();
const { activePanels } = injectStrict(AccordionContextKey);

const isActive = computed(() => activePanels.value.includes(id));
const toggleId = computed(() => `accordion-toggle-${id}`);
const panelId = computed(() => `accordion-panel-${id}`);

provide(AccordionItemContextKey, {
  id,
  isActive,
  toggleId,
  panelId,
});
</script>

<template>
  <slot v-bind="{ id, isActive, toggleId, panelId }" />
</template>
