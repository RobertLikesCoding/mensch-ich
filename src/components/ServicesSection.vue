<template>
  <section class="px-3 flex flex-col lg:items-center">
    <div class="text-center">
      <h2 class="text-3xl font-bold text-primary-600 mb-3">
        Unsere Leistungen
      </h2>
      <p>
        Wir bieten Ihnen ein breites Spektrum an ergotherapeutischen Einzel- und
        Gruppenbehandlungen für alle Altersgruppen – kassenärztliche Leistungen
        und Selbstzahlerangebote.
      </p>
    </div>

    <div class="overflow-x-auto flex gap-3 py-10">
      <ServiceCard
        v-for="service in services"
        :title="service.title"
        :img="service.illustration"
      >
        {{ service.description }}
      </ServiceCard>
    </div>
  </section>
</template>

<script setup lang="ts">
  import ServiceCard from "./ServiceCard.vue";

  const services = [
    {
      title: "Pädiatrie",
      description:
        "Förderung von Kindern mit Entwicklungsverzögerungen, Wahrnehmungsstörungen oder motorischen Schwierigkeiten für eine optimale Entwicklung.",
      illustration: "~/src/assets/example.png",
    },
    {
      title: "Orthopädie",
      description:
        "Therapie nach Verletzungen, Operationen oder bei chronischen Schmerzen zur Wiederherstellung der Beweglichkeit und Funktionsfähigkeit.",
      illustration: "~/src/assets/example.png",
    },
    {
      title: "Psychiatrie & psychische Gesundheit",
      description:
        "Unterstützung bei psychischen Erkrankungen zur Stärkung der Alltagskompetenzen und Förderung der sozialen Teilhabe.",
      illustration: "~/src/assets/example.png",
    },
    {
      title: "Geriatrie",
      description:
        "Förderung von Kindern mit Entwicklungsverzögerungen, Wahrnehmungsstörungen oder motorischen Schwierigkeiten für eine optimale Entwicklung.",
      illustration: "~/src/assets/example.png",
    },
  ];
</script>
