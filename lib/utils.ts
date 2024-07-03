import {
  NavLink,
  heroFormProps,
  hero2SectionProps,
  hero3SectionProps,
  hero6formProps,
} from "../types/global";

//NAVBAR ASSETS

export { default as menu } from "../public/assets/icons8-menu-24.png";
export { default as cancel } from "../public/assets/icons8-cancel-30.png";
export { default as logo } from "../public/assets/logo.svg";
export { default as arrowndown } from "../public/assets/arrowndown.svg";
export { default as stressedguy } from "../public/assets/stressedguy.svg";
export { default as play } from "../public/assets/play.svg";

export const navLinks: NavLink[] = [
  {
    label: "Study tools",
    subMenu: [
      {
        label: "with this",
        href: "",
      },
      {
        label: "with that",
        href: "",
      },
    ],
  },
  {
    label: "Select language",
    subMenu: [
      {
        label: "spanish",
        href: "",
      },
      {
        label: "igbo",
        href: "",
      },
    ],
  },
];

//HERO SECTION
export { default as meshbg } from "../public/assets/meshbg.svg";
export { default as search } from "../public/assets/search item.svg";
export { default as help } from "../public/assets/help.svg";
export { default as lefttwireframe } from "../public/assets/lefttwireframe.svg";
export { default as rightwireframe } from "../public/assets/rightwireframe.svg";
export { default as rightyellowstar } from "../public/assets/rightyellowstar.svg";
export { default as leftbluestart } from "../public/assets/leftbluestart.svg";
export { default as intelstar } from "../public/assets/intelstar.svg";
export { default as bluerightframe } from "../public/assets/bluerightframe.svg";
export { default as yellowsmstart } from "../public/assets/yellowsmstart.svg";
export { default as pinkblur } from "../public/assets/pinkblur.svg";
export { default as smilignpe } from "../public/assets/smilignpe.svg";
export { default as greenstar } from "../public/assets/greenstar.svg";
export { default as sevenpad } from "../public/assets/sevenpad.svg";
export { default as goldstart } from "../public/assets/goldstart.svg";

import fbicn from "../public/assets/fbicn.svg";
import xicn from "../public/assets/xicn.svg";
import igicn from "../public/assets/igicn.svg";
import linkicn from "../public/assets/linkicn.svg";

import subjetcstart from "../public/assets/subjetcstart.svg";
import hero2c from "../public/assets/hero2c.svg";
import hero2a from "../public/assets/hero2a.svg";
import hero2b from "../public/assets/hero2b.svg";
import hero2d from "../public/assets/hero2d.svg";
import hero2e from "../public/assets/hero2e.svg";
import hero2f from "../public/assets/hero2f.svg";
import hero2g from "../public/assets/hero2g.svg";
import hero2h from "../public/assets/hero2h.svg";

import sol1 from "../public/assets/sol1.svg";
import sol2 from "../public/assets/sol2.svg";
import sol3 from "../public/assets/sol3.svg";

import firstpad from "../public/assets/firstpad.svg";
import secpad from "../public/assets/secpad.svg";
import thirdpad from "../public/assets/thirdpad.svg";
import sixthpad from "../public/assets/sixthpad.svg";
import sevenpad from "../public/assets/sevenpad.svg";

import askaqust from "../public/assets/askaqust.svg";
import convertformat from "../public/assets/convertformat.svg";
import sumarize from "../public/assets/sumarize.svg";

import trackprogress from "../public/assets/trackprogress.svg";
import anywhere from "../public/assets/anywhere.svg";
import exams from "../public/assets/exams.svg";

export const heroForm: heroFormProps[] = [
  {
    label: "convert Format",
    icon: askaqust,
  },
  {
    label: "ask a question",
    icon: convertformat,
  },
  {
    label: "summarize text",
    icon: sumarize,
  },
];

