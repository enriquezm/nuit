<template>
  <span :class="classList" v-html="FinnBott" />
</template>

<script setup lang="ts">
import FinnBott from '@/assets/finn_bot.svg?raw';
import { ResponseType } from '../composables/useAskResponse';

interface Props {
  isTalking?: boolean;
  responseType?: string;
}

const props = withDefaults(defineProps<Props>(), {
  isTalking: false,
  responseType: 'text',
});

const classList = computed(() => {
  return {
    'finnBot': true,
    'finnBot--talking': props.isTalking,
    'finnBot--closeEyes': props.responseType === ResponseType.CLOSE_EYES,
  };
});
</script>

<style scoped lang="scss">
.finnBot {
  display: block;
  width: 100px;
  height: 100px;

  &:deep() {
    .finn { 
      &__mouth {
        height: 0px;
        transition: height 0.2s;
      }

    }
  }
}

.finnBot--talking {
  &:deep() {
    .finn {
      &__mouth {
        animation: mouthMove 0.2s infinite;
      }
    }
  }
}

.finnBot--closeEyes {
  &:deep() {
    .finn {
      &__eye {
        padding-top: 5px;
        height: 3px;
      }
    }
  }
}

@keyframes mouthMove {
  0% {
    height: 0px;
  }
  100% {
    height: 6px;
  }
}
</style>