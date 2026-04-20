<template>
  <section id="kontakt" class="flex justify-center relative px-3">
    <div class="flex flex-col gap-5 max-w-5xl">
      <h2
        class="text-4xl sm:text-5xl font-bold text-primary-600 mb-3 text-center"
      >
        Kontakt
      </h2>
      <p class="text-center">
        Haben Sie Fragen oder möchten Sie einen Termin vereinbaren? Wir sind für
        Sie da! <br />Behandlungen finden nur mit (privat)ärztlicher Verordnung
        statt. Präventivangebote sind hiervon ausgenommen und selbst zu zahlen.
      </p>
      <p></p>
      <div
        class="flex flex-col sm:flex-row m-auto w-80 sm:w-full flex-wrap gap-5 sm:ps-0 ps-10 justify-center"
      >
        <div class="flex p-1" aria-label="Telefonkontakt">
          <TelephoneIcon class="text-primary-600 m-3" />
          <div>
            <p class="text-primary-600">Telefon</p>
            +49152 2880 5368
          </div>
        </div>
        <div class="flex p-1" aria-label="Emailkontakt">
          <MailIcon class="text-primary-600 m-3" />
          <div>
            <p class="text-primary-600">E-Mail</p>
            ergotherapie-menschlich@posteo.de
          </div>
        </div>
        <div class="flex p-1" aria-label="Adresse & Anfahrt">
          <LocatorIcon class="text-primary-600 m-3" />
          <div>
            <p class="text-primary-600">Adresse</p>
            <p>
              Dörpfeldstraße 52 <br />
              12489 Berlin
            </p>
          </div>
        </div>
        <div class="flex p-1" aria-label="Öffnungszeiten">
          <ClockIcon class="text-primary-600 m-3" />
          <div>
            <p class="text-primary-600">Öffnungszeiten</p>
            <p>
              Mo - Do: 09:00 - 18:00 Uhr <br />
              Fr: 09:00 - 14:00 Uhr <br />
              Sa - So: Geschlossen <br />
              Termine nur nach Vereinbarung
            </p>
          </div>
        </div>
      </div>
      <p class="bg-neutral-300 rounded-2xl p-3">
        <b>Anfahrt:</b> Zu unserer Ergotherapie Praxis in Adlershof kommen Sie vom S
        Spindlersfeld oder S Adlershof mit der Tram 63 bis "Marktplatz
        Adlershof". Zu Fuß vom S Adlershof in ca. 10min <br /><br />
        <b>Parkplätze sind in der Umgebung vorhanden.</b> Das Gebäude ist
        barrierearm mit einer Rampe außen, sowie einem Aufzug innen
        ausgestattet. Sollten Sie weitere Unterstützung benötigen, sprechen Sie
        uns bitte darauf an!
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
  import ClockIcon from "./UI/ClockIcon.vue";
  import LocatorIcon from "./UI/LocatorIcon.vue";
  import MailIcon from "./UI/MailIcon.vue";
  import TelephoneIcon from "./UI/TelephoneIcon.vue";
</script>

<style scoped>
  section {
    scroll-margin-top: 150px;
  }
</style>
