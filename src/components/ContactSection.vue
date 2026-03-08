<template>
  <section class="flex lg:justify-center relative px-3">
    <div class="flex flex-col gap-5 content-box">
      <h2 class="text-4xl font-bold text-primary-600 mb-3 text-center">
        Kontakt
      </h2>
      <p class="text-center">
        Haben Sie Fragen oder möchten Sie einen Termin vereinbaren? <br />
        Wir sind für Sie da!
      </p>
      <div class="flex flex-wrap gap-5 sm:ps-0 ps-10">
        <div class="flex p-1">
          <TelephoneIcon class="text-primary-600 m-3" />
          <div>
            <p>Telefon</p>
            +49152 2880 5368
          </div>
        </div>
        <div class="flex p-1">
          <MailIcon class="text-primary-600 m-3" />
          <div>
            <p>E-Mail</p>
            <a href="mailto:ergo@menschlich.de"></a>
            ergo@menschlich.de
          </div>
        </div>
        <div class="flex p-1">
          <LocatorIcon class="text-primary-600 m-3" />
          <div>
            <p>Adresse</p>
            <p>
              Dörpfelder Str. 52 <br />
              12489 Berlin
            </p>
          </div>
        </div>
        <div class="flex p-1">
          <ClockIcon class="text-primary-600 m-3" />
          <div>
            <p>Öffnungszeiten</p>
            <p>
              Mo - Do: 08:00 - 18:00 Uhr <br />
              Fr: 08:00 - 16:00 Uhr <br />
              Sa - So: Geschlossen <br />
              Termine nach Vereinbarung
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import ClockIcon from "./UI/ClockIcon.vue";
  import LocatorIcon from "./UI/LocatorIcon.vue";
  import MailIcon from "./UI/MailIcon.vue";
  import TelephoneIcon from "./UI/TelephoneIcon.vue";
</script>
