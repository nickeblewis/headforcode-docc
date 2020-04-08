<template>
  <Layout>
    <div class="pt-8 md:pt-16">
      <div class="flex flex-col items-center">
        <div class="flex flex-col items-center mb-2 text-ui-primary">
          <Logo :width="80" />
          <h2 class="text-3xl text-6xl font-black tracking-tighter border-none">
            HeadForCode
          </h2>
        </div>
        <h1 class="text-4xl text-center lg:text-5xl">
          We Code. We Teach.
        </h1>
        <p class="text-xl font-medium text-center">
          JavaScript - HTML - CSS / Web - Desktop - Mobile
          <br>
          <strong class="text-ui-primary">Got a spare minute? Learn some new skills today!</strong>
        </p>

        <!-- <div class="py-4">
          <code class="block px-4 py-1 select-all bg-ui-border text-ui-typo">gridsome create your-project https://github.com/mrcrmn/docc</code>
        </div> -->

        <div class="flex justify-center mt-8">
          <g-link
            to="/learn/"
            class="flex items-center px-6 py-4 ml-auto text-2xl font-bold leading-none text-white border rounded-lg shadow-lg bg-ui-primary border-ui-primary transition-all duration-200 ease-out transform hover:shadow-xl hover:-translate-y-1"
          >
            Start learning
            <ArrowRightCircleIcon class="ml-4" size="1x" />
          </g-link>
        </div>

        <p class="mt-8 text-center">
          Open Source. MIT License. <span class="border-b border-dashed border-ui-primary text-ui-primary">Make it your own</span>.
        </p>

      </div>

      <div class="pt-8 mx-auto mt-8 border-t md:mt-16 md:pt-16 border-top border-ui-border max-w-screen-sm"></div>

      <!-- <div class="flex flex-wrap justify-center -mx-4">
        <div class="flex flex-col items-center w-full px-4 mb-8 text-center md:w-1/3">
          <EditIcon size="3x" class="mb-6 text-ui-primary" />
          <h3 class="font-bold tracking-wide uppercase text-ui-primary">
            HTML
          </h3>
          <p class="text-lg text-left">
            
          </p>
        </div>

        <div class="flex flex-col items-center w-full px-4 mb-8 text-center md:w-1/3">
          <EditIcon size="3x" class="mb-6 text-ui-primary" />
          <h3 class="font-bold tracking-wide uppercase text-ui-primary">
            CSS
          </h3>
          <p class="text-lg text-left">
            Learn how to use CSS and SASS the most popular pre-compiler for your stylesheets.
          </p>
        </div>

        <div class="flex flex-col items-center w-full px-4 mb-8 text-center md:w-1/3">
          <EditIcon size="3x" class="mb-6 text-ui-primary" />
          <h3 class="font-bold tracking-wide uppercase text-ui-primary">
            Javascript
          </h3>
          <p class="text-lg text-left">
            VueJS is what we teach around here along with regular Javascript and NodeJS back-ends.
          </p>
        </div>
      </div> -->
      <div class="flex flex-wrap justify-center -mx-4">
        <div class="flex flex-col items-center w-full px-4 mb-8 text-center md:w-1/3">
          <ZapIcon size="3x" class="mb-6 text-ui-primary" />
          <h3 class="font-bold tracking-wide uppercase text-ui-primary">
            Agency
          </h3>
          <p class="text-lg text-left">
            We develop websites and apps for people using Gridsome, VueJS. Outputs static files to Netlify. It wont't get any faster than that. <span class="border-b border-dashed border-ui-primary text-ui-primary">No seriously</span>.
          </p>
        </div>

        <div class="flex flex-col items-center w-full px-4 mb-8 text-center md:w-1/3">
          <SearchIcon size="3x" class="mb-6 text-ui-primary" />
          <h3 class="font-bold tracking-wide uppercase text-ui-primary">
            Learn
          </h3>
          <p class="text-lg text-left">
            All lessons are indexed. Instant search powered by Fuse.js. Find what you are looking for in the <span class="border-b border-dashed border-ui-primary text-ui-primary">blink of an eye</span>. Covers HTML, CSS and Javascript topics.
          </p>
        </div>

        <div class="flex flex-col items-center w-full px-4 mb-8 text-center md:w-1/3">
          <VideoIcon size="3x" class="mb-6 text-ui-primary" />
          <h3 class="font-bold tracking-wide uppercase text-ui-primary">
            Teach
          </h3>
          <p class="text-lg text-left">
            Looking to learn how to build VueJS apps and other related things yourself. Want to learn with our help? <span class="border-b border-dashed border-ui-primary text-ui-primary">Well you can via Zoom!</span>.
          </p>
        </div>
      </div>

    </div>
  </Layout>
</template>

<script>
import Logo from '@/components/Logo';
import { ArrowRightCircleIcon, ZapIcon, CodeIcon, MoonIcon, SearchIcon, EditIcon, VideoIcon } from 'vue-feather-icons';

export default {
  components: {
    Logo,
    ArrowRightCircleIcon,
    ZapIcon,
    CodeIcon,
    MoonIcon,
    SearchIcon,
    EditIcon,
    VideoIcon
  },

  metaInfo() {
    const title = 'HeadForCode';
    const description = 'Helping developers learn day by day';

    return {
      title: title,
      meta: [
        {
          name: 'description',
          content: description
        },
        {
          key: 'og:title',
          name: 'og:title',
          content: title,
        },
        {
          key: 'twitter:title',
          name: 'twitter:title',
          content: title,
        },
        {
          key: 'og:description',
          name: 'og:description',
          content: description,
        },
        {
          key: 'twitter:description',
          name: 'twitter:description',
          content: description,
        },
      ]
    }
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
