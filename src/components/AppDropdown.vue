<script setup lang="ts">
export type DropdownItem = {
  icon?: string
  label: string
  onClick?: (item?: DropdownItem) => void
}

interface AppDropdownProps {
  items: DropdownItem[]
  icon?: string
  text?: string
}

defineProps<AppDropdownProps>()
</script>

<template>
  <div class="dropdown dropdown-end">
    <div tabindex="0" role="button" class="btn btn-ghost btn-sm m-1">
      <FWIcon v-if="icon" :icon="icon" />
      <span v-if="text">{{ text }}</span>
    </div>

    <ul
      tabindex="0"
      class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
    >
      <li v-for="item in items" :key="item.label">
        <a @click.prevent="item.onClick ? item.onClick(item) : null">
          <FWIcon v-if="item.icon" :icon="item.icon" />
          <span v-if="item.label">
            {{ item.label }}
          </span>
        </a>
      </li>
    </ul>
  </div>
</template>
