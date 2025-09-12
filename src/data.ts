type dataProps = {
  id: number,
  ques: string,
  ans: string,
}[]

const data: dataProps = [
  {
    id: 1,
    ques: "What are Accordion Components?",
    ans: "Accordion components are user interface elements used for organizaing and presenting content in a collapsible manner. They typically consist of a header, content and an expand/collapse action."
  },
  {
    id: 2,
    ques: "What are they used for?",
    ans: "They are commonly employed in various contexts, including FAQs, product descriptions, navigation menus, settings panels, and data tables to save screen space and provide a structured and user-friendly interface for presenting information or options."
  },
  {
    id: 3,
    ques: "Accordion as a musical Instrument?",
    ans: "The Accordian is a musical instrument with a keyboard and bellows. It produces sound by air passing over reeds when the player expands or comporesses the bellows, used in variou music genres."
  },
  {
    id: 4,
    ques: "Can I create an accordian component with a different framework?",
    ans: "Yes of course, it is very possible to create an accordion in any other framework."
  }
];

export default data;
