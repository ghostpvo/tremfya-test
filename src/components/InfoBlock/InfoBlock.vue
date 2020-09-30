<template>
  <div
    :class="[
       'info-block',
      {'info-block-full-width': fullWidth}
    ]"
  >
    <span
      class="info-block-change-size"
      @click="fullWidth = !fullWidth"
    >
      Change size
    </span>
    <div class="info-block-content">
      <div class="main-side">
        <div
          class="info-item"
          v-for="(item, index) in blockData"
          :key="`info-item-${index}`"
        >
          <h4 class="blc-title">
            {{ item.title }}
          </h4>
          <p
            class="blc-text"
            v-for="(itemData, textItemIndex) in item.data"
            :key="`info-item-text-${textItemIndex}`"
          >
            {{ itemData }}
          </p>
        </div>
      </div>
      <aside class="block-sidebar">
        <div
          class="info-item"
          v-for="(item, index) in sidebarData"
          :key="`info-item-${index}`"
        >
          <h4 class="blc-title">
            {{ item.title }}
          </h4>
          <p
            class="blc-text"
            v-for="(itemData, textItemIndex) in item.data"
            :key="`info-item-text-${textItemIndex}`"
          >
            {{ itemData }}
          </p>
        </div>
      </aside>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoBlock',
  data () {
    return {
      fullWidth: false,
      blockData: [
        {
          title: 'Title of the block 1'
        },
        {
          title: 'Title of the block 2',
          data: [
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti et facere, inventore itaque optio',
            'Deleniti et facere, inventore itaque optio quam quasi sequi vel veniam. Adipisci aut autem dolore exercitationem incidunt laboriosam quas rerum sunt vitae?'
          ]
        },
        {
          title: 'Title of the ',
          data: [
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti et facere, inventore itaque optio',
            'Deleniti et facere, inventore itaque optio quam quasi sequi vel veniam. Adipisci aut autem dolore exercitationem incidunt laboriosam quas rerum sunt vitae?'
          ]
        },
        {
          title: 'Title of sdasdas dsdsd ',
          data: [
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti et facere, inventore itaque optio',
            'Deleniti et facere, inventore itaque optio quam quasi sequi vel veniam. Adipisci aut autem dolore exercitationem incidunt laboriosam quas rerum sunt vitae?'
          ]
        },
        {
          title: 'Title of the block2',
          data: [
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti et facere, inventore itaque optio',
            'Deleniti et facere, inventore itaque optio quam quasi sequi vel veniam. Adipisci aut autem dolore exercitationem incidunt laboriosam quas rerum sunt vitae?'
          ]
        },
        {
          title: 'Title of the block 51',
          data: [
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti et facere, inventore itaque optio',
            'Deleniti et facere, inventore itaque optio quam quasi sequi vel veniam. Adipisci aut autem dolore exercitationem incidunt laboriosam quas rerum sunt vitae?'
          ]
        },
        {
          title: 'Title of the block 2',
          data: [
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti et facere, inventore itaque optio',
            'Deleniti et facere, inventore itaque optio quam quasi sequi vel veniam. Adipisci aut autem dolore exercitationem incidunt laboriosam quas rerum sunt vitae?'
          ]
        },
        {
          title: 'Title of the block 51',
          data: [
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti et facere, inventore itaque optio',
            'Deleniti et facere, inventore itaque optio quam quasi sequi vel veniam. Adipisci aut autem dolore exercitationem incidunt laboriosam quas rerum sunt vitae?'
          ]
        },
        {
          title: 'Title of the block 21',
          data: [
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti et facere, inventore itaque optio',
            'Deleniti et facere, inventore itaque optio quam quasi sequi vel veniam. Adipisci aut autem dolore exercitationem incidunt laboriosam quas rerum sunt vitae?'
          ]
        },
        {
          title: 'Title of the block  ',
          data: [
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti et facere, inventore itaque optio',
            'Deleniti et facere, inventore itaque optio quam quasi sequi vel veniam. Adipisci aut autem dolore exercitationem incidunt laboriosam quas rerum sunt vitae?'
          ]
        },
        {
          title: 'Title of the block ',
          data: [
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti et facere, inventore itaque optio',
            'Deleniti et facere, inventore itaque optio quam quasi sequi vel veniam. Adipisci aut autem dolore exercitationem incidunt laboriosam quas rerum sunt vitae?'
          ]
        },
        {
          title: 'Title of the blockz',
          data: [
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti et facere, inventore itaque optio',
            'Deleniti et facere, inventore itaque optio quam quasi sequi vel veniam. Adipisci aut autem dolore exercitationem incidunt laboriosam quas rerum sunt vitae?'
          ]
        },
        {
          title: 'Title of the ',
          data: [
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti et facere, inventore itaque optio',
            'Deleniti et facere, inventore itaque optio quam quasi sequi vel veniam. Adipisci aut autem dolore exercitationem incidunt laboriosam quas rerum sunt vitae?'
          ]
        },
        {
          title: 'Title of the ',
          data: [
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti et facere, inventore itaque optio',
            'Deleniti et facere, inventore itaque optio quam quasi sequi vel veniam. Adipisci aut autem dolore exercitationem incidunt laboriosam quas rerum sunt vitae?'
          ]
        },
        {
          title: 'Title of the block',
          data: [
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti et facere, inventore itaque optio',
            'Deleniti et facere, inventore itaque optio quam quasi sequi vel veniam. Adipisci aut autem dolore exercitationem incidunt laboriosam quas rerum sunt vitae?'
          ]
        },
        {
          title: 'Title of the block',
          data: [
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti et facere, inventore itaque optio'
          ]
        },
        {
          title: 'Title of the block',
          data: [
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti et facere, inventore itaque optio'
          ]
        },
        {
          title: 'Title of the block',
          data: [
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti et facere, inventore itaque optio adipisicing elit.'
          ]
        },
        {
          title: 'Title of the block',
          data: [
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti et facere, inventore itaque optio'
          ]
        },
        {
          title: 'Title of the block',
          data: [
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
          ]
        }
      ],
      sidebarData: [
        {
          title: 'Title of the block',
          data: [
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            'ipsum sit amet, consectetur adipisicing elit.'
          ]
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
  @import "info-block";
</style>
