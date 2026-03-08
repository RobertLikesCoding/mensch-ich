<template>
  <section class="flex lg:justify-center relative px-3">
    <div class="content-box flex flex-col items-center gap-5">
      <div class="text-neutral-100 text-shadow-lg text-center">
        <h2 class="text-3xl font-bold mb-3">Unser Team</h2>
        <p>
          Zwei erfahrene Ergotherapeutinnen mit gemeinsamer Vision: Eine
          moderne, sozial verantwortungsvolle Praxis, die fachliche Qualität und
          Menschlichkeit vereint.
        </p>
      </div>
      <!-- add team cards here -->
      <div class="flex sm:flex-nowrap flex-wrap gap-5">
        <TeamCard
          v-for="member in team"
          :key="member.name"
          :name="member.name"
          :skills="member.skills"
          :description="member.description"
          :img-path="member.imgPath"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import TeamCard from "./TeamCard.vue";

  const team = [
    {
      name: "Corinna Baufeld",
      skills: [
        "Handtherapie",
        "Ultraschallanwendung",
        "Mindfulness-Based Stress Reduction",
        "Therapeutisches Yoga",
      ],
      description:
        "Corinna Baufeld bringt umfassende Expertise in klientenzentrierter Therapie, Prävention und Resilienzförderung mit. Ihr besonderer Schwerpunkt liegt auf betrieblicher Gesundheitsförderung. Zudem verfügt sie über mehrjährige Vorstandserfahrung in einer Elterninitiativkita.",
      imgPath: "src/assets/Robert_Avatar.png",
    },
    {
      name: "Claudia Rothe",
      skills: [
        "Sensorische Integrationstherapie",
        "Respektare®",
        "Praxismanagement",
        "Ausbilderin (4 Jahre Erfahrung)",
      ],
      description:
        "Claudia Rothe verfügt über fundiertes Wissen in Praxismanagement und der Entwicklung digitaler sowie mobiler Versorgungsangebote. Sie pflegt enge Kooperationen mit zwei Ausbildungsschulen und trägt aktiv zur Nachwuchsförderung bei.",
      imgPath: "src/assets/Robert_Avatar.png",
    },
    {
      name: "Lilly Benduhn",
      skills: [
        "Sensorische Integrationstherapie",
        "Respektare®",
        "Praxismanagement",
        "Ausbilderin (4 Jahre Erfahrung)",
      ],
      description:
        "Claudia Rothe verfügt über fundiertes Wissen in Praxismanagement und der Entwicklung digitaler sowie mobiler Versorgungsangebote. Sie pflegt enge Kooperationen mit zwei Ausbildungsschulen und trägt aktiv zur Nachwuchsförderung bei.",
      imgPath: "src/assets/Robert_Avatar.png",
    },
  ];
</script>
