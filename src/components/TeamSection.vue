<template>
  <section id="team" class="flex justify-center relative px-3">
    <div class="max-w-5xl flex flex-col items-center gap-5">
      <div class="text-neutral-100 text-shadow-lg text-center">
        <h2 class="text-4xl font-bold mb-3">Unser Team</h2>
        <p>
          Wir sind wwei erfahrene Ergotherapeutinnen mit einer gemeinsamen
          Vision: Eine moderne, sozial verantwortungsvolle Praxis schaffen, die
          hohe fachliche Qualität und Menschlichkeit vereint. Bei uns steht die
          Gesundheit sowohl der Patient*innen als auch der Mitarbeiter*innen im
          Fokus. Denn nur gemeinsam sind wir ein starkes Team!
        </p>
      </div>
      <!-- add team cards here -->
      <div class="flex flex-wrap justify-center gap-5">
        <TeamCard
          v-for="member in team"
          :key="member.name"
          :memberInfo="member"
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
      titel: "Handtherapeutin",
      skills: ["Ultraschallanwendung"],
      description:
        "Ich bin seit 2012 examinierte Ergotherapeutin und seitdem mit dem Schwerpunkt Handtherapie/ Schmerztherapie tätig. Mir ist  es besonders wichtig, Patient*innen umfassend über ihre Diagnose aufzuklären und sie zur Selbsthilfe anzuleiten. Die Patient*innen aus der Behandlung zu entlassen mit gestärktem Selbstbewusstsein nach oder mit ihrer Diagnose den Alltag zu bewältigen, motiviert mich jedes Mal auf´s Neue. ",
      imgPath: "src/assets/Robert_Avatar.png",
    },
    {
      name: "Claudia Rothe",
      titel: "Praxisanleiterin",
      skills: ["Praxisanleiterin "],
      description:
        "Ich bin seit 2019 examinierte Ergotherapeutin mit den Schwerpunkten Pädiatrie und Psychiatrie. In der Behandlung von Kindern lege ich großen Wert auf eine enge Kooperation mit den Eltern und Schulen/ KItas. Kinder, aber auch psychisch erkrankte Menschen stehen im Mittelpunkt eines großen, sozialen Systems, das sie fördert oder behindert. Mit einem ganzheitlich Blick analysiere ich dieses System und behandle dann individuell. ",
      imgPath: "src/assets/Robert_Avatar.png",
    },
    // {
    //   name: "Lilly Benduhn",
    //   skills: [
    //     "Sensorische Integrationstherapie",
    //     "Respektare®",
    //     "Praxismanagement",
    //     "Ausbilderin (4 Jahre Erfahrung)",
    //   ],
    //   description:
    //     "Claudia Rothe verfügt über fundiertes Wissen in Praxismanagement und der Entwicklung digitaler sowie mobiler Versorgungsangebote. Sie pflegt enge Kooperationen mit zwei Ausbildungsschulen und trägt aktiv zur Nachwuchsförderung bei.",
    //   imgPath: "src/assets/Robert_Avatar.png",
    // },
  ];
</script>

<style scoped>
  section {
    scroll-margin-top: 150px;
  }
</style>
