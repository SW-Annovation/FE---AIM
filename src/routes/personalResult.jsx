import React from 'react'

const personalResult = () => {
  return (
    <>
      <div class="w-full rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
        <div class="sm:hidden">
          <label for="tabs" class="sr-only">
            Select tab
          </label>
          <select
            id="tabs"
            class="focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-full rounded-t-lg border-0 border-b border-gray-200 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
          >
            <option>Statistics</option>
            <option>Services</option>
            <option>FAQ</option>
          </select>
        </div>
        <ul
          class="hidden divide-x divide-gray-200 rounded-lg text-center text-sm font-medium text-gray-500 rtl:divide-x-reverse dark:divide-gray-600 dark:text-gray-400 sm:flex"
          id="fullWidthTab"
          data-tabs-toggle="#fullWidthTabContent"
          role="tablist"
        >
          <li class="w-full">
            <button
              id="stats-tab"
              data-tabs-target="#stats"
              type="button"
              role="tab"
              aria-controls="stats"
              aria-selected="true"
              class="inline-block w-full rounded-ss-lg bg-gray-50 p-4 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600"
            >
              Statistics
            </button>
          </li>
          <li class="w-full">
            <button
              id="about-tab"
              data-tabs-target="#about"
              type="button"
              role="tab"
              aria-controls="about"
              aria-selected="false"
              class="inline-block w-full bg-gray-50 p-4 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600"
            >
              Services
            </button>
          </li>
          <li class="w-full">
            <button
              id="faq-tab"
              data-tabs-target="#faq"
              type="button"
              role="tab"
              aria-controls="faq"
              aria-selected="false"
              class="inline-block w-full rounded-se-lg bg-gray-50 p-4 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600"
            >
              FAQ
            </button>
          </li>
        </ul>
        <div id="fullWidthTabContent" class="border-t border-gray-200 dark:border-gray-600">
          <div
            class="hidden rounded-lg bg-white p-4 dark:bg-gray-800 md:p-8"
            id="stats"
            role="tabpanel"
            aria-labelledby="stats-tab"
          >
            <dl class="mx-auto grid max-w-screen-xl grid-cols-2 gap-8 p-4 text-gray-900 dark:text-white sm:grid-cols-3 sm:p-8 xl:grid-cols-6">
              <div class="flex flex-col items-center justify-center">
                <dt class="mb-2 text-3xl font-extrabold">73M+</dt>
                <dd class="text-gray-500 dark:text-gray-400">Developers</dd>
              </div>
              <div class="flex flex-col items-center justify-center">
                <dt class="mb-2 text-3xl font-extrabold">100M+</dt>
                <dd class="text-gray-500 dark:text-gray-400">Public repositories</dd>
              </div>
              <div class="flex flex-col items-center justify-center">
                <dt class="mb-2 text-3xl font-extrabold">1000s</dt>
                <dd class="text-gray-500 dark:text-gray-400">Open source projects</dd>
              </div>
              <div class="flex flex-col items-center justify-center">
                <dt class="mb-2 text-3xl font-extrabold">1B+</dt>
                <dd class="text-gray-500 dark:text-gray-400">Contributors</dd>
              </div>
              <div class="flex flex-col items-center justify-center">
                <dt class="mb-2 text-3xl font-extrabold">90+</dt>
                <dd class="text-gray-500 dark:text-gray-400">Top Forbes companies</dd>
              </div>
              <div class="flex flex-col items-center justify-center">
                <dt class="mb-2 text-3xl font-extrabold">4M+</dt>
                <dd class="text-gray-500 dark:text-gray-400">Organizations</dd>
              </div>
            </dl>
          </div>
          <div
            class="hidden rounded-lg bg-white p-4 dark:bg-gray-800 md:p-8"
            id="about"
            role="tabpanel"
            aria-labelledby="about-tab"
          >
            <h2 class="mb-5 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              We invest in the world’s potential
            </h2>
            <ul role="list" class="space-y-4 text-gray-500 dark:text-gray-400">
              <li class="flex items-center space-x-2 rtl:space-x-reverse">
                <svg
                  class="text-blue-600 dark:text-blue-500 h-3.5 w-3.5 flex-shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span class="leading-tight">Dynamic reports and dashboards</span>
              </li>
              <li class="flex items-center space-x-2 rtl:space-x-reverse">
                <svg
                  class="text-blue-600 dark:text-blue-500 h-3.5 w-3.5 flex-shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span class="leading-tight">Templates for everyone</span>
              </li>
              <li class="flex items-center space-x-2 rtl:space-x-reverse">
                <svg
                  class="text-blue-600 dark:text-blue-500 h-3.5 w-3.5 flex-shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span class="leading-tight">Development workflow</span>
              </li>
              <li class="flex items-center space-x-2 rtl:space-x-reverse">
                <svg
                  class="text-blue-600 dark:text-blue-500 h-3.5 w-3.5 flex-shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span class="leading-tight">Limitless business automation</span>
              </li>
            </ul>
          </div>
          <div
            class="hidden rounded-lg bg-white p-4 dark:bg-gray-800"
            id="faq"
            role="tabpanel"
            aria-labelledby="faq-tab"
          >
            <div
              id="accordion-flush"
              data-accordion="collapse"
              data-active-classes="bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              data-inactive-classes="text-gray-500 dark:text-gray-400"
            >
              <h2 id="accordion-flush-heading-1">
                <button
                  type="button"
                  class="flex w-full items-center justify-between border-b border-gray-200 py-5 text-left font-medium text-gray-500 rtl:text-right dark:border-gray-700 dark:text-gray-400"
                  data-accordion-target="#accordion-flush-body-1"
                  aria-expanded="true"
                  aria-controls="accordion-flush-body-1"
                >
                  <span>What is Flowbite?</span>
                  <svg
                    data-accordion-icon
                    class="h-3 w-3 shrink-0 rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-flush-body-1"
                class="hidden"
                aria-labelledby="accordion-flush-heading-1"
              >
                <div class="border-b border-gray-200 py-5 dark:border-gray-700">
                  <p class="mb-2 text-gray-500 dark:text-gray-400">
                    Flowbite is an open-source library of interactive components built on top of
                    Tailwind CSS including buttons, dropdowns, modals, navbars, and more.
                  </p>
                  <p class="text-gray-500 dark:text-gray-400">
                    Check out this guide to learn how to{' '}
                    <a
                      href="/docs/getting-started/introduction/"
                      class="text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      get started
                    </a>{' '}
                    and start developing websites even faster with components on top of Tailwind
                    CSS.
                  </p>
                </div>
              </div>
              <h2 id="accordion-flush-heading-2">
                <button
                  type="button"
                  class="flex w-full items-center justify-between border-b border-gray-200 py-5 text-left font-medium text-gray-500 rtl:text-right dark:border-gray-700 dark:text-gray-400"
                  data-accordion-target="#accordion-flush-body-2"
                  aria-expanded="false"
                  aria-controls="accordion-flush-body-2"
                >
                  <span>Is there a Figma file available?</span>
                  <svg
                    data-accordion-icon
                    class="h-3 w-3 shrink-0 rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-flush-body-2"
                class="hidden"
                aria-labelledby="accordion-flush-heading-2"
              >
                <div class="border-b border-gray-200 py-5 dark:border-gray-700">
                  <p class="mb-2 text-gray-500 dark:text-gray-400">
                    Flowbite is first conceptualized and designed using the Figma software so
                    everything you see in the library has a design equivalent in our Figma file.
                  </p>
                  <p class="text-gray-500 dark:text-gray-400">
                    Check out the{' '}
                    <a
                      href="https://flowbite.com/figma/"
                      class="text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Figma design system
                    </a>{' '}
                    based on the utility classes from Tailwind CSS and components from Flowbite.
                  </p>
                </div>
              </div>
              <h2 id="accordion-flush-heading-3">
                <button
                  type="button"
                  class="flex w-full items-center justify-between border-b border-gray-200 py-5 text-left font-medium text-gray-500 rtl:text-right dark:border-gray-700 dark:text-gray-400"
                  data-accordion-target="#accordion-flush-body-3"
                  aria-expanded="false"
                  aria-controls="accordion-flush-body-3"
                >
                  <span>What are the differences between Flowbite and Tailwind UI?</span>
                  <svg
                    data-accordion-icon
                    class="h-3 w-3 shrink-0 rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-flush-body-3"
                class="hidden"
                aria-labelledby="accordion-flush-heading-3"
              >
                <div class="border-b border-gray-200 py-5 dark:border-gray-700">
                  <p class="mb-2 text-gray-500 dark:text-gray-400">
                    The main difference is that the core components from Flowbite are open source
                    under the MIT license, whereas Tailwind UI is a paid product. Another difference
                    is that Flowbite relies on smaller and standalone components, whereas Tailwind
                    UI offers sections of pages.
                  </p>
                  <p class="mb-2 text-gray-500 dark:text-gray-400">
                    However, we actually recommend using both Flowbite, Flowbite Pro, and even
                    Tailwind UI as there is no technical reason stopping you from using the best of
                    two worlds.
                  </p>
                  <p class="mb-2 text-gray-500 dark:text-gray-400">
                    Learn more about these technologies:
                  </p>
                  <ul class="list-disc ps-5 text-gray-500 dark:text-gray-400">
                    <li>
                      <a
                        href="https://flowbite.com/pro/"
                        class="text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Flowbite Pro
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://tailwindui.com/"
                        rel="nofollow"
                        class="text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Tailwind UI
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default personalResult
