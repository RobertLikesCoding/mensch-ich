<template>
  <section class="flex lg:justify-center relative px-3 gap-5">
    <img
      src="src/assets/18706286-leaves-5771440_1280.jpg"
      alt="leaves"
      class="flex-1 object-fill rounded-2xl max-w-md shadow"
    />

    <div class="flex-1 max-w-xl">
      <h2 class="text-3xl font-bold text-primary-600 mb-3">
        Unsere Philosophy
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
      <ul>
        <li class="flex gap-3 py-1">
          <CheckCircleIcon
            class="h-6 w-6 text-secondary-600"
            width="24"
            height="24"
          />
          <span
            >Empathie, Hilfsbereitschaft und Solidarität als Grundlage unseres
            Handelns</span
          >
        </li>
        <li class="flex gap-3 py-1">
          <CheckCircleIcon
            class="h-6 w-6 text-secondary-600"
            width="24"
            height="24"
          />
          <span>Evidenzbasierte, moderne therapeutische Methoden</span>
        </li>
        <li class="flex gap-3 py-1">
          <CheckCircleIcon
            class="h-6 w-6 text-secondary-600"
            width="24"
            height="24"
          />
          <span
            >Ganzheitlicher und qualitätsorientierter Behandlungsansatz</span
          >
        </li>
        <li class="flex gap-3 py-1">
          <CheckCircleIcon
            class="h-6 w-6 text-secondary-600"
            width="24"
            height="24"
          />
          <span
            >Partizipation: Sie sind aktive*r Mitgestaltende*r Ihres
            Therapieprozesses</span
          >
        </li>
        <li class="flex gap-3 py-1">
          <CheckCircleIcon
            class="h-6 w-6 text-secondary-600"
            width="24"
            height="24"
          />
          <span>Beratung als Hilfe zur Selbsthilfe</span>
        </li>
      </ul>

      <!-- decorative shapes -->
      <div
        class="bg-neutral-300 rounded-full absolute -z-10 -top-20 -left-20"
        style="width: 800px; height: 800px"
      ></div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import CheckCircleIcon from "./CheckCircleIcon.vue";
</script>
