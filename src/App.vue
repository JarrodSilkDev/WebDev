<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-item title="ADO User Stories" subtitle="SOP"></v-list-item>
        <v-divider></v-divider>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :value="item.value"
          @click="scrollTo(item.value)"
          link
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>User Story SOP</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container>
         <div id="dor" class="mb-10">
           <DefinitionOfReady />
         </div>
         <div id="breakdown" class="mb-10">
           <TemplateBreakdown />
         </div>
         <div id="banned" class="mb-10">
           <BannedWords />
         </div>
         <div id="templates" class="mb-10">
            <OfficialTemplates />
         </div>
         <div id="howtosave" class="mb-10">
            <HowToSave />
         </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
import DefinitionOfReady from './components/DefinitionOfReady.vue'
import TemplateBreakdown from './components/TemplateBreakdown.vue'
import BannedWords from './components/BannedWords.vue'
import OfficialTemplates from './components/OfficialTemplates.vue'
import HowToSave from './components/HowToSave.vue'

const drawer = ref(true)
const items = [
  { title: 'Definition of Ready', value: 'dor' },
  { title: 'Template Breakdown', value: 'breakdown' },
  { title: 'Banned Words', value: 'banned' },
  { title: 'Official Templates', value: 'templates' },
  { title: 'How to Save', value: 'howtosave' },
]

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
