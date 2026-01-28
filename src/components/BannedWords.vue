<template>
  <v-card class="mb-5">
    <v-card-title class="text-h5 bg-primary text-white">
      Part 3: The "Banned Words" List
    </v-card-title>
    <v-card-text class="pa-4">
      <p class="mb-4">
        The following words represent Assumptions. They are forbidden in Acceptance Criteria unless quantified.
      </p>

      <v-table>
        <thead>
          <tr>
            <th class="text-left">⛔ Vague Word</th>
            <th class="text-left">❓ Why it's bad</th>
            <th class="text-left">✅ Use this instead</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.word">
            <td>{{ item.word }}</td>
            <td>{{ item.why }}</td>
            <td>{{ item.use }}</td>
          </tr>
        </tbody>
      </v-table>
    </v-card-text>
  </v-card>
</template>

<script setup>
const items = [
  { word: '"Fast"', why: 'Subjective.', use: '"Loads in under 200ms"' },
  { word: '"Easy"', why: 'Subjective.', use: '"Requires fewer than 3 clicks"' },
  { word: '"Modern"', why: 'Meaningless.', use: '"Matches the Figma design strictly"' },
  { word: '"Robust"', why: 'Vague.', use: '"Handles 1,000 concurrent requests"' },
  { word: '"Bug-free"', why: 'Impossible.', use: '"Passes all attached test cases"' },
]
</script>
