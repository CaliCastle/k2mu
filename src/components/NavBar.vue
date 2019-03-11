<template>
  <nav
    class="top-nav flex justify-end fixed pin-x px-8 pt-6"
    :class="{ 'is-opened': isHamburgerOpen }"
  >
    <a
      class="knifeable download has-title"
      href="#"
      name="Download Game"
      @click.prevent="toggleHamburger"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="Rounded"
        class="fill-current"
        viewBox="0 0 24 24"
      >
        <path
          d="M18.705,7.004C17.839,4.056,15.149,2,12,2C9.709,2,7.561,3.138,6.258,5.004C2.479,5.143-0.486,8.523,0.066,12.44  C0.523,15.677,3.445,18,6.714,18L9,18v-5c0-1.657,1.343-3,3-3h0c1.657,0,3,1.343,3,3v5l3.266,0c2.842,0,5.388-2.054,5.7-4.878  C24.323,9.882,21.846,7.119,18.705,7.004z"
          id="cloud"
        ></path>
        <g>
          <path
            d="M12,12L12,12c0.552,0,1,0.448,1,1v7.001h2.087h0.078c0.372,0,0.558,0.449,0.295,0.712l-3.165,3.165   c-0.163,0.163-0.427,0.163-0.59,0L8.54,20.713c-0.263-0.263-0.077-0.712,0.295-0.712h0.078H11V13C11,12.448,11.448,12,12,12z"
            id="arrow"
          ></path>
        </g>
      </svg>
    </a>
    <a
      class="knifeable vvspaceship has-title"
      href="https://vvspaceship.website"
      target="_blank"
      name="very very spaceship"
    >
      <svg class="fill-current" viewBox="0 0 206 204" id="vvspaceship">
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
    </a>
    <a class="knifeable hamburger" href="#" @click.prevent="toggleHamburger">
      <span class="hamburger-icon block relative">
        <span v-for="n in 3" :key="n" class="block absolute w-full"></span>
      </span>
    </a>
    <div class="fixed">
      <div
        class="menu fixed w-screen h-screen pin-l pin-t flex flex-col justify-center items-center"
        :style="{ transitionDelay: isHamburgerOpen ? '0.446s' : '0.12s' }"
      >
        <div
          class="flex flex-col justify-center items-center get-game"
          :style="{ transitionDelay: isHamburgerOpen ? '0.575s' : '0.04s' }"
        >
          <span class="text-4xl">
            Get
            <b class="text-5xl">Knife 2 Meat U</b> On:
          </span>
          <a
            class="knifeable m-4 has-title"
            href="https://itch.io/profile/vvspaceship"
            target="_blank"
            name="itch.io"
          >
            <svg
              class="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 245.37069 220.73612"
            >
              <path
                d="M31.99 1.365C21.287 7.72.2 31.945 0 38.298v10.516C0 62.144 12.46 73.86 23.773 73.86c13.584 0 24.902-11.258 24.903-24.62 0 13.362 10.93 24.62 24.515 24.62 13.586 0 24.165-11.258 24.165-24.62 0 13.362 11.622 24.62 25.207 24.62h.246c13.586 0 25.208-11.258 25.208-24.62 0 13.362 10.58 24.62 24.164 24.62 13.585 0 24.515-11.258 24.515-24.62 0 13.362 11.32 24.62 24.903 24.62 11.313 0 23.773-11.714 23.773-25.046V38.298c-.2-6.354-21.287-30.58-31.988-36.933C180.118.197 157.056-.005 122.685 0c-34.37.003-81.228.54-90.697 1.365zm65.194 66.217a28.025 28.025 0 0 1-4.78 6.155c-5.128 5.014-12.157 8.122-19.906 8.122a28.482 28.482 0 0 1-19.948-8.126c-1.858-1.82-3.27-3.766-4.563-6.032l-.006.004c-1.292 2.27-3.092 4.215-4.954 6.037a28.5 28.5 0 0 1-19.948 8.12c-.934 0-1.906-.258-2.692-.528-1.092 11.372-1.553 22.24-1.716 30.164l-.002.045c-.02 4.024-.04 7.333-.06 11.93.21 23.86-2.363 77.334 10.52 90.473 19.964 4.655 56.7 6.775 93.555 6.788h.006c36.854-.013 73.59-2.133 93.554-6.788 12.883-13.14 10.31-66.614 10.52-90.474-.022-4.596-.04-7.905-.06-11.93l-.003-.045c-.162-7.926-.623-18.793-1.715-30.165-.786.27-1.757.528-2.692.528a28.5 28.5 0 0 1-19.948-8.12c-1.862-1.822-3.662-3.766-4.955-6.037l-.006-.004c-1.294 2.266-2.705 4.213-4.563 6.032a28.48 28.48 0 0 1-19.947 8.125c-7.748 0-14.778-3.11-19.906-8.123a28.025 28.025 0 0 1-4.78-6.155 27.99 27.99 0 0 1-4.736 6.155 28.49 28.49 0 0 1-19.95 8.124c-.27 0-.54-.012-.81-.02h-.007c-.27.008-.54.02-.813.02a28.49 28.49 0 0 1-19.95-8.123 27.992 27.992 0 0 1-4.736-6.155zm-20.486 26.49l-.002.01h.015c8.113.017 15.32 0 24.25 9.746 7.028-.737 14.372-1.105 21.722-1.094h.006c7.35-.01 14.694.357 21.723 1.094 8.93-9.747 16.137-9.73 24.25-9.746h.014l-.002-.01c3.833 0 19.166 0 29.85 30.007L210 165.244c8.504 30.624-2.723 31.373-16.727 31.4-20.768-.773-32.267-15.855-32.267-30.935-11.496 1.884-24.907 2.826-38.318 2.827h-.006c-13.412 0-26.823-.943-38.318-2.827 0 15.08-11.5 30.162-32.267 30.935-14.004-.027-25.23-.775-16.726-31.4L46.85 124.08c10.684-30.007 26.017-30.007 29.85-30.007zm45.985 23.582v.006c-.02.02-21.863 20.08-25.79 27.215l14.304-.573v12.474c0 .584 5.74.346 11.486.08h.006c5.744.266 11.485.504 11.485-.08v-12.474l14.304.573c-3.928-7.135-25.79-27.215-25.79-27.215v-.006l-.003.002z"
              ></path>
            </svg>
          </a>
        </div>
        <div
          class="mt-12 flex flex-col justify-center items-center social"
          :style="{ transitionDelay: isHamburgerOpen ? '0.658s' : '0.1s' }"
        >
          <span class="text-4xl">Join Us On:</span>
          <div class="flex justify-center items-center mt-2">
            <a
              class="knifeable has-title"
              name="Twitter"
              href="https://vvspaceship.website/twitter"
              target="_blank"
            >
              <svg
                viewBox="0 0 26 26"
                xmlns="http://www.w3.org/2000/svg"
                class="fill-current"
              >
                <g>
                  <path
                    d="M 25.855469 5.574219 C 24.914063 5.992188 23.902344 6.273438 22.839844 6.402344 C 23.921875 5.75 24.757813 4.722656 25.148438 3.496094 C 24.132813 4.097656 23.007813 4.535156 21.8125 4.769531 C 20.855469 3.75 19.492188 3.113281 17.980469 3.113281 C 15.082031 3.113281 12.730469 5.464844 12.730469 8.363281 C 12.730469 8.773438 12.777344 9.175781 12.867188 9.558594 C 8.503906 9.339844 4.636719 7.246094 2.046875 4.070313 C 1.59375 4.847656 1.335938 5.75 1.335938 6.714844 C 1.335938 8.535156 2.261719 10.140625 3.671875 11.082031 C 2.808594 11.054688 2 10.820313 1.292969 10.425781 C 1.292969 10.449219 1.292969 10.46875 1.292969 10.492188 C 1.292969 13.035156 3.101563 15.15625 5.503906 15.640625 C 5.0625 15.761719 4.601563 15.824219 4.121094 15.824219 C 3.78125 15.824219 3.453125 15.792969 3.132813 15.730469 C 3.800781 17.8125 5.738281 19.335938 8.035156 19.375 C 6.242188 20.785156 3.976563 21.621094 1.515625 21.621094 C 1.089844 21.621094 0.675781 21.597656 0.265625 21.550781 C 2.585938 23.039063 5.347656 23.90625 8.3125 23.90625 C 17.96875 23.90625 23.25 15.90625 23.25 8.972656 C 23.25 8.742188 23.246094 8.515625 23.234375 8.289063 C 24.261719 7.554688 25.152344 6.628906 25.855469 5.574219 "
                  ></path>
                </g>
              </svg>
            </a>
            <a
              class="knifeable has-title"
              name="YouTube"
              href="https://vvspaceship.website/youtube"
              target="_blank"
            >
              <svg
                viewBox="0 0 30 30"
                xmlns="http://www.w3.org/2000/svg"
                class="fill-current"
              >
                <path
                  d="M 7.4140625 3 L 9.1894531 9.4121094 L 9.1894531 12.488281 L 10.726562 12.488281 L 10.726562 9.4121094 L 12.525391 3 L 10.976562 3 L 10.332031 5.9179688 C 10.151031 6.7699687 10.035422 7.3753281 9.9824219 7.7363281 L 9.9355469 7.7363281 C 9.8605469 7.2313281 9.7439375 6.62125 9.5859375 5.90625 L 8.9648438 3 L 7.4140625 3 z M 14.318359 5.4199219 C 13.797359 5.4199219 13.376641 5.5224687 13.056641 5.7304688 C 12.735641 5.9374688 12.500609 6.2687031 12.349609 6.7207031 C 12.199609 7.1737031 12.123047 7.7715781 12.123047 8.5175781 L 12.123047 9.5234375 C 12.123047 10.261437 12.190266 10.853828 12.322266 11.298828 C 12.454266 11.743828 12.675281 12.072203 12.988281 12.283203 C 13.301281 12.494203 13.733203 12.600562 14.283203 12.601562 C 14.818203 12.601562 15.244641 12.497063 15.556641 12.289062 C 15.868641 12.081063 16.095375 11.755641 16.234375 11.306641 C 16.373375 10.857641 16.443359 10.264391 16.443359 9.5253906 L 16.443359 8.5175781 C 16.443359 7.7715781 16.371516 7.1755625 16.228516 6.7265625 C 16.085516 6.2785625 15.860781 5.9473281 15.550781 5.7363281 C 15.241781 5.5253281 14.830359 5.4199219 14.318359 5.4199219 z M 17.251953 5.5566406 L 17.251953 10.734375 C 17.251953 11.375375 17.362078 11.847437 17.580078 12.148438 C 17.799078 12.449437 18.137656 12.599609 18.597656 12.599609 C 19.260656 12.599609 19.758844 12.279672 20.089844 11.638672 L 20.123047 11.638672 L 20.259766 12.486328 L 21.480469 12.486328 L 21.480469 5.5566406 L 19.921875 5.5566406 L 19.921875 11.060547 C 19.861875 11.189547 19.769531 11.295906 19.644531 11.378906 C 19.519531 11.462906 19.389906 11.503906 19.253906 11.503906 C 19.094906 11.503906 18.982063 11.436687 18.914062 11.304688 C 18.846063 11.172688 18.8125 10.954531 18.8125 10.644531 L 18.8125 5.5566406 L 17.251953 5.5566406 z M 14.283203 6.4941406 C 14.501203 6.4941406 14.656187 6.6098437 14.742188 6.8398438 C 14.829188 7.0688437 14.871094 7.4316875 14.871094 7.9296875 L 14.871094 10.089844 C 14.871094 10.602844 14.828188 10.971266 14.742188 11.197266 C 14.656188 11.423266 14.502156 11.536109 14.285156 11.537109 C 14.067156 11.537109 13.915031 11.423266 13.832031 11.197266 C 13.748031 10.971266 13.707031 10.601844 13.707031 10.089844 L 13.707031 7.9296875 C 13.707031 7.4326875 13.751891 7.0698438 13.837891 6.8398438 C 13.923891 6.6108438 14.072203 6.4941406 14.283203 6.4941406 z M 6.5 13.900391 C 5.119 13.900391 4 15.019391 4 16.400391 L 4 24.400391 C 4 25.781391 5.119 26.900391 6.5 26.900391 L 23.5 26.900391 C 24.881 26.900391 26 25.781391 26 24.400391 L 26 16.400391 C 26 15.019391 24.881 13.900391 23.5 13.900391 L 6.5 13.900391 z M 15.058594 16.199219 L 16.328125 16.199219 L 16.328125 19.283203 L 16.337891 19.283203 C 16.451891 19.060203 16.614219 18.881141 16.824219 18.744141 C 17.034219 18.607141 17.261906 18.539062 17.503906 18.539062 C 17.815906 18.539062 18.059328 18.622109 18.236328 18.787109 C 18.413328 18.952109 18.544047 19.220844 18.623047 19.589844 C 18.702047 19.959844 18.742188 20.471953 18.742188 21.126953 L 18.742188 22.050781 C 18.742188 22.922781 18.637734 23.563609 18.427734 23.974609 C 18.217734 24.385609 17.888359 24.591797 17.443359 24.591797 C 17.195359 24.591797 16.969625 24.533922 16.765625 24.419922 C 16.561625 24.305922 16.410594 24.149172 16.308594 23.951172 L 16.279297 23.951172 L 16.146484 24.503906 L 15.058594 24.503906 L 15.058594 16.199219 z M 7.1835938 16.496094 L 11.087891 16.496094 L 11.087891 17.556641 L 9.7792969 17.556641 L 9.7792969 24.503906 L 8.4902344 24.503906 L 8.4902344 17.556641 L 7.1835938 17.556641 L 7.1835938 16.496094 z M 21.117188 18.542969 C 21.568188 18.542969 21.916203 18.624062 22.158203 18.789062 C 22.399203 18.955063 22.570922 19.2135 22.669922 19.5625 C 22.767922 19.9125 22.816406 20.396672 22.816406 21.013672 L 22.816406 22.017578 L 20.613281 22.017578 L 20.613281 22.314453 C 20.613281 22.690453 20.623484 22.971203 20.646484 23.158203 C 20.669484 23.345203 20.715156 23.483359 20.785156 23.568359 C 20.855156 23.654359 20.963375 23.697266 21.109375 23.697266 C 21.306375 23.697266 21.441625 23.62075 21.515625 23.46875 C 21.588625 23.31675 21.628766 23.061078 21.634766 22.705078 L 22.769531 22.771484 C 22.775531 22.821484 22.779297 22.893422 22.779297 22.982422 C 22.779297 23.523422 22.631937 23.927359 22.335938 24.193359 C 22.039938 24.461359 21.621078 24.595703 21.080078 24.595703 C 20.431078 24.595703 19.976844 24.391375 19.714844 23.984375 C 19.452844 23.577375 19.324219 22.94675 19.324219 22.09375 L 19.324219 21.072266 C 19.324219 20.194266 19.460469 19.553438 19.730469 19.148438 C 20.000469 18.743437 20.462188 18.542969 21.117188 18.542969 z M 12.949219 18.650391 L 14.267578 18.650391 L 14.267578 24.501953 L 14.263672 24.501953 L 14.263672 24.503906 L 13.232422 24.503906 L 13.119141 23.787109 L 13.089844 23.787109 C 12.809844 24.329109 12.390078 24.599609 11.830078 24.599609 C 11.441078 24.599609 11.155703 24.47375 10.970703 24.21875 C 10.785703 23.96475 10.693359 23.565391 10.693359 23.025391 L 10.693359 18.652344 L 12.013672 18.652344 L 12.013672 22.949219 C 12.013672 23.209219 12.042609 23.397813 12.099609 23.507812 C 12.157609 23.619812 12.251719 23.673828 12.386719 23.673828 C 12.500719 23.673828 12.609844 23.639359 12.714844 23.568359 C 12.820844 23.498359 12.897219 23.408781 12.949219 23.300781 L 12.949219 18.650391 z M 21.089844 19.431641 C 20.949844 19.431641 20.844344 19.472687 20.777344 19.554688 C 20.710344 19.637687 20.665531 19.772938 20.644531 19.960938 C 20.621531 20.147938 20.611328 20.433453 20.611328 20.814453 L 20.611328 21.234375 L 21.574219 21.234375 L 21.574219 20.814453 C 21.574219 20.438453 21.562109 20.154937 21.537109 19.960938 C 21.512109 19.765937 21.467391 19.630781 21.400391 19.550781 C 21.333391 19.471781 21.230844 19.431641 21.089844 19.431641 z M 16.910156 19.474609 C 16.783156 19.474609 16.664641 19.524953 16.556641 19.626953 C 16.448641 19.728953 16.372125 19.859578 16.328125 20.017578 L 16.328125 23.339844 C 16.386125 23.441844 16.460734 23.517359 16.552734 23.568359 C 16.644734 23.618359 16.744516 23.646484 16.853516 23.646484 C 16.993516 23.646484 17.1045 23.596141 17.1875 23.494141 C 17.2705 23.392141 17.329281 23.220516 17.363281 22.978516 C 17.398281 22.737516 17.416016 22.402562 17.416016 21.976562 L 17.416016 21.222656 C 17.416016 20.764656 17.402047 20.411109 17.373047 20.162109 C 17.345047 19.914109 17.292703 19.736812 17.220703 19.632812 C 17.147703 19.528813 17.045156 19.474609 16.910156 19.474609 z"
                ></path>
              </svg>
            </a>
            <a
              class="knifeable has-title"
              name="Instagram"
              href="https://vvspaceship.website/instagram"
              target="_blank"
            >
              <svg
                viewBox="0 0 30 30"
                xmlns="http://www.w3.org/2000/svg"
                class="fill-current"
              >
                <path
                  d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"
                ></path>
              </svg>
            </a>
            <a
              class="knifeable has-title"
              name="Discord"
              href="https://vvspaceship.website/discord"
              target="_blank"
            >
              <svg
                viewBox="0 0 30 30"
                xmlns="http://www.w3.org/2000/svg"
                class="fill-current"
              >
                <path
                  d="M25.12,6.946c-2.424-1.948-6.257-2.278-6.419-2.292c-0.256-0.022-0.499,0.123-0.604,0.357 c-0.004,0.008-0.218,0.629-0.425,1.228c2.817,0.493,4.731,1.587,4.833,1.647c0.478,0.278,0.638,0.891,0.359,1.368 C22.679,9.572,22.344,9.75,22,9.75c-0.171,0-0.343-0.043-0.501-0.135C21.471,9.598,18.663,8,15.002,8 C11.34,8,8.531,9.599,8.503,9.615C8.026,9.892,7.414,9.729,7.137,9.251C6.86,8.775,7.021,8.164,7.497,7.886 c0.102-0.06,2.023-1.158,4.848-1.65c-0.218-0.606-0.438-1.217-0.442-1.225c-0.105-0.235-0.348-0.383-0.604-0.357 c-0.162,0.013-3.995,0.343-6.451,2.318C3.564,8.158,1,15.092,1,21.087c0,0.106,0.027,0.209,0.08,0.301 c1.771,3.11,6.599,3.924,7.699,3.959c0.007,0.001,0.013,0.001,0.019,0.001c0.194,0,0.377-0.093,0.492-0.25l1.19-1.612 c-2.61-0.629-3.99-1.618-4.073-1.679c-0.444-0.327-0.54-0.953-0.213-1.398c0.326-0.443,0.95-0.541,1.394-0.216 C7.625,20.217,10.172,22,15,22c4.847,0,7.387-1.79,7.412-1.808c0.444-0.322,1.07-0.225,1.395,0.221 c0.324,0.444,0.23,1.066-0.212,1.392c-0.083,0.061-1.456,1.048-4.06,1.677l1.175,1.615c0.115,0.158,0.298,0.25,0.492,0.25 c0.007,0,0.013,0,0.019-0.001c1.101-0.035,5.929-0.849,7.699-3.959c0.053-0.092,0.08-0.195,0.08-0.301 C29,15.092,26.436,8.158,25.12,6.946z M11,19c-1.105,0-2-1.119-2-2.5S9.895,14,11,14s2,1.119,2,2.5S12.105,19,11,19z M19,19 c-1.105,0-2-1.119-2-2.5s0.895-2.5,2-2.5s2,1.119,2,2.5S20.105,19,19,19z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <svg
        class="shape-overlays fixed w-screen h-screen pin-l pin-t"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        ref="shape-overlays"
      >
        <path class="shape-overlays__path"></path>
        <path class="shape-overlays__path"></path>
        <path class="shape-overlays__path"></path>
      </svg>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'nav-bar',
  data() {
    return {
      isHamburgerOpen: false,
      shapeOverlays: {
        el: null,
        isAnimating: false,
        paths: [],
        numPoints: 16,
        duration: 520,
        delayPointsArray: [],
        delayPointsMax: 280,
        delayPerPath: 100,
        timeStart: Date.now()
      },
      // these easing functions are based on the code of glsl-easing module.
      // https://github.com/glslify/glsl-easings
      ease: {
        exponentialInOut: t => {
          return t === 0.0 || t === 1.0
            ? t
            : t < 0.5
            ? +0.5 * Math.pow(2.0, 20.0 * t - 10.0)
            : -0.5 * Math.pow(2.0, 10.0 - t * 20.0) + 1.0
        },
        circularInOut: t => {
          return t < 0.5
            ? 0.5 * (1.0 - Math.sqrt(1.0 - 4.0 * t * t))
            : 0.5 * (Math.sqrt((3.0 - 2.0 * t) * (2.0 * t - 1.0)) + 1.0)
        },
        cubicInOut: t => {
          return t < 0.5
            ? 4.0 * t * t * t
            : 0.5 * Math.pow(2.0 * t - 2.0, 3.0) + 1.0
        },
        quadraticOut: t => {
          return -t * (t - 2.0)
        },
        quarticOut: t => {
          return Math.pow(t - 1.0, 3.0) * (1.0 - t) + 1.0
        }
      }
    }
  },
  mounted() {
    this.shapeOverlays.el = this.$refs['shape-overlays']
    this.shapeOverlays.paths = this.shapeOverlays.el.querySelectorAll('path')
  },
  methods: {
    toggleHamburger() {
      if (this.shapeOverlays.isAnimating) return
      this.shapeOverlays.isAnimating = true
      this.toggleShapeOverlays()
    },
    toggleShapeOverlays() {
      const range = 4 * Math.random() + 6
      const { numPoints, delayPointsArray, delayPointsMax } = this.shapeOverlays

      for (let i = 0; i < numPoints; i++) {
        const radian = (i / (numPoints - 1)) * Math.PI
        delayPointsArray[i] =
          ((Math.sin(-radian) + Math.sin(-radian * range) + 2) / 4) *
          delayPointsMax
      }

      this.isHamburgerOpen = !this.isHamburgerOpen
      if (this.isHamburgerOpen) {
        this.$root.$emit('nav-toggled', true)
      }

      this.shapeOverlays.timeStart = Date.now()
      this.renderLoop()
    },
    updateShapePath(time) {
      const points = [],
        { numPoints, delayPointsArray, duration } = this.shapeOverlays

      for (let i = 0; i < numPoints + 1; i++) {
        points[i] =
          this.ease.exponentialInOut(
            Math.min(Math.max(time - delayPointsArray[i], 0) / duration, 1)
          ) * 100
      }

      let str = ''
      str += this.isHamburgerOpen
        ? `M 0 0 V ${points[0]} `
        : `M 0 ${points[0]} `
      for (let i = 0; i < numPoints - 1; i++) {
        const p = ((i + 1) / (numPoints - 1)) * 100
        const cp = p - ((1 / (numPoints - 1)) * 100) / 2
        str += `C ${cp} ${points[i]} ${cp} ${points[i + 1]} ${p} ${
          points[i + 1]
        } `
      }
      str += this.isHamburgerOpen ? 'V 0 H 0' : 'V 100 H 0'

      return str
    },
    renderShapes() {
      const { paths, timeStart, delayPerPath } = this.shapeOverlays

      if (this.isHamburgerOpen) {
        for (let i = 0; i < paths.length; i++) {
          paths[i].setAttribute(
            'd',
            this.updateShapePath(Date.now() - (timeStart + delayPerPath * i))
          )
        }
      } else {
        for (let i = 0; i < paths.length; i++) {
          paths[i].setAttribute(
            'd',
            this.updateShapePath(
              Date.now() - (timeStart + delayPerPath * (paths.length - i - 1))
            )
          )
        }
      }
    },
    renderLoop() {
      this.renderShapes()

      const {
        timeStart,
        duration,
        delayPerPath,
        paths,
        delayPointsMax
      } = this.shapeOverlays

      if (
        Date.now() - timeStart <
        duration + delayPerPath * (paths.length - 1) + delayPointsMax
      ) {
        requestAnimationFrame(() => {
          this.renderLoop()
        })
      } else {
        if (this.isHamburgerOpen === false) {
          this.$root.$emit('nav-toggled', false)
        }

        this.shapeOverlays.isAnimating = false
      }
    }
  }
}
</script>

