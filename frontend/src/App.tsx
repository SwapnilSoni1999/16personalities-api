import "react-json-pretty/themes/1337.css"
import "./App.css"
import Button from "./components/Button"
import Card from "./components/Card"
import Navbar from "./components/Navbar"
import JSONPretty from "react-json-pretty"
import Footer from "./components/Footer"
import ModalWrapper from "./components/Modal"
import { useModal } from "./hooks/useModal"
import React from "react"

function App() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  const { modals } = useModal()

  return (
    <>
      <main className="w-full h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow bg-16pBlue pb-24 px-4">
          <div className="flex w-full gap-y-5 flex-col py-10 items-center">
            <div className="flex flex-col gap-y-7 my-32 text-center">
              <h1 className="text-5xl font-semibold text-white">
                Unofficial 16Personalities API
              </h1>
              <p className="text-2xl font-medium text-white max-w-3xl">
                This is an unofficial API for{" "}
                <a
                  href="https://16personalities.com"
                  target="_blank"
                  className="link text-white hover:text-16pGreen"
                >
                  16Personalities
                </a>
                . It provides endpoints for getting all questions for the
                personality test and submitting answers to get the result.
              </p>
            </div>

            <Card className="max-w-full md:max-w-[75%] w-full flex flex-col gap-y-5">
              <h3 className="text-xl text-16pPurple flex items-center gap-x-4 font-medium">
                GET &nbsp; /api/personality/questions
                <Button
                  className="h-7 px-5 text-sm flex items-center"
                  onClick={() => copyToClipboard("/api/personality/questions")}
                >
                  Copy
                </Button>
              </h3>
              <p className="text-black">
                Get all questions for personality test
              </p>
              <div className="flex flex-col w-full gap-y-1">
                <small>Response:</small>
                <JSONPretty
                  className="flex w-full max-h-[30rem] overflow-auto h-full bg-gray-200 rounded-lg p-4"
                  data={[
                    {
                      id: "WW91IHJlZ3VsYXJseSBtYWtlIG5ldyBmcmllbmRzLg",
                      text: "You regularly make new friends.",
                      options: [
                        { text: "Disagree strongly", value: -3 },
                        { text: "Disagree moderately", value: -2 },
                        { text: "Disagree a little", value: -1 },
                        { text: "Neither agree nor disagree", value: 0 },
                        { text: "Agree a little", value: 1 },
                        { text: "Agree moderately", value: 2 },
                        { text: "Agree strongly", value: 3 },
                      ],
                    },
                    {
                      id: "...",
                      text: "...",
                      options: [
                        { text: "Disagree ", value: -3 },
                        { text: "Disagree moderately", value: -2 },
                        { text: "Disagree a little", value: -1 },
                        { text: "Neither agree nor disagree", value: 0 },
                        { text: "Agree a little", value: 1 },
                        { text: "Agree moderately", value: 2 },
                        { text: "Agree strongly", value: 3 },
                      ],
                    },
                  ]}
                />
              </div>
            </Card>
            <Card
              className="max-w-full md:max-w-[75%] w-full flex flex-col gap-y-5"
              color="blue"
            >
              <h3 className="text-xl text-16pBlue flex items-center gap-x-4 font-medium">
                POST &nbsp; /api/personality/submit
                <Button
                  className="h-7 px-5 text-sm flex items-center"
                  onClick={() => copyToClipboard("/api/personality/submit")}
                  color="blue"
                >
                  Copy
                </Button>
              </h3>
              <p className="text-black">
                Submit personality test answers to get result
              </p>
              <div className="flex flex-col w-full gap-y-1">
                <small>Request:</small>
                <JSONPretty
                  className="flex w-full max-h-[30rem] overflow-auto h-full bg-gray-200 rounded-lg p-4"
                  data={{
                    answers: [
                      {
                        id: "WW91IHJlZ3VsYXJseSBtYWtlIG5ldyBmcmllbmRzLg",
                        value: 3,
                      },
                      {
                        id: "...",
                        value: 1,
                      },
                    ],
                    gender: "Male",
                  }}
                />
              </div>
              <div className="flex flex-col w-full gap-y-1">
                <small>Gender Enum:</small>
                <JSONPretty
                  className="flex w-full max-h-[30rem] overflow-auto h-full bg-gray-200 rounded-lg p-4"
                  data={["Male", "Female", "Other"]}
                />
              </div>
              <div className="flex flex-col w-full gap-y-1">
                <small>Sample Response:</small>
                <JSONPretty
                  className="flex w-full max-h-[30rem] overflow-auto h-full bg-gray-200 rounded-lg p-4"
                  data={{
                    niceName: "Virtuoso",
                    fullCode: "ISTP-A",
                    avatarSrc:
                      "https://www.16personalities.com/static/animations/avatars/all/virtuoso-male.json",
                    avatarAlt: "ISTP avatar",
                    avatarSrcStatic:
                      "https://www.16personalities.com/static/images/personality-types/avatars/istp-virtuoso-male.svg?v=3",
                    snippet:
                      "Virtuosos are innovative and practical experimenters, masters of all kinds of tools.",
                    scales: ["Energy", "Mind", "Nature", "Tactics", "Identity"],
                    traits: [
                      {
                        key: "introverted",
                        label: "Energy",
                        color: "blue",
                        score: 32,
                        pct: 66,
                        trait: "Introverted",
                        link: "https://www.16personalities.com/articles/energy-introverted-vs-extraverted",
                        reverse: false,
                        titles: [Array],
                        description:
                          "Introverted individuals tend to prefer fewer, yet deep and meaningful, social interactions and often feel drawn to calmer environments.",
                        snippet:
                          "You likely prefer fewer, yet deep and meaningful, social interactions and feel drawn to calmer environments.",
                        imageAlt:
                          "A scene showing a man sitting by a tree and listening to music.",
                        imageSrc:
                          "https://www.16personalities.com/static/images/theory/traits/16personalities_trait_introverted.svg",
                      },
                      {
                        key: "observant",
                        label: "Mind",
                        color: "yellow",
                        score: 37,
                        pct: 69,
                        trait: "Observant",
                        reverse: false,
                        link: "https://www.16personalities.com/articles/mind-intuitive-vs-observant",
                        titles: [Array],
                        description:
                          "Observant individuals are pragmatic and down-to-earth. They tend to have a strong focus on what is happening or very likely to happen.",
                        snippet:
                          "You’re likely pragmatic and down-to-earth, with a strong focus on what is happening or very likely to happen.",
                        imageAlt:
                          "A scene showing a couple discussing a house purchase.",
                        imageSrc:
                          "https://www.16personalities.com/static/images/theory/traits/16personalities_trait_observant.svg",
                      },
                      {
                        key: "thinking",
                        label: "Nature",
                        color: "green",
                        score: 35,
                        pct: 68,
                        trait: "Thinking",
                        reverse: true,
                        link: "https://www.16personalities.com/articles/nature-thinking-vs-feeling",
                        titles: [Array],
                        description:
                          "Thinking individuals focus on objectivity and rationality, often dismissing emotions in favor of logic. They tend to see effectiveness as more important than social harmony.",
                        snippet:
                          "You likely focus on objectivity and rationality, putting effectiveness above social harmony.",
                        imageAlt:
                          "A scene showing a girl and a guy, with the guy introducing himself and the girl analyzing his behavior, with a thought bubble full of checkboxes floating above her head.",
                        imageSrc:
                          "https://www.16personalities.com/static/images/theory/traits/16personalities_trait_thinking.svg",
                      },
                      {
                        key: "prospecting",
                        label: "Tactics",
                        color: "purple",
                        score: 22,
                        pct: 61,
                        trait: "Prospecting",
                        link: "https://www.16personalities.com/articles/tactics-judging-vs-prospecting",
                        titles: [Array],
                        reverse: false,
                        description:
                          "Prospecting individuals are very good at improvising and adapting to opportunities. They tend to be flexible nonconformists who value novelty above stability.",
                        snippet:
                          "You’re likely very good at improvising and adapting. You tend to be flexible and value novelty above stability.",
                        imageAlt:
                          "A scene showing a couple buying a bunch of items that are on sale.",
                        imageSrc:
                          "https://www.16personalities.com/static/images/theory/traits/16personalities_trait_prospecting.svg",
                      },
                      {
                        key: "assertive",
                        label: "Identity",
                        color: "red",
                        score: 38,
                        pct: 69,
                        trait: "Assertive",
                        link: "https://www.16personalities.com/articles/identity-assertive-vs-turbulent",
                        titles: [Array],
                        reverse: true,
                        description:
                          "Assertive individuals are self-assured, even-tempered, and resistant to stress. They refuse to worry too much and tend to be self-confident when striving to achieve goals.",
                        snippet:
                          "You’re likely self-assured, even-tempered, and resistant to stress, refusing to worry too much.",
                        imageAlt:
                          "A scene showing a relaxed office worker paying no attention to their manager who is walking up to them.",
                        imageSrc:
                          "https://www.16personalities.com/static/images/theory/traits/16personalities_trait_assertive.svg",
                      },
                    ],
                  }}
                />
              </div>
            </Card>
          </div>
        </div>
        <Footer />
      </main>
      {modals.length ? (
        <ModalWrapper
          children={modals.map((item, index) => (
            <React.Fragment key={index}>{item}</React.Fragment>
          ))}
        />
      ) : null}
    </>
  )
}

export default App
