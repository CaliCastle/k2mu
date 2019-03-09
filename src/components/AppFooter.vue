<template>
  <footer class="container mx-auto py-12">
    <div class="flex justify-center items-baseline">
      <p class="text-2xl text-center">
        <span class="vvspaceship-text mr-2">&copy;</span>
        <span>{{ new Date().getFullYear() }} // </span>
        very very spaceship
      </p>
      <div class="p-3 knifeable">
        <svg class="fill-current w-8 h-8" viewBox="0 0 206 204">
          <g stroke="none">
            <path
              d="M146,144 L166,144 L166,164 L146,164 L146,144 Z M166,164 L186,164 L186,184 L166,184 L166,164 Z M186,184 L206,184 L206,204 L186,204 L186,184 Z"
              id="trail"
            ></path>
            <path
              d="M126,67 L146,67 L146,20 L166,20 L166,106 L146,106 L146,125 L126,125 L126,126 L125.947931,126 L125.947931,145.766926 L106.5,145.766926 L105.99507,146 L106,164 L20,164 L20,146 L67,146 L67,126 L40,126 L40,106 L20,106 L20,86 L0,86 L0,0 L86,0 L86,20 L106,20 L106,40 L126,40 L126,67 Z M67,67 L67,87 L87,87 L87,67 L67,67 Z"
              id="body"
            ></path>
          </g>
        </svg>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'app-footer'
}
</script>
