import { StaticImageData } from "next/image";

import {
  NavLink,
  heroFormProps,
  hero2SectionProps,
  hero3SectionProps,
  hero6formProps,
  NavLinkProps,
  SubMenuItem,
  DropdownProps,
  DropdownOption,
} from "../../types/global";

//NAVBAR ASSETS

export { default as menu } from "../..//public/assets/icons8-menu-24.png";
export { default as cancel } from "../../public/assets/icons8-cancel-30.png";
export { default as logo } from "../../public/assets/is logo 2.svg";
export { default as arrowndown } from "../../public/assets/arrowndown.svg";
export { default as stressedguy } from "../../public/assets/stressedguy.svg";
export { default as play } from "../../public/assets/play.svg";
export { default as loginimg } from "../../public/assets/loginimg.svg";
export { default as googlebutton } from "../../public/assets/googlebutton.svg";
export { default as passclose } from "../../public/assets/passclose.svg";
export { default as passopen } from "../../public/assets/passwordopen.svg";

export const navLinks: NavLink[] = [
  {
    label: "Professional",
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
    label: "Students",
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
  {
    label: "Test Takers",
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
export { default as meshbg } from "../../public/assets/meshbg.svg";
export { default as search } from "../../public/assets/search item.svg";
export { default as help } from "../../public/assets/help.svg";
export { default as lefttwireframe } from "../../public/assets/lefttwireframe.svg";
export { default as rightwireframe } from "../../public/assets/rightwireframe.svg";
export { default as rightyellowstar } from "../../public/assets/rightyellowstar.svg";
export { default as leftbluestart } from "../../public/assets/leftbluestart.svg";
export { default as intelstar } from "../../public/assets/intelstar.svg";
export { default as bluerightframe } from "../../public/assets/bluerightframe.svg";
export { default as yellowsmstart } from "../../public/assets/yellowsmstart.svg";
export { default as pinkblur } from "../../public/assets/pinkblur.svg";
export { default as rightsrart } from "../../public/assets/rightsrart.svg";
export { default as leftstart } from "../../public/assets/leftstart.svg";
export { default as smilignpe } from "../../public/assets/smilignpe.svg";
export { default as greenstar } from "../../public/assets/greenstar.svg";
export { default as sevenpad } from "../../public/assets/sevenpad.svg";
export { default as goldstart } from "../../public/assets/goldstart.svg";
export { default as chatbubble } from "../../public/assets/chatbubble.svg";
export { default as whitedropdown } from "../../public/assets/whitedropdown.svg";
export { default as carstart } from "../../public/assets/car-start.svg";
export { default as andriodbut } from "../../public/assets/andriodbut.svg";
export { default as screwtop } from "../../public/assets/screwtop.svg";
export { default as screbottom } from "../../public/assets/screbottom.svg";
export { default as pinkk } from "../../public/assets/pinkk.svg";
export { default as heroblur } from "../../public/assets/Group 1000002462.svg";
export { default as arrdownblck } from "../../public/assets/arrow-downblck.svg";

import fbicn from "../../public/assets/fbicn.svg";
import xicn from "../../public/assets/xicn.svg";
import igicn from "../../public/assets/igicn.svg";
import linkicn from "../../public/assets/linkicn.svg";

import subjetcstart from "../../public/assets/subjetcstart.svg";
import hero2c from "../../public/assets/hero2c.svg";
import hero2a from "../../public/assets/hero2a.svg";
import hero2b from "../../public/assets/hero2b.svg";
import hero2d from "../../public/assets/hero2d.svg";
import hero2e from "../../public/assets/hero2e.svg";
import hero2f from "../../public/assets/hero2f.svg";
import hero2g from "../../public/assets/hero2g.svg";
import hero2h from "../../public/assets/hero2h.svg";

import sol1 from "../../public/assets/sol1.svg";
import sol2 from "../../public/assets/sol2.svg";
import sol3 from "../../public/assets/sol3.svg";

import firstpad from "../../public/assets/firstpad.svg";
import secpad from "../../public/assets/secpad.svg";
import thirdpad from "../../public/assets/thirdpad.svg";
import sixthpad from "../../public/assets/sixthpad.svg";
import sevenpad from "../../public/assets/sevenpad.svg";

import askaqust from "../../public/assets/ph_suitcase-bold.svg";
import convertformat from "../../public/assets/ph_student-bold.svg";
import sumarize from "../../public/assets/carbon_book.svg";

import trackprogress from "../../public/assets/trackprogress.svg";
import anywhere from "../../public/assets/anywhere.svg";
import exams from "../../public/assets/exams.svg";

import potemtial1 from "../../public/assets/potemtial1.svg";
import potemtial2 from "../../public/assets/potemtial2.svg";
import potemtial3 from "../../public/assets/potemtial3.svg";
import potemtial4 from "../../public/assets/potemtial4.svg";
import potemtial5 from "../../public/assets/potemtial5.svg";
import potemtial6 from "../../public/assets/potemtial6.svg";
import potemtial7 from "../../public/assets/potemtial7.svg";
import potemtial8 from "../../public/assets/potemtial8.svg";
import fb from "../../public/assets/fb.svg";
import x from "../../public/assets/x.svg";
import yt from "../../public/assets/yt.svg";
import nigeria from "../../public/assets/nigeria.svg";

export const socailIcons: StaticImageData[] = [fb, x, yt];

export const heroForm: heroFormProps[] = [
  {
    label: "UPLOAD YOUR NOTES",
    icon: askaqust,
  },
  {
    label: "RECORD YOUR CLASS",
    icon: convertformat,
  },
  {
    label: "Convert Formart",
    icon: sumarize,
  },
];

export const subjects: string[] = [
  "WAEC",
  "NECO",
  "JAMB",
  "GCE",
  "NABTEB",
  "POST-UTME",
  "IJMB",
  "JUPEB",
  "IELTS",
  "TOEFL",
  "GRE",
  "GMAT",
  "SAT",
  "ACT",
  "ICAN",
  "CFA",
  "PMP",
  "CISSP",
  "LSAT",
  "MCAT",
];

export const hero2Section: hero2SectionProps[] = [
  {
    title: "Record Lecture/Meeting",
    text: "Effortlessly capture and summarize long lectures, saving time by providing concise key concept summaries for easy understanding and retention.",
    icon: potemtial1,
  },
  {
    title: "Test Driller",
    text: "Prepare for standardized tests with our AI-driven tool that analyzes past questions and trends. Get predictive test questions and take mock exams to maximize your success.",
    icon: potemtial2,
  },
  {
    title: "Career Guidance",
    text: "Get personalized career advice based on your learning, goals, and resume. Explore career paths and make informed decisions with our AI-driven tool.",
    icon: potemtial3,
  },
  {
    title: "Digital Flashcards",
    text: "Upload your study materials to instantly generate summarized flashcards, making it easier to comprehend and review key concepts.",
    icon: potemtial4,
  },
  {
    title: "Listen on the Go",
    text: "Convert your notes to audio summaries and listen while you commute or multitask. Study efficiently anywhere, anytime.",
    icon: potemtial5,
  },
  {
    title: "Advanced Research",
    text: "Utilize our AI-powered tools for in-depth research and analysis. Access comprehensive insights and data to support your academic and professional projects.",
    icon: potemtial6,
  },
  {
    title: "Go to Class",
    text: "Attend interactive AI-led classes to deepen your understanding of complex topics. Get real-time explanations and support for anything you don’t grasp fully.",
    icon: potemtial7,
  },
  {
    title: "Quiz Me",
    text: "Test your knowledge with personalized quizzes based on your study materials. Strengthen your understanding and retention with our AI-generated questions.",
    icon: potemtial8,
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
    icon: fbicn,
  },
  {
    label: "facebook",
    icon: igicn,
  },
  {
    label: "facebook",
    icon: linkicn,
  },
  {
    label: "facebook",
    icon: xicn,
  },
];

export const footerLinksStudets: SubMenuItem[] = [
  {
    label: "Assignment",
    href: "#",
  },
  {
    label: "Quiz",
    href: "#",
  },
  {
    label: "Convert ",
    href: "#",
  },
  {
    label: "Digital flashcards",
    href: "#",
  },
];
export const footerLinksProf: SubMenuItem[] = [
  {
    label: "Exam prep",
    href: "#",
  },
  {
    label: "Career advice",
    href: "#",
  },
  {
    label: "Team collaboration ",
    href: "#",
  },
];
export const footerLinksTest: SubMenuItem[] = [
  {
    label: "Test prep",
    href: "#",
  },
  {
    label: "Practice tests",
    href: "#",
  },
  {
    label: "Mock exams",
    href: "#",
  },
  {
    label: "Study focus",
    href: "#",
  },
];

export const countries: DropdownOption[] = [
  { option: "United States", icon: nigeria },
  { option: "Canada", icon: nigeria },
  { option: "Germany", icon: nigeria },
  { option: "Japan", icon: nigeria },
  { option: "United Kingdom", icon: nigeria },
  { option: "France", icon: nigeria },
  { option: "Australia", icon: nigeria },
  { option: "India", icon: nigeria },
  { option: "China", icon: nigeria },
  { option: "South Africa", icon: nigeria },
  { option: "Brazil", icon: nigeria },
  { option: "Russia", icon: nigeria },
  { option: "Mexico", icon: nigeria },
  { option: "Italy", icon: nigeria },
  { option: "South Korea", icon: nigeria },
];
