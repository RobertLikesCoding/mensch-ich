<template>
  <section id="überuns" class="flex justify-center relative px-3">
    <div class="flex flex-col max-w-5xl gap-1">
      <h2 class="text-4xl font-bold text-primary-600 mb-3">
        Unsere Philosophie
      </h2>
      <p class="font-bold">
        Ein Ort der Gesundheit, Entwicklung und Menschlichkeit
      </p>
      <br />
      <p>
        Ergotherapie bedeutet für uns, Menschen darin zu unterstützen, ihren
        Alltag selbstbestimmt, sinnvoll und erfüllend zu gestalten.
      </p>
      <br />
      <p>
        Als erfahrene Ergotherapeutinnen betrachten wir den Menschen
        ganzheitlich – auf körperlicher, geistiger, sozialer und beruflicher
        Ebene. Diese Bereiche stehen in ständiger Wechselwirkung und
        beeinflussen maßgeblich den Heilungsprozess.
      </p>
      <br />
      <p>
        Wir nehmen uns Zeit, genau hinzuschauen und zu verstehen, welche
        Faktoren sich gegenseitig beeinflussen. Unsere Beratung ist individuell
        und lösungsorientiert – wir klären über Ursachen, Folgen und
        Behandlungsmöglichkeiten auf und vermitteln Wissen zur Eigenbehandlung.
      </p>
      <br />
      <ul class="mt-3">
        <li class="flex gap-3 py-1">
          <CheckCircleIcon class="h-6 w-6 shrink-0 text-secondary-600" />
          <span
            >Empathie, Hilfsbereitschaft und Solidarität als Grundlage unseres
            Handelns</span
          >
        </li>
        <li class="flex gap-3 py-1">
          <CheckCircleIcon class="h-6 w-6 shrink-0 text-secondary-600" />
          <span>Evidenzbasierte, moderne therapeutische Methoden</span>
        </li>
        <li class="flex gap-3 py-1">
          <CheckCircleIcon class="h-6 w-6 shrink-0 text-secondary-600" />
          <span
            >Ganzheitlicher und qualitätsorientierter Behandlungsansatz</span
          >
        </li>
        <li class="flex gap-3 py-1">
          <CheckCircleIcon class="h-6 w-6 shrink-0 text-secondary-600" />
          <span
            >Partizipation: Sie sind aktive*r Mitgestaltende*r Ihres
            Therapieprozesses</span
          >
        </li>
        <li class="flex gap-3 py-1">
          <CheckCircleIcon class="h-6 w-6 shrink-0 text-secondary-600" />
          <span>Beratung als Hilfe zur Selbsthilfe</span>
        </li>
      </ul>

      <!-- decorative shapes -->
      <div
        class="bg-neutral-300 rounded-full absolute -z-10 -top-20 -left-20"
        style="
          width: 800px;
          height: 800px;
          background-color: hsl(34.6, 41.9%, 90%);
        "
      ></div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import CheckCircleIcon from "./UI/CheckCircleIcon.vue";
</script>

<style scoped>
  section {
    scroll-margin-top: 180px;
  }
</style>
