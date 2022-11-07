<script lang="ts">
  import { fade } from 'svelte/transition';

  import Footer from './lib/Footer.svelte';
  import IconStar from './lib/icons/IconStar.svelte';

  let rating = 0;
  const onFormSubmit = (event: Event) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const data = new FormData(form);
    rating = parseInt(data.get('rating').toString());
  };
</script>

<main class="flex justify-center items-center min-h-screen p-6">
  <h1 class="sr-only">Your rating / Rate us!</h1>
  <article class="md:max-w-xs p-6 rounded-2xl bg-darker-blue">
    {#if rating <= 0}
      <div class="space-y-4">
        <div
          class="inline-block p-3 rounded-full bg-dark-blue transition-transform hover:scale-110"
        >
          <IconStar />
        </div>
        <h2 class="text-2xl font-bold">How did we do?</h2>
        <p class="text-light-gray text-sm leading-relaxed">
          Please let us know how we did with your support request. All feedback is
          appreciated to help us improve our offering!
        </p>
        <form class="group space-y-6" on:submit={onFormSubmit}>
          <fieldset>
            <legend class="sr-only">Rating from 1 to 5</legend>
            <div class="flex justify-between text-sm">
              <label for="rate-1">
                <span class="sr-only">Rate 1</span>
                <input
                  required
                  class="flex justify-center items-center w-10 h-10 pt-[0.3em] rounded-full bg-dark-blue checked:bg-light-gray text-medium-gray checked:text-white transition-colors appearance-none cursor-pointer after:content-['1'] active:bg-orange active:text-white md:hover:bg-orange md:hover:text-white"
                  id="rate-1"
                  name="rating"
                  type="radio"
                  value="1"
                />
              </label>
              <label for="rate-2">
                <span class="sr-only">Rate 2</span>
                <input
                  class="flex justify-center items-center w-10 h-10 pt-[0.3em] rounded-full bg-dark-blue checked:bg-light-gray text-medium-gray checked:text-white transition-colors appearance-none cursor-pointer after:content-['2'] active:bg-orange active:text-white md:hover:bg-orange md:hover:text-white"
                  id="rate-2"
                  name="rating"
                  type="radio"
                  value="2"
                />
              </label>
              <label for="rate-3">
                <span class="sr-only">Rate 3</span>
                <input
                  class="flex justify-center items-center w-10 h-10 pt-[0.3em] rounded-full bg-dark-blue checked:bg-light-gray text-medium-gray checked:text-white transition-colors appearance-none cursor-pointer after:content-['3'] active:bg-orange active:text-white md:hover:bg-orange md:hover:text-white"
                  id="rate-3"
                  name="rating"
                  type="radio"
                  value="3"
                />
              </label>
              <label for="rate-4">
                <span class="sr-only">Rate 4</span>
                <input
                  class="flex justify-center items-center w-10 h-10 pt-[0.3em] rounded-full bg-dark-blue checked:bg-light-gray text-medium-gray checked:text-white transition-colors appearance-none cursor-pointer after:content-['4'] active:bg-orange active:text-white md:hover:bg-orange md:hover:text-white"
                  id="rate-4"
                  name="rating"
                  type="radio"
                  value="4"
                />
              </label>
              <label for="rate-5">
                <span class="sr-only">Rate 5</span>
                <input
                  class="flex justify-center items-center w-10 h-10 pt-[0.3em] rounded-full bg-dark-blue checked:bg-light-gray text-medium-gray checked:text-white transition-colors appearance-none cursor-pointer after:content-['5'] active:bg-orange active:text-white md:hover:bg-orange md:hover:text-white"
                  id="rate-5"
                  name="rating"
                  type="radio"
                  value="5"
                />
              </label>
            </div>
          </fieldset>
          <button
            class="block w-full p-3 pt-4 rounded-full bg-orange text-sm leading-none tracking-widest uppercase transition-all hover:bg-white hover:text-orange group-valid:hover:scale-105 group-invalid:bg-dark-blue group-invalid:text-medium-gray group-invalid:pointer-events-none"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    {:else}
      <div class="py-4 space-y-6 text-center" in:fade={{ delay: 150, duration: 300 }}>
        <img
          class="mx-auto"
          src="/images/illustration-thank-you.svg"
          alt="Thank you"
          width="162"
          height="108"
        />
        <i
          class="inline-block rounded-full px-3 pb-1 pt-2 bg-dark-blue text-orange text-sm not-italic"
          >You selected {rating} ouf of 5</i
        >
        <h2 class="text-2xl font-bold">Thank you!</h2>
        <p class="!mt-3 text-medium-gray text-sm leading-relaxed">
          We appreciate you taking the time to give a rating. If you ever need more
          support, don't hesitate to get in touch!
        </p>
      </div>
    {/if}
  </article>
</main>
<Footer />
