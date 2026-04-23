<template>
  <section id="kontakt" class="flex justify-center relative px-3">
    <div class="flex flex-col gap-5 max-w-5xl">
      <h2
        class="text-4xl sm:text-5xl font-bold text-primary-600 mb-3 text-center"
      >
        {{ t("contact.heading") }}
      </h2>
      <p class="text-center">
        <span v-html="t('contact.intro')"></span>
      </p>
      <p></p>
      <div
        class="flex flex-col sm:flex-row m-auto w-80 sm:w-full flex-wrap gap-5 sm:ps-0 ps-10 justify-center"
      >
        <div class="flex p-1" aria-label="Telefonkontakt">
          <TelephoneIcon class="text-primary-600 m-3" />
          <div>
            <p class="text-primary-600">{{ t("contact.phone.label") }}</p>
            +49152 2880 5368
          </div>
        </div>
        <div class="flex p-1" aria-label="Emailkontakt">
          <MailIcon class="text-primary-600 m-3" />
          <div>
            <p class="text-primary-600">{{ t("contact.email.label") }}</p>
            ergotherapie-menschlich@posteo.de
          </div>
        </div>
        <div class="flex p-1" aria-label="Adresse & Anfahrt">
          <LocatorIcon class="text-primary-600 m-3" />
          <div>
            <p class="text-primary-600">{{ t("contact.address.label") }}</p>
            <p v-html="t('contact.address')"></p>
          </div>
        </div>
        <div class="flex p-1" aria-label="Öffnungszeiten">
          <ClockIcon class="text-primary-600 m-3" />
          <div>
            <p class="text-primary-600">{{ t("contact.opening.label") }}</p>
            <p>
              {{ t("contact.opening.monToThu") }} {{ MondayToThursdayStart }} -
              {{ MondayToThursdayEnd }} {{ lang === "de" ? "Uhr" : null }}
            </p>
            <p>
              {{ t("contact.opening.friday") }} {{ FridayStart }} -
              {{ FridayEnd }} {{ lang === "de" ? "Uhr" : null }}
            </p>
            <p v-html="t('contact.opening.weekend')"></p>
          </div>
        </div>
      </div>
      <p class="bg-neutral-300 rounded-2xl p-3">
        <span v-html="t('contact.route')"></span>
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
  import ClockIcon from "./UI/ClockIcon.vue";
  import LocatorIcon from "./UI/LocatorIcon.vue";
  import MailIcon from "./UI/MailIcon.vue";
  import TelephoneIcon from "./UI/TelephoneIcon.vue";
  import { lang, useTranslations } from "../i18n/languageUtils";
  const t = useTranslations();

  const formatter = new Intl.DateTimeFormat(lang.value, {
    hour: "2-digit",
    minute: "2-digit",
  });

  const MondayToThursdayStart = formatter.format(new Date(0, 0, 0, 9, 0));
  const MondayToThursdayEnd = formatter.format(new Date(0, 0, 0, 18, 0));
  const FridayStart = formatter.format(new Date(0, 0, 0, 9, 0));
  const FridayEnd = formatter.format(new Date(0, 0, 0, 14, 0));
</script>

<style scoped>
  section {
    scroll-margin-top: 150px;
  }
</style>
