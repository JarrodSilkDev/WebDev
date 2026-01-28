<template>
  <v-container>
    <h1 class="text-h4 mb-6">User Story Creator</h1>

    <v-row>
      <!-- Title -->
      <v-col cols="12">
        <v-card class="pa-4" variant="outlined">
          <div class="d-flex align-center mb-2">
            <span class="text-h6">1. Title</span>
            <v-spacer></v-spacer>
            <v-btn
              color="info"
              variant="text"
              icon="mdi-help-circle"
              @click="showGuideline('title')"
            ></v-btn>
          </div>
          <v-text-field
            v-model="form.title"
            label="[Component/Area] - [Action] - [Short Context]"
            placeholder="Cart - Add 'Remove Item' Button - Summary Modal"
          ></v-text-field>
        </v-card>
      </v-col>

      <!-- Description Section -->
      <v-col cols="12">
        <h2 class="text-h5 my-4">2. Description</h2>
      </v-col>

      <!-- Narrative -->
      <v-col cols="12">
        <v-card class="pa-4" variant="outlined">
          <div class="d-flex align-center mb-2">
            <span class="text-h6">Narrative</span>
            <v-spacer></v-spacer>
            <v-btn
              color="info"
              variant="text"
              icon="mdi-help-circle"
              @click="showGuideline('narrative')"
            ></v-btn>
          </div>
          <v-textarea
            v-model="form.narrative"
            label="As a... I want... So that..."
            placeholder="As a [Specific Persona] I want to [Action] So that [Benefit/Value]"
            auto-grow
          ></v-textarea>
        </v-card>
      </v-col>

      <!-- Context -->
      <v-col cols="12">
        <v-card class="pa-4" variant="outlined">
          <div class="d-flex align-center mb-2">
            <span class="text-h6">Context & Background</span>
            <v-spacer></v-spacer>
            <v-btn
              color="info"
              variant="text"
              icon="mdi-help-circle"
              @click="showGuideline('context')"
            ></v-btn>
          </div>
          <v-textarea
            v-model="form.context"
            label="Current State & Goal"
            placeholder="Current State: ... Goal: ..."
            auto-grow
          ></v-textarea>
        </v-card>
      </v-col>

      <!-- Business Rules -->
      <v-col cols="12">
        <v-card class="pa-4" variant="outlined">
          <div class="d-flex align-center mb-2">
            <span class="text-h6">Business Rules & Logic</span>
            <v-spacer></v-spacer>
            <v-btn
              color="info"
              variant="text"
              icon="mdi-help-circle"
              @click="showGuideline('rules')"
            ></v-btn>
          </div>
          <v-textarea
            v-model="form.rules"
            label="Validation, Permissions, Limits"
            placeholder="* Rule 1..."
            auto-grow
          ></v-textarea>
        </v-card>
      </v-col>

      <!-- Assets -->
      <v-col cols="12">
        <v-card class="pa-4" variant="outlined">
          <div class="d-flex align-center mb-2">
            <span class="text-h6">Assets & References</span>
            <v-spacer></v-spacer>
            <v-btn
              color="info"
              variant="text"
              icon="mdi-help-circle"
              @click="showGuideline('assets')"
            ></v-btn>
          </div>
          <v-textarea
            v-model="form.assets"
            label="Figma, Tech Specs"
            placeholder="* Figma: https://..."
            auto-grow
          ></v-textarea>
        </v-card>
      </v-col>

      <!-- Out of Scope -->
      <v-col cols="12">
        <v-card class="pa-4" variant="outlined">
          <div class="d-flex align-center mb-2">
            <span class="text-h6">Out of Scope</span>
            <v-spacer></v-spacer>
            <v-btn
              color="info"
              variant="text"
              icon="mdi-help-circle"
              @click="showGuideline('outOfScope')"
            ></v-btn>
          </div>
          <v-textarea
            v-model="form.outOfScope"
            label="What are we NOT building?"
            auto-grow
          ></v-textarea>
        </v-card>
      </v-col>

      <!-- Acceptance Criteria Section -->
      <v-col cols="12">
        <h2 class="text-h5 my-4">3. Acceptance Criteria</h2>
      </v-col>

      <!-- Happy Path -->
      <v-col cols="12" md="6">
        <v-card class="pa-4" variant="outlined" height="100%">
          <div class="d-flex align-center mb-2">
            <span class="text-h6">Happy Path (Success)</span>
            <v-spacer></v-spacer>
            <v-btn
              color="info"
              variant="text"
              icon="mdi-help-circle"
              @click="showGuideline('happyPath')"
            ></v-btn>
          </div>
          <v-textarea
            v-model="form.happyPath"
            label="Given / When / Then"
            placeholder="Given [Context] When [Action] Then [Outcome]"
            auto-grow
          ></v-textarea>
        </v-card>
      </v-col>

      <!-- Negative Path -->
      <v-col cols="12" md="6">
        <v-card class="pa-4" variant="outlined" height="100%">
          <div class="d-flex align-center mb-2">
            <span class="text-h6">Negative Path (Error)</span>
            <v-spacer></v-spacer>
            <v-btn
              color="info"
              variant="text"
              icon="mdi-help-circle"
              @click="showGuideline('negativePath')"
            ></v-btn>
          </div>
          <v-textarea
            v-model="form.negativePath"
            label="Given / When / Then"
            placeholder="Given [Context] When [Invalid Action] Then [Error Message]"
            auto-grow
          ></v-textarea>
        </v-card>
      </v-col>

    </v-row>

    <!-- Actions -->
    <v-row class="mt-6">
      <v-col cols="12">
        <v-btn
          color="primary"
          size="large"
          prepend-icon="mdi-check-circle"
          @click="validate"
          class="mr-4"
        >
          Validate
        </v-btn>

        <v-btn
          :disabled="!isValidated"
          color="secondary"
          prepend-icon="mdi-content-copy"
          @click="copyTitle"
          class="mr-2"
        >
          Copy Title
        </v-btn>
        <v-btn
          :disabled="!isValidated"
          color="secondary"
          prepend-icon="mdi-content-copy"
          @click="copyDescription"
          class="mr-2"
        >
          Copy Description
        </v-btn>
        <v-btn
          :disabled="!isValidated"
          color="secondary"
          prepend-icon="mdi-content-copy"
          @click="copyAC"
        >
          Copy Acceptance Criteria
        </v-btn>
      </v-col>
    </v-row>

    <!-- Validation Report -->
    <v-expand-transition>
      <v-row v-if="report">
        <v-col cols="12">
          <v-alert
            v-if="report.valid"
            type="success"
            title="Validation Passed"
            text="Your User Story looks great! You can now copy the content."
            class="mt-4"
          ></v-alert>
          <v-alert
            v-else
            type="warning"
            title="Improvements Needed"
            class="mt-4"
          >
            <ul class="ml-4">
              <li v-for="(issue, idx) in report.issues" :key="idx">
                {{ issue }}
              </li>
            </ul>
          </v-alert>
        </v-col>
      </v-row>
    </v-expand-transition>

    <!-- Guidelines Dialog -->
    <v-dialog v-model="dialog" max-width="500">
      <v-card>
        <v-card-title class="bg-info text-white">
          Guidelines: {{ currentGuideline?.title }}
        </v-card-title>
        <v-card-text class="pa-4">
          <div v-html="currentGuideline?.content"></div>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="dialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-snackbar v-model="snackbar" timeout="2000" color="success">
      Copied to clipboard!
    </v-snackbar>
  </v-container>
