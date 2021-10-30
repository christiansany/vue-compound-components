<script setup lang="ts">
import { ref, provide } from "vue";
import { AccordionContextKey } from "./symbols";

const { multiple } = defineProps<{ multiple?: boolean }>();
const activePanels = ref<string[]>([]);

function closePanel(id: string) {
  const index = activePanels.value.findIndex((panel) => panel === id);
  if (index > -1) {
    activePanels.value.splice(index, 1);
  }
}

function closeAllPanels() {
  activePanels.value = [];
}

function openPanel(id: string) {
  activePanels.value.push(id);
}

function handleToggleClick(id: string) {
  if (activePanels.value.includes(id)) {
    closePanel(id);
  } else {
    if (!multiple) {
      closeAllPanels();
    }
    openPanel(id);
  }
}

provide(AccordionContextKey, {
  activePanels,
  handleToggleClick,
});
</script>

<template>
  <slot />
</template>