<style lang="stylus">
.top-nav {
    z-index: 15000

    a {
        text-decoration: none
        color: #fff
        transition all 0.189s ease

        &, &:hover, &:focus {
            outline: none
        }

        &.knifeable {
            display: flex
            width: 5rem
            height: 5rem
            margin: 0.5rem
            justify-content: center
            align-items: center
            z-index: 5000
        }

        .hamburger-icon {
            width: 2.3rem
            height: 2rem
            transition: all .259s ease

            span {
                background: var(--color-text)
                height: 0.2rem
                border-radius: 4px
                transition: all .259s ease

                &:nth-of-type(1) {
                    top: .25rem
                }

                &:nth-of-type(2) {
                    top: 0.8rem
                }

                &:nth-of-type(3) {
                    top: 1.45rem
                }
            }
        }

        svg {
            width: 1.8rem
            height: 1.8rem

            &, & * {
                transition: all .18s ease
            }
        }

        &:hover {
            color: var(--color-link)

            .hamburger-icon {
                span {
                    background: var(--color-link)
                }
            }

            svg {
                fill: var(--color-link)
            }
        }
    }

    .download {
        svg {
            overflow visible
        }

        &:hover {
            svg {
                #cloud {
                    transform translateY(-0.05rem)
                }

                #arrow {
                    transform translateY(0.085rem)
                }
            }
        }
    }

    .has-title {
        position: relative

        &:before {
            content: attr(name)
            color: var(--color-text)
            font-weight bold
            font-size 0.9rem
            text-align: center
            text-transform: lowercase
            font-family 'Roboto', -apple-system, sans-serif
            display: inline
            position: absolute
            opacity: 0
            transition: all 0.135s ease
            bottom: 0
            transform: translateY(50%)
        }

        &:hover {
            &:before {
                opacity: 1
                transform: translateY(115%)
            }
        }
    }

    .vvspaceship {
        svg {
            overflow: visible
            perspective 800px

            #body {
                transform-origin 50% 50%
                transform-style preserve-3d
            }
        }

        &:hover {
            svg {
                #trail {
                    animation thrusting 0.86s linear infinite
                }

                #body {
                    animation rotation 1.65s steps(6) infinite
                }
            }
        }
    }

  &.is-opened {
    .download {
      opacity 0
      pointer-events none
    }

    .hamburger-icon {
      transform translateY(-0.2rem)
      span {
        &:nth-of-type(1) {
          transform rotate(45deg) translate3d(0.35rem, 0.75rem, 0)
        }

        &:nth-of-type(2) {
          opacity: 0
        }

        &:nth-of-type(3) {
          transform rotate(-45deg) translate3d(0.1rem, -0.45rem, 0)
        }
      }
    }
  }
}

