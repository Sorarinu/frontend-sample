<template>
    <main :class="$style.main">
        <section :class="$style.header">Header</section>

        <div :class="$style.grid">
            <section :class="$style.menu">Menu</section>
            <section :class="$style.content">Content</section>
        </div>
    </main>
</template>

<script type="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "MainPage",
  components: {},
  setup() {}
})
</script>

<style lang="scss" module>
.main {
    height: calc(100vh - 38px);
}

.header {
  background-color: lightpink;
  height: 40px;
  grid-area: header;
}

.grid {
  height: calc(100% - 40px);
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-template-areas: 'menu content';
}

.menu {
  background-color: lightgreen;
  grid-area: menu;
  overflow: auto;
}

.content {
  background-color: lightskyblue;
  grid-area: content;
  overflow: auto;
}
</style>
