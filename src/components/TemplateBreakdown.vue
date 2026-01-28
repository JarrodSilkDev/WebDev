<template>
  <v-card class="mb-5">
    <v-card-title class="text-h5 bg-primary text-white">
      Part 2: The Template Breakdown
    </v-card-title>
    <v-card-text class="pa-4">
      <p class="mb-4">
        This section explains exactly how to fill out the Azure DevOps template, following the order of the fields in the Work Item.
      </p>

      <v-expansion-panels variant="accordion">

        <!-- 1. The Title Field -->
        <v-expansion-panel>
          <v-expansion-panel-title class="font-weight-bold">1. The Title Field</v-expansion-panel-title>
          <v-expansion-panel-text>
            <p><strong>Format:</strong> [Component/Area] - [Action] - [Short Context]</p>
            <p><strong>What is it?</strong> A scannable summary for the Board view.</p>
            <p><strong>Why it matters:</strong> Titles are often truncated. Putting the "Component" first allows developers to scan the backlog quickly.</p>
            <v-alert type="error" density="compact" class="mb-2 mt-2" variant="tonal">
              <strong>Bad Example:</strong> Add a button (Too vague)
            </v-alert>
            <v-alert type="success" density="compact" variant="tonal">
              <strong>Good Example:</strong> Cart - Add 'Remove Item' Button - Summary Modal
            </v-alert>
          </v-expansion-panel-text>
        </v-expansion-panel>

        <!-- 2. The Description Field -->
        <v-expansion-panel>
          <v-expansion-panel-title class="font-weight-bold">2. The Description Field</v-expansion-panel-title>
          <v-expansion-panel-text>
            <p>In Azure DevOps, this field is the "Context Container." It defines the problem space and the rules of engagement.</p>

            <div class="mt-4">
              <h4 class="text-h6">Section A: The Narrative</h4>
              <p><strong>Template Tag:</strong> ### 📖 Narrative</p>
              <p><strong>Format:</strong> As a [Specific Persona] I want to [Action] So that [Benefit/Value]</p>
              <p><strong>Guideline:</strong> Persona: Never use "User." Be specific. Value: If you cannot write the "So that," the feature might not be necessary.</p>
              <div class="bg-grey-lighten-4 pa-2 rounded mt-2">
                <em>Example: As a Registered Customer I want to view my past order history So that I can re-order items I liked without searching for them again.</em>
              </div>
            </div>

            <v-divider class="my-4"></v-divider>

            <div>
              <h4 class="text-h6">Section B: Context & Background</h4>
              <p><strong>Template Tag:</strong> ### 🏗 Context & Background</p>
              <p><strong>Guideline:</strong> Briefly explain the "Before" and "After." Developers solve problems better when they know the history.</p>
              <div class="bg-grey-lighten-4 pa-2 rounded mt-2">
                <em>Current State: Users currently have to call Support to get invoice copies. Goal: Allow users to download PDF invoices directly to reduce Support volume.</em>
              </div>
            </div>

            <v-divider class="my-4"></v-divider>

            <div>
              <h4 class="text-h6">Section C: Business Rules & Logic</h4>
              <p><strong>Template Tag:</strong> ### 🚦 Business Rules & Logic</p>
              <p><strong>Guideline:</strong> List non-negotiable constraints that don't fit into a specific "flow." This includes validation, permissions, and hard limits.</p>
            </div>

            <v-divider class="my-4"></v-divider>

            <div>
              <h4 class="text-h6">Section D: Assets & References</h4>
              <p><strong>Template Tag:</strong> ### 🔗 Assets & References</p>
              <p><strong>Guideline:</strong> Never describe UI in text if a picture exists. Link the Single Source of Truth.</p>
            </div>

            <v-divider class="my-4"></v-divider>

            <div>
              <h4 class="text-h6">Section E: Out of Scope</h4>
              <p><strong>Template Tag:</strong> ### 🚫 Out of Scope</p>
              <p><strong>Guideline:</strong> Explicitly state what we are NOT doing to prevent scope creep.</p>
            </div>
          </v-expansion-panel-text>
        </v-expansion-panel>

        <!-- 3. The Acceptance Criteria Field -->
        <v-expansion-panel>
          <v-expansion-panel-title class="font-weight-bold">3. The Acceptance Criteria Field</v-expansion-panel-title>
          <v-expansion-panel-text>
            <p>Strict Rule: We use Gherkin Syntax (Given / When / Then).</p>

            <div class="mt-4">
              <h4 class="text-h6">Scenario Type 1: The "Happy Path" (Success)</h4>
              <p><strong>What is it?</strong> The standard scenario where everything works perfectly.</p>
              <p><strong>Guideline:</strong> Define the starting point, the action, and the success outcome.</p>
              <div class="bg-grey-lighten-4 pa-2 rounded mt-2">
                <pre>
Scenario: Successful Login
Given I am on the Login Page
When I enter a valid email and password
Then I am redirected to the Dashboard
And I see a "Welcome Back" toast notification
                </pre>
              </div>
            </div>

            <v-divider class="my-4"></v-divider>

            <div>
              <h4 class="text-h6">Scenario Type 2: The "Negative Path" (Error Handling)</h4>
              <p><strong>What is it?</strong> What happens when the user makes a mistake or the system fails?</p>
              <p><strong>Guideline:</strong> Define the specific error message text. Do not just say "Show error."</p>
              <div class="bg-grey-lighten-4 pa-2 rounded mt-2">
                <pre>
Scenario: Invalid Email Format
Given I am on the Login Page
When I enter "bob@gmail" (missing .com)
Then the "Submit" button remains disabled
And I see red inline text: "Please enter a valid email address."
                </pre>
              </div>
            </div>
          </v-expansion-panel-text>
        </v-expansion-panel>

      </v-expansion-panels>
    </v-card-text>
  </v-card>
</template>

<script setup>
</script>