.menu {
  opacity 0
  pointer-events none
  z-index 15000
  transition all 0.395s ease-in-out

  a svg {
    width 2.7rem
    height auto
  }

  .get-game {
    opacity: 0
    transform translateY(-2rem)
    transition all 0.23s ease

    b {
      color: var(--color-link)
    }
  }

  .social {
    opacity: 0
    transform translateY(3.5rem)
    transition all 0.28s ease
  }

  .is-opened & {
    opacity 1
    pointer-events auto

    .get-game {
      opacity: 1
      transform translateY(0)
    }

    .social {
      opacity: 1
      transform translateY(0)
    }
  }
}

.shape-overlays {
  pointer-events none
  z-index: 4999

  path {
    &:nth-of-type(1) {
      fill: #ed3c39
    }

    &:nth-of-type(2) {
      fill: #b92d24
    }

    &:nth-of-type(3) {
      fill: var(--color-bg)
    }
  }

  .is-opened & {
    pointer-events auto
  }
}

@keyframes rotation {
    0% {
        transform: translate3d(0, 0, 0)
    }

    25% {
        transform: translate3d(-4%, 3%, 0)
    }

    75% {
        transform: translate3d(5%, -3%, 0)
    }

    100% {
        transform: translate3d(0, 0, 0)
    }
}

@keyframes thrusting {
    0% {
        transform translate3d(0, 0, 0)
    }

    50% {
        transform translate3d(4.5%, 4.5%, 0)
    }

    100% {
        transform translate3d(0, 0, 0)
    }
}
</style>