</template>

<script setup>
import { ref, reactive } from 'vue'

const form = reactive({
  title: '',
  narrative: '',
  context: '',
  rules: '',
  assets: '',
  outOfScope: '',
  happyPath: '',
  negativePath: ''
})

const dialog = ref(false)
const currentGuideline = ref(null)
const report = ref(null)
const isValidated = ref(false)
const snackbar = ref(false)

const guidelines = {
  title: {
    title: 'Title Field',
    content: '<p><strong>Format:</strong> [Component/Area] - [Action] - [Short Context]</p><p><strong>Example:</strong> Cart - Add "Remove Item" Button - Summary Modal</p>'
  },
  narrative: {
    title: 'Narrative',
    content: '<p><strong>Format:</strong> As a [Specific Persona] I want to [Action] So that [Benefit/Value]</p><p>Never use "User". Be specific.</p>'
  },
  context: {
    title: 'Context & Background',
    content: '<p>Explain the "Before" and "After".</p><p><strong>Current State:</strong> What is broken/missing?</p><p><strong>Goal:</strong> What are we trying to achieve?</p>'
  },
  rules: {
    title: 'Business Rules & Logic',
    content: '<p>List non-negotiable constraints, validation, permissions, and hard limits.</p>'
  },
  assets: {
    title: 'Assets & References',
    content: '<p>Link to Figma, Tech Specs, etc.</p><p>Never describe UI in text if a picture exists.</p>'
  },
  outOfScope: {
    title: 'Out of Scope',
    content: '<p>Explicitly state what we are NOT doing.</p>'
  },
  happyPath: {
    title: 'Happy Path',
    content: '<p><strong>Format:</strong> Gherkin (Given / When / Then)</p><p>The standard scenario where everything works perfectly.</p>'
  },
  negativePath: {
    title: 'Negative Path',
    content: '<p><strong>Format:</strong> Gherkin (Given / When / Then)</p><p>What happens when the user makes a mistake or the system fails?</p>'
  }
}

