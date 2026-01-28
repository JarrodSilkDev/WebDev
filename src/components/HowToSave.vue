<template>
  <v-card class="mb-5">
    <v-card-title class="text-h5 bg-primary text-white">
      Part 5: How to Save This in Azure DevOps
    </v-card-title>
    <v-card-text class="pa-4">
      <p class="mb-4">
        Do not copy-paste this manually every time. Use the ADO Templates feature.
      </p>

      <v-timeline density="compact" align="start">
        <v-timeline-item dot-color="primary" size="x-small">
          <div class="mb-2 font-weight-bold">Create a New User Story.</div>
        </v-timeline-item>
        <v-timeline-item dot-color="primary" size="x-small">
          <div class="mb-2 font-weight-bold">Paste Template A into the Description field.</div>
        </v-timeline-item>
        <v-timeline-item dot-color="primary" size="x-small">
          <div class="mb-2 font-weight-bold">Paste Template B into the Acceptance Criteria field.</div>
        </v-timeline-item>
        <v-timeline-item dot-color="primary" size="x-small">
          <div class="mb-2 font-weight-bold">Leave the Title blank.</div>
        </v-timeline-item>
        <v-timeline-item dot-color="primary" size="x-small">
          <div class="mb-2 font-weight-bold">
            Click the (...) Ellipsis icon (Top Right of the card) &rightarrow; Templates &rightarrow; Capture.
          </div>
        </v-timeline-item>
        <v-timeline-item dot-color="primary" size="x-small">
          <div class="mb-2 font-weight-bold">Name it: ⭐⭐ Standard User Story.</div>
        </v-timeline-item>
        <v-timeline-item dot-color="success" size="small" icon="mdi-check">
          <div class="mb-2 font-weight-bold">Save.</div>
        </v-timeline-item>
      </v-timeline>

      <v-alert type="info" variant="tonal" class="mt-4">
        <strong>Usage:</strong> For every new ticket, click (...) &rightarrow; Templates &rightarrow; ⭐⭐ Standard User Story.
      </v-alert>

    </v-card-text>
  </v-card>
</template>

<script setup>
</script>
