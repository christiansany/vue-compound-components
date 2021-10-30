<script setup lang="ts">
import { injectStrict } from "../../helpers";
import { AccordionContextKey, AccordionItemContextKey } from "./symbols";

const { handleToggleClick } = injectStrict(AccordionContextKey);
const { id, isActive, panelId, toggleId } = injectStrict(
  AccordionItemContextKey
);
</script>

<template>
  <button
    :id="toggleId"
    type="button"
    :aria-expanded="isActive ? 'true' : 'false'"
    :aria-controls="panelId"
    @click="() => handleToggleClick(id)"
    class="
      block
      w-full
      p-3
      my-1
      rounded-lg
      text-white
      bg-gradient-to-r
      from-blue-600
      to-pink-800
      focus:ring-4
    "
  >
    <slot />
  </button>
</template>
