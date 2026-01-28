<template>
  <v-card class="mb-5">
    <v-card-title class="text-h5 bg-primary text-white">
      Part 4: The Official Templates
    </v-card-title>
    <v-card-text class="pa-4">

      <div class="mb-6">
        <div class="d-flex justify-space-between align-center mb-2">
          <h3 class="text-h6">Template A: For the ADO "Description" Field</h3>
          <v-btn
            color="secondary"
            size="small"
            prepend-icon="mdi-content-copy"
            @click="copy(templateA)"
          >
            Copy Markdown
          </v-btn>
        </div>
        <p class="text-caption mb-2">Copy the markdown block below.</p>
        <v-sheet color="grey-lighten-4" class="pa-4 rounded code-block">
          <pre>{{ templateA }}</pre>
        </v-sheet>
      </div>

      <v-divider class="my-6"></v-divider>

      <div>
        <div class="d-flex justify-space-between align-center mb-2">
          <h3 class="text-h6">Template B: For the ADO "Acceptance Criteria" Field</h3>
          <v-btn
            color="secondary"
            size="small"
            prepend-icon="mdi-content-copy"
            @click="copy(templateB)"
          >
            Copy Markdown
          </v-btn>
        </div>
        <p class="text-caption mb-2">Copy the markdown block below.</p>
        <v-sheet color="grey-lighten-4" class="pa-4 rounded code-block">
          <pre>{{ templateB }}</pre>
        </v-sheet>
      </div>

    </v-card-text>
    <v-snackbar v-model="snackbar" timeout="2000" color="success">
      Copied to clipboard!
    </v-snackbar>
  </v-card>
</template>

<script setup>
import { ref } from 'vue'

const snackbar = ref(false)

const templateA = `### 📖 Narrative
**As a** [Specific Persona]
**I want to** [Action]
**So that** [Benefit/Value]

---
### 🏗 Context & Background
* **Current State:** [What is currently broken/missing?]
* **Goal:** [What are we trying to achieve?]

---
### 🚦 Business Rules & Logic
* [Rule 1: e.g., Validation logic]
* [Rule 2: e.g., Permission requirements]
* [Rule 3: e.g., Data limits]

---
### 🔗 Assets & References
* **Figma:** [Link]
* **Tech Spec:** [Link]

---
### 🚫 Out of Scope
* [What are we NOT building?]`

const templateB = `#### Scenario 1: Happy Path (Success)
* **Given** [Context/Page]
* **When** [User Action]
* **Then** [Expected Outcome]
* **And** [Secondary Outcome]

#### Scenario 2: Negative Path (Error)
* **Given** [Context/Page]
* **When** [Invalid Action]
* **Then** [Specific Error Message]
* **And** [System State]`

function copy(text) {
  navigator.clipboard.writeText(text).then(() => {
    snackbar.value = true
  }).catch(err => {
    console.error('Failed to copy: ', err)
    // Fallback?
    alert('Failed to copy. Please select and copy manually.')
  })
}
</script>

<style scoped>
.code-block {
  overflow-x: auto;
}
</style>
