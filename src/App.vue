<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import {
  Accordion,
  AccordionItem,
  AccordionToggle,
  AccordionPanel,
} from "./components/Accordion";
</script>

<template>
  <div class="min-h-screen bg-gray-100 p-6 flex flex-col justify-center">
    <div class="mx-auto w-96 max-w-full">
      <Accordion :multiple="true">
        <AccordionItem id="1">
          <template v-slot:default="{ id, isActive }">
            <AccordionToggle>
              Section {{ id }} {{ isActive ? "(active)" : null }}
            </AccordionToggle>
            <AccordionPanel>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
                voluptatum.
              </p>
            </AccordionPanel>
          </template>
        </AccordionItem>
        <AccordionItem id="2">
          <AccordionToggle> Section 2 </AccordionToggle>
          <AccordionPanel>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
              voluptatum.
            </p>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem id="3">
          <AccordionToggle> Section 3 </AccordionToggle>
          <AccordionPanel>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
              voluptatum.
            </p>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  </div>
</template>
