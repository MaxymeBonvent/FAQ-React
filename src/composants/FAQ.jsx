import React, { useState } from 'react'

// Il faut mettre les variables de base, les varibales d'état, les fonctions et le rendu dans le composant principal
const FAQ = () => {
// --- VARIABLES DE BASE --- //

// Questions avec leur réponses et la visibilité de ces réponses
const questionsInitiales = 
[
  [
    "Combien y'a-t-il d'éléments dans la nature ?",
    {txt : "Il y a 118 élément dans l'Univers, classifié dans le Tableau périodique des éléments.", visible: false}
  ],

  [
    "Combien y'a-t-il d'étoiles dans la Voie Lactée ?",
    {txt : "Il y a environ 150 milliards d'étoiles dans notre galaxie, la Voie Lactée.", visible: false}
  ],

  [
    "Pourquoi le ciel est bleu ?",
    {txt : "C'est parce que le Soleil émet une lumière blanche dans l'atmosphère, et ce-dernier, composé de particules d'air va diffuser la lumière blanche et ne laisser passer que le bleu. C'est la Diffusion Rayleigh.", visible: false}
  ],

  [
    "Combien y'a-t-il d'animaux dans le zodiaque chinois ?",
    {txt : "Il y en a douze : le rat, le bœuf, le tigre, le lapin, le dragon, le serpent, le cheval, la chèvre, le singe, le coq, le chien et le cochon.", visible: false}
  ],

  [
    "Qui a découvert le radium ?",
    {txt : "C'est la physicienne et chimiste polonaise Marie Curie, qui en annonce la découverte en décembre 1898.", visible: false}
  ],

  [
    "De quoi se nourrissent les loups ?",
    {txt : "Carnivore, le loup mange des grands ongulés (chevreuil, chamois, mouflon, cerf), des petits mammifères (lapin, marmotte, lièvre) et attaque les troupeaux d'élevage (agneau, mouton, poulain).", visible: false}
  ],

  [
    "D'où vient le mythe de Pégase ?",
    {txt : "Le mythe du cheval ailé vient de la mythologie grecque. Dans le récit, Pégase s'extrait de l'emprise de Méduse après que celle-ci vut vaincu par Persée.", visible: false}
  ],

  [
    "De quoi se nourrissent les loutres ?",
    {txt : "La loutre de rivière consomme du poisson (saumoneau, truite, barbue), des insectes (nymphes de libellules) des écrevisses, des grenouilles et des tortues.", visible: false}
  ],

  [
    "Comment s'appelle le premier chien à être allé dans l'espace ?",
    {txt : "Laïka est une chienne qui fut envoyé a bord de Spoutnik 2 le 3 novembre 1957.", visible: false}
  ],

  [
    "De quoi se nourrissent les aigles ?",
    {txt : "Carnivores, les aigles dévorent des rongeurs (souris, campagnols, marmottes), des petits mammifères (lièvre, lapin, faon), d'autres oiseaux (faisan, perdrix, volaille), de chèvres en montagne, et plus rarement des reptiles comme les lézards.", visible: false}
  ]
]

// --- VARIABLES D'ÉTAT --- //

// État du groupe de questions-réponses
const [questions, setQuestions] = useState(questionsInitiales) 

// --- FONCTIONS --- //

// Affichage ou masquage de la réponse dont le bouton est cliqué
const ToggleReponse = (index) => {
  // Nouveau groupe de questions
  const newQuestions = [...questions]

  // Inversion du bool "visible" de la réponse du bouton cliqué
  newQuestions[index][1].visible ? newQuestions[index][1].visible = false : newQuestions[index][1].visible = true

  // Remplacement du groupe actuel de question par le nouveau groupe
  setQuestions(newQuestions)

  // Log de la nouvelle valeur de "visible" de la réponse correspondante
  console.log(`Visible de la question n°${index} == ${questions[index][1].visible}.`)

  // Msg test
  console.log(`ToggleReponse(${index}) appelée.`)
}

// --- RENDU --- //
  return (
    <div id="div_composant_FAQ">

      {/* TITRE DU PROJET */}
      <h1>FAQ</h1>

      {/* LISTE DE QUESTIONS/RÉPONSES */}
      <ul>
          {/* AFFICHAGE DES QUESTIONS ET DE LEUR BOUTONS */}
          {questions.map((question, idx) => {
            return (
              <li key={idx}>
                {/* QUESTION */}
                {question[0]}

                {/* BOUTON */}
                <button onClick={() => ToggleReponse(idx)}><b>+</b></button>

                <br/>

                {/* RÉPONSE */}
                {question[1].visible ? <span>{question[1].txt}</span> : <span></span>}
              </li>
            )
          }
          )}
      </ul>

    </div>
  )
}

export default FAQ