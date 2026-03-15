<template>
  <section id="leistungen" class="flex flex-col lg:items-center">
    <div class="text-center relative px-3 max-w-5xl">
      <h2 class="text-4xl font-bold text-primary-600 mb-3">
        Unsere Leistungen
      </h2>
      <p>
        Wir bieten Ihnen ein breites Spektrum an ergotherapeutischen Einzel- und
        Gruppenbehandlungen für alle Altersgruppen – kassenärztliche Leistungen
        und Selbstzahlerangebote.
      </p>

      <!-- decorative shapes -->
      <div
        class="bg-neutral-300 rounded-full absolute -z-10 -left-64"
        style="
          width: 400px;
          height: 400px;
          background-color: hsl(34.6, 41.9%, 90%);
        "
      ></div>
      <div
        class="bg-neutral-300 rounded-full absolute -z-10 top-84"
        style="
          width: 260px;
          height: 260px;
          right: -10%;
          background-color: hsl(34.6, 41.9%, 90%);
        "
      ></div>
    </div>

    <div class="overflow-x-auto">
      <div class="px-10 md:px-3 flex gap-3 py-10">
        <ServiceCard
          v-for="service in services"
          :title="service.title"
          :img="service.illustration"
          :alt="service.alt"
        >
          {{ service.description }}
        </ServiceCard>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import imgGeriatrie from "../assets/Geriatrie.svg";
  import imgOrthopädie from "../assets/Orthopädie.svg";
  import imgPsychatrie from "../assets/Psychiatrie.svg";
  import imgPädiatrie from "../assets/Pädiatrie.svg";
  import ServiceCard from "./ServiceCard.vue";

  const services = [
    {
      title: "Orthopädie",
      description:
        "Therapie nach Verletzungen, Operationen oder bei chronischen Schmerzen zur Wiederherstellung der Beweglichkeit und Funktionsfähigkeit.",
      illustration: imgOrthopädie.src,
      alt: "Zeichnung einer Handmassage.",
    },
    {
      title: "Pädiatrie",
      description:
        "Förderung von Kindern mit Entwicklungsverzögerungen, Wahrnehmungsstörungen oder motorischen Schwierigkeiten für eine optimale Entwicklung.",
      illustration: imgPädiatrie.src,
      alt: "Zeichnung von drei Hände haltenden Kindern.",
    },
    {
      title: "Psychiatrie",
      description:
        "Unterstützung bei psychischen Erkrankungen zur Stärkung der Alltagskompetenzen und Förderung der sozialen Teilhabe.",
      illustration: imgPsychatrie.src,
      alt: "Zeichnung eines Menschens mit einer negativen Gedankenblase.",
    },
    {
      title: "Geriatrie",
      description:
        "Förderung von Kindern mit Entwicklungsverzögerungen, Wahrnehmungsstörungen oder motorischen Schwierigkeiten für eine optimale Entwicklung.",
      illustration: imgGeriatrie.src,
      alt: "Zeichnung eines Seniorenpärchens.",
    },
  ];
</script>

<style scoped>
  section {
    scroll-margin-top: 130px;
  }
</style>