export const subjects: heroFormProps[] = [
  {
    label: "Math",
    icon: subjetcstart,
  },
  {
    label: "Science",
    icon: subjetcstart,
  },
  {
    label: "History",
    icon: subjetcstart,
  },
  {
    label: "Geography",
    icon: subjetcstart,
  },
  {
    label: "English",
    icon: subjetcstart,
  },
  {
    label: "Art",
    icon: subjetcstart,
  },
  {
    label: "Music",
    icon: subjetcstart,
  },
  {
    label: "English",
    icon: subjetcstart,
  },
  {
    label: "Art",
    icon: subjetcstart,
  },
  {
    label: "Music",
    icon: subjetcstart,
  },

  {
    label: "Math",
    icon: subjetcstart,
  },
  {
    label: "Science",
    icon: subjetcstart,
  },
  {
    label: "History",
    icon: subjetcstart,
  },
  {
    label: "Geography",
    icon: subjetcstart,
  },
  {
    label: "English",
    icon: subjetcstart,
  },
  {
    label: "Art",
    icon: subjetcstart,
  },
  {
    label: "Music",
    icon: subjetcstart,
  },
  {
    label: "English",
    icon: subjetcstart,
  },
  {
    label: "Art",
    icon: subjetcstart,
  },
  {
    label: "Music",
    icon: subjetcstart,
  },
];

export const hero2Section: hero2SectionProps[] = [
  {
    title: "Record Lecture/Meeting",
    text: "Effortlessly capture and summarize long lectures, saving time by providing concise key concept summaries for easy understanding and retention.",
    img: hero2f,
    icon: firstpad,
  },
  {
    title: "Test Driller",
    text: "Prepare for standardized tests with our AI-driven tool that analyzes past questions and trends. Get predictive test questions and take mock exams to maximize your success.",
    img: hero2b,
    icon: secpad,
  },
  {
    title: "Career Guidance",
    text: "Get personalized career advice based on your learning, goals, and resume. Explore career paths and make informed decisions with our AI-driven tool.",
    img: hero2c,
    icon: thirdpad,
  },
  {
    title: "Digital Flashcards",
    text: "Upload your study materials to instantly generate summarized flashcards, making it easier to comprehend and review key concepts.",
    img: hero2d,
  },
  {
    title: "Listen on the Go",
    text: "Convert your notes to audio summaries and listen while you commute or multitask. Study efficiently anywhere, anytime.",
    img: hero2a,
  },
  {
    title: "Advanced Research",
    text: "Utilize our AI-powered tools for in-depth research and analysis. Access comprehensive insights and data to support your academic and professional projects.",
    img: hero2e,
    icon: sixthpad,
  },
  {
    title: "Go to Class",
    text: "Attend interactive AI-led classes to deepen your understanding of complex topics. Get real-time explanations and support for anything you don’t grasp fully.",
    img: hero2g,
    icon: sevenpad,
  },
  {
    title: "Quiz Me",
    text: "Test your knowledge with personalized quizzes based on your study materials. Strengthen your understanding and retention with our AI-generated questions.",
    img: hero2h,
  },
];
export const hero3section: hero3SectionProps[] = [
  {
    title: "Tutorials in Introductory Physics",
    text1: "1st edition",
    text2: "Publisher : Addison Wesley",
    text3: "ISBN : 9780130970695",
    img: sol3,
  },
  {
    title: "Tutorials in Introductory Physics",
    text1: "1st edition",
    text2: "Publisher : Addison Wesley",
    text3: "ISBN : 9780130970695",
    img: sol1,
  },
  {
    title: "Tutorials in Introductory Physics",
    text1: "1st edition",
    text2: "Publisher : Addison Wesley",
    text3: "ISBN : 9780130970695",
    img: sol2,
  },
];
export const hero4sectionPropss: heroFormProps[] = [
  {
    label: "Track Your Progress",
    icon: trackprogress,
  },
  {
    label: "Learn from Anywhere, Anytime",
    icon: anywhere,
  },
  {
    label: "Ace your exams",
    icon: exams,
  },
];
export const hero5section: hero6formProps[] = [
  {
    title: "GRE",
    text1: "104K Documents ",
    text2: " 14K Questions",
  },
  {
    title: "IELTS",
    text1: "60K Documents ",
    text2: " 15K Questions",
  },
  {
    title: "JAMB",
    text1: "34K Documents ",
    text2: " 4K Questions",
  },
  {
    title: "GRE",
    text1: "104K Documents ",
    text2: " 14K Questions",
  },
  {
    title: "WAEC",
    text1: "14K Questions",
    text2: "104K Documents",
  },
  {
    title: "NECO",
    text1: "34K Documents",
    text2: "4K Questions",
  },
];

export const socialIcon: heroFormProps[] = [
  {
    label: "facebook",
    icon: fbicn
  },
  {
    label: "facebook",
    icon: igicn,
  },
  {
    label: "facebook",
    icon: linkicn
  },
  {
    label: "facebook",
    icon: xicn
  },
];
