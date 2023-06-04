<template>
  <main>
    <!-- Hero section -->
    <section class="py-24 grid gap-y-4 place-content-center limit-width">
      <header class="text-center">
        <p class="text-xs">Search tool for reference & emergency care</p>
        <h1 class="heading-1">CarePrompt Search</h1>
      </header>
      <MyMainSearchInput class="w-full mx-auto lg:min-w-[760px]" />
      <SocialProof class="text-center mx-auto" />
    </section>
    <!-- Problem & Solution -->
    <section class="bg-[--blue300] py-8 limit-width">
      <ul class="pb-24 md:flex">
        <li>
          <Icon
            name="game-icons:sands-of-time"
            size="32px"
            class="text-[--blue900]"
          />
          <p class="border-l-2 border-[--blue900] pl-2 pt-1 my-1 ml-3">
            Doctors usually have a hard time updating themselves, they have a
            lot in their schedule and little time to spare.
          </p>
        </li>
        <li>
          <Icon
            name="emojione-monotone:pregnant-woman"
            size="32px"
            class="text-[--blue900]"
          />
          <p class="border-l-2 border-[--blue900] pl-2 pt-1 my-1 ml-3">
            Maternal mortality is still a big problem in Africa with a rate of
            362 deaths per 100, 000 live births.
          </p>
        </li>
        <li>
          <Icon
            name="fluent-emoji-high-contrast:sleepy-face"
            size="32px"
            class="text-[--blue900]"
          />
          <p class="border-l-2 border-[--blue900] pl-2 pt-1 my-1 ml-3">
            The means used by medical practitioners to update themselves are
            usually long and boring to consume.
          </p>
        </li>
      </ul>

      <div class="pb-24 md:flex md:gap-x-16 md:items-center lg:gap-x-32">
        <img
          src="~/assets/images/problem.webp"
          class="img-bordered md:w-1/3"
          draggable="false"
          alt=""
        />
        <div>
          <h2 class="heading-2">The problem & how we come in.</h2>
          <p class="py-2">
            Kenya has a maternal mortality rate which is five times higher than
            SDG target 3.1 i.e 342 per 100, 000 live births.
          </p>
          <p class="py-2">
            In the absence of consultant Obstetricians and Gynaecologists, first
            line health workers dealing with obstetric emergencies face the
            challenges in that they lack access to training of lifesaving skills
            and latest guidelines to treat emergencies or even stabilize
            patients prior to and during referral. Maternal mortalities
            resulting from inadequate training and preparedness among healthcare
            professionals.
          </p>
          <p class="py-2">
            By deliverying these protocols through an innovative and interactive
            platform, the startup ensures that health workers can easily access
            the information they need, even in high-pressure situations. The
            comprehensive collection of protocols covers a wide range of
            obstetric emergencies, enabling health workers to familiarize
            themselves with best practices and evidence-based approaches.
          </p>
        </div>
      </div>

      <div class="pb-24 md:flex md:gap-x-16 md:items-center lg:gap-x-32">
        <div>
          <h2 class="heading-2">
            We believe protocols should be clear, concise and to the point.
          </h2>
          <div class="py-2">
            <p>
              We plan to create content that is easy to consume in any
              situation:
            </p>
            <ul class="list-disc list-inside">
              <li>Detailed & concise</li>
              <li>Peer reviewed</li>
              <li>Open-sourced</li>
            </ul>
            <p>
              This will make obstetric interventions easier to navigate reducing
              the number of mortalities.
            </p>
          </div>

          <dl class="flex gap-8">
            <div class="text-center">
              <dt class="serif font-bold">100+</dt>
              <dd class="text-xs">protocols</dd>
            </div>
            <div class="text-center">
              <dt class="serif font-bold">20+</dt>
              <dd class="text-xs">contributions</dd>
            </div>
            <div class="text-center">
              <dt class="serif font-bold">20+</dt>
              <dd class="text-xs">users</dd>
            </div>
          </dl>
        </div>
        <img
          src="~/assets/images/reading.webp"
          class="img-bordered my-4 md:w-1/3"
          draggable="false"
          alt=""
        />
      </div>

      <div class="max-w-lg mx-auto text-center grid gap-y-4 pb-24">
        <SocialProof2 />
        <h2 class="heading-2">
          Welcoming creative contributors to grow our knowledge repository.
        </h2>
        <p>
          Creating medical protocols is no mean task. We are looking for
          talented doctors to join our movement.
        </p>
        <div>
          <button class="btn btn-blue">
            <Icon
              name="fluent:people-community-16-regular"
              size="24px"
            />&nbsp;Join us
          </button>
        </div>
      </div>
    </section>
  </main>
</template>