function showGuideline(field) {
  currentGuideline.value = guidelines[field]
  dialog.value = true
}

const bannedWords = [
  { word: 'Fast', reason: 'Subjective.' },
  { word: 'Easy', reason: 'Subjective.' },
  { word: 'Modern', reason: 'Meaningless.' },
  { word: 'Robust', reason: 'Vague.' },
  { word: 'Bug-free', reason: 'Impossible.' }
]

function validate() {
  const issues = []

  // Title Check
  if (!form.title.includes('-')) {
    issues.push('Title should follow format: [Component] - [Action] - [Context]')
  }

  // Narrative Check
  const n = form.narrative.toLowerCase()
  if (!n.includes('as a') || !n.includes('i want') || !n.includes('so that')) {
    issues.push('Narrative must use "As a... I want... So that..." format.')
  }
  if (n.includes('as a user')) {
    issues.push('Narrative: Avoid using generic "User". Be specific (e.g., Guest, Admin).')
  }

  // Banned Words Check
  const allText = Object.values(form).join(' ').toLowerCase()
  bannedWords.forEach(bw => {
    if (allText.includes(bw.word.toLowerCase())) {
      issues.push(`Found banned word "${bw.word}". Reason: ${bw.reason}`)
    }
  })

  // AC Check
  const checkGherkin = (text, name) => {
    const t = text.toLowerCase()
    if (!t.includes('given') || !t.includes('when') || !t.includes('then')) {
      issues.push(`${name} must use Gherkin syntax (Given / When / Then).`)
    }
  }

  if (form.happyPath) checkGherkin(form.happyPath, 'Happy Path')
  else issues.push('Happy Path is required.')

  if (form.negativePath) checkGherkin(form.negativePath, 'Negative Path')
  else issues.push('Negative Path is required.')

  if (issues.length === 0) {
    report.value = { valid: true }
    isValidated.value = true
  } else {
    report.value = { valid: false, issues }
    isValidated.value = false // Require re-validation? The spec implies "Validate" tells where to make improvements.
    // If we want to allow copying even if invalid, we'd remove :disabled from buttons.
    // But spec says "Once completed... click Validate... (get feedback)... (then) Copy"
    // Usually implies Validation is a gate. But if the user ignores advice, maybe they should be allowed.
    // I will enable buttons only if valid to enforce "DoR".
  }
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    snackbar.value = true
  })
}

function copyTitle() {
  copyToClipboard(form.title)
}

function copyDescription() {
  const md = `### 📖 Narrative
${form.narrative}

---
### 🏗 Context & Background
${form.context}

---
### 🚦 Business Rules & Logic
${form.rules}

---
### 🔗 Assets & References
${form.assets}

---
### 🚫 Out of Scope
${form.outOfScope}`
  copyToClipboard(md)
}

function copyAC() {
  const md = `#### Scenario 1: Happy Path (Success)
${form.happyPath}

#### Scenario 2: Negative Path (Error)
${form.negativePath}`
  copyToClipboard(md)
}
</script>
