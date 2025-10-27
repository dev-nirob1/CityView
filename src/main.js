import { createApp } from 'vue'
import './assets/main.css'
import App from './App.vue'

const app = createApp(App)

import BaseButton from './components/element/BaseButton.vue'
import BaseImage from './components/element/BaseImage.vue'
import BaseTitle from './components/element/BaseTitle.vue'
import HeroTitle from './components/element/HeroTitle.vue'
import SubTitle from './components/element/SubTitle.vue'
import InputField from './components/element/InputField.vue'
import BaseParagraph from './components/element/BaseParagraph.vue'
import BaseTextArea from './components/element/BaseTextArea.vue'
import ListItem from './components/element/ListItem.vue'
import TableHeader from './components/element/TableHeader.vue'
import BaseTable from './components/element/BaseTable.vue'
import TableRow from './components/element/TableRow.vue'

app.component('BaseButton', BaseButton)
app.component('BaseTitle', BaseTitle)
app.component('HeroTitle', HeroTitle)
app.component('SubTitle', SubTitle)
app.component('InputField', InputField)
app.component('BaseImage', BaseImage)
app.component('BaseParagraph', BaseParagraph)
app.component('BaseTextArea', BaseTextArea)
app.component('ListItem', ListItem)
app.component('TableHeader', TableHeader)
app.component('BaseTable', BaseTable)
app.component('TableRow', TableRow)

app.mount('#app')
