<script setup lang="ts">
import { injectStrict } from "../../helpers";
import { AccordionItemContextKey } from "./symbols";

const { isActive, panelId, toggleId } = injectStrict(AccordionItemContextKey);
</script>

<template>
  <section
    :id="panelId"
    :aria-labelledby="toggleId"
    :hidden="isActive === false"
    class="bg-gray-200 rounded-lg my-1 text-left p-5"
  >
    <slot />
  </section>
</template>
