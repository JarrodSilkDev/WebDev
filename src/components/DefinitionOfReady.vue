<template>
  <v-card class="mb-5">
    <v-card-title class="text-h5 bg-primary text-white">
      Part 1: The "Definition of Ready" (DoR)
    </v-card-title>
    <v-card-text class="pa-4">
      <p class="mb-4">
        A User Story cannot be moved to Committed or pulled into a Sprint until it meets the following criteria:
      </p>
      <v-list density="compact">
        <v-list-item v-for="(item, index) in items" :key="index">
          <template v-slot:prepend>
            <v-checkbox-btn :model-value="true" readonly color="success"></v-checkbox-btn>
          </template>
          <v-list-item-title class="font-weight-bold">{{ item.title }}</v-list-item-title>
          <v-list-item-subtitle>{{ item.desc }}</v-list-item-subtitle>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script setup>
const items = [
  { title: 'Narrative', desc: 'Uses the "As a... I want... So that..." format.' },
  { title: 'Context', desc: 'Explains why this feature is being built.' },
  { title: 'Business Rules', desc: 'Explicitly lists validation and logic constraints.' },
  { title: 'Acceptance Criteria', desc: 'Includes at least one "Happy Path" and one "Negative Path" (Error state) using Gherkin syntax.' },
  { title: 'Assets', desc: 'Final Figma/Design links are attached (no "Drafts").' },
  { title: 'Tags', desc: 'Functional tags are added (e.g., Frontend, API).' },
]
</script>
