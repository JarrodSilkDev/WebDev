<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-item title="ADO User Stories" subtitle="SOP"></v-list-item>
        <v-divider></v-divider>
        <template v-for="(item, index) in items" :key="index">
          <v-divider v-if="item.type === 'divider'"></v-divider>
          <v-list-item
            v-else
            :value="item.value"
            @click="handleNavigation(item)"
            link
          >
            <template v-slot:prepend v-if="item.icon">
              <v-icon :icon="item.icon"></v-icon>
            </template>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>User Story SOP</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <UserStoryCreator v-if="currentView === 'create'" />
      <v-container v-else>
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
import { ref, nextTick } from 'vue'
import DefinitionOfReady from './components/DefinitionOfReady.vue'
import TemplateBreakdown from './components/TemplateBreakdown.vue'
import BannedWords from './components/BannedWords.vue'
import OfficialTemplates from './components/OfficialTemplates.vue'
import HowToSave from './components/HowToSave.vue'
import UserStoryCreator from './components/UserStoryCreator.vue'

const drawer = ref(true)
const currentView = ref('sop')

const items = [
  { title: 'Create User Story', value: 'create', icon: 'mdi-plus-box' },
  { type: 'divider' },
  { title: 'Definition of Ready', value: 'dor' },
  { title: 'Template Breakdown', value: 'breakdown' },
  { title: 'Banned Words', value: 'banned' },
  { title: 'Official Templates', value: 'templates' },
  { title: 'How to Save', value: 'howtosave' },
]

async function handleNavigation(item) {
  if (item.value === 'create') {
    currentView.value = 'create'
  } else {
    currentView.value = 'sop'
    await nextTick()
    const el = document.getElementById(item.value)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }
}
</script>
