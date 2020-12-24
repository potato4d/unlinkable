<template>
  <div class="w-screen h-screen flex flex-col">
    <div class="w-full h-16 flex items-center justify-between p-4 bg-gray-800 text-white font-bold text-center" >
      <span class="inline-block w-16 h-1"></span>
      <span style="font-family: Futura">Unlinkable</span>
      <a class="inline-block w-16 text-xs hover:underline" href="https://github.com/potato4d/unlinkable" target="_blank">Source</a>
    </div>
    <textarea v-model="input" name="Input" class="flex-1 p-4 resize-none" placeholder="Type text..." cols="30" rows="10"></textarea>
    <div class="w-full h-1 relative z-1">
      <div class="w-full h-1 bg-gray-400"></div>
      <button @click="handleClickConvertButton" aria-label="Convert" class="appearance-none absolute left-0 right-0 mx-auto w-12 h-12 flex items-center justify-center bg-green-700 hover:bg-green-600 transition-all duration-200 text-white font-bold rounded-full shadow-lg outline-none focus:bg-green-500 focus:shadow-2xl hover:shadow-2xl" style="top: -1.5rem">
        <!-- Feather https://feathericons.com/ -->
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#fff" stroke="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-zap"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
      </button>
    </div>
    <textarea ref="outputArea" v-model="output" name="Output" class="flex-1 p-4 resize-none bg-gray-200" cols="30" rows="10" readonly></textarea>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

type LocalData = {
  input: string
  output: string
}

export default Vue.extend({
  data() {
    return {
      input: '',
      output: ''
    }
  },
  methods: {
    async handleClickConvertButton() {
      this.output = this.input.replace(/([@#\.])/ig, '$1\u200B')
      await Vue.nextTick()
      const outputArea: Element = this.$refs.outputArea as any
      if (outputArea) {
        const range = document.createRange()
        range.selectNode(outputArea)
        const selection = document.getSelection()
        selection?.removeAllRanges()
        selection?.addRange(range)
      }
    }
  }
})
</script>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

button {
  outline: none;
}
</style>
