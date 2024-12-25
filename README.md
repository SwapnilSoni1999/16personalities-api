# 16Personalities API (Unofficial)

This is an unofficial API for the official [16Personalities](https://16personalities.com) website. It allows you to get information about the personality types, such as the type's name, description, and more.

## How to use

<!-- There are 2 API endpoints -->

1. **Get All Questions**

```http
GET https://16personalities-api.com/api/personality/questions
```

This endpoint returns all the questions that are used to determine the personality type.
use the `options` array's value as the answer.

<!-- table: value: answer -->

| Answer Text                | Value |
| :------------------------- | :---- |
| Disagree strongly          | -3    |
| Disagree moderately        | -2    |
| Disagree a little          | -1    |
| Neither agree nor disagree | 0     |
| Agree a little             | 1     |
| Agree moderately           | 2     |
| Agree strongly             | 3     |

2. **Get Personality Type**

```http
POST https://16personalities-api.com/api/personality

{
  "answers": [
    {
      "id": "WW91IHJlZ3VsYXJseSBtYWtlIG5ldyBmcmllbmRzLg",
      "value": 3
    },
    {
      "id": "...",
      "value": 1
    }
  ],
  "gender": "Male"
}

```

The `gender` field can be `Male`, `Female`, or `Other`.

<br/>
<!-- Sample response -->

The response will look like this:

```json
{
  "niceName": "Virtuoso",
  "fullCode": "ISTP-A",
  "avatarSrc": "https://www.16personalities.com/static/animations/avatars/all/virtuoso-male.json",
  "avatarAlt": "ISTP avatar",
  "avatarSrcStatic": "https://www.16personalities.com/static/images/personality-types/avatars/istp-virtuoso-male.svg?v=3",
  "snippet": "Virtuosos are innovative and practical experimenters, masters of all kinds of tools.",
  "scales": ["Energy", "Mind", "Nature", "Tactics", "Identity"],
  "traits": [
    {
      "key": "introverted",
      "label": "Energy",
      "color": "blue",
      "score": 32,
      "pct": 66,
      "trait": "Introverted",
      "link": "https://www.16personalities.com/articles/energy-introverted-vs-extraverted",
      "reverse": false,
      "titles": [null],
      "description": "Introverted individuals tend to prefer fewer, yet deep and meaningful, social interactions and often feel drawn to calmer environments.",
      "snippet": "You likely prefer fewer, yet deep and meaningful, social interactions and feel drawn to calmer environments.",
      "imageAlt": "A scene showing a man sitting by a tree and listening to music.",
      "imageSrc": "https://www.16personalities.com/static/images/theory/traits/16personalities_trait_introverted.svg"
    },
    {
      "key": "observant",
      "label": "Mind",
      "color": "yellow",
      "score": 37,
      "pct": 69,
      "trait": "Observant",
      "reverse": false,
      "link": "https://www.16personalities.com/articles/mind-intuitive-vs-observant",
      "titles": [null],
      "description": "Observant individuals are pragmatic and down-to-earth. They tend to have a strong focus on what is happening or very likely to happen.",
      "snippet": "You’re likely pragmatic and down-to-earth, with a strong focus on what is happening or very likely to happen.",
      "imageAlt": "A scene showing a couple discussing a house purchase.",
      "imageSrc": "https://www.16personalities.com/static/images/theory/traits/16personalities_trait_observant.svg"
    },
    {
      "key": "thinking",
      "label": "Nature",
      "color": "green",
      "score": 35,
      "pct": 68,
      "trait": "Thinking",
      "reverse": true,
      "link": "https://www.16personalities.com/articles/nature-thinking-vs-feeling",
      "titles": [null],
      "description": "Thinking individuals focus on objectivity and rationality, often dismissing emotions in favor of logic. They tend to see effectiveness as more important than social harmony.",
      "snippet": "You likely focus on objectivity and rationality, putting effectiveness above social harmony.",
      "imageAlt": "A scene showing a girl and a guy, with the guy introducing himself and the girl analyzing his behavior, with a thought bubble full of checkboxes floating above her head.",
      "imageSrc": "https://www.16personalities.com/static/images/theory/traits/16personalities_trait_thinking.svg"
    },
    {
      "key": "prospecting",
      "label": "Tactics",
      "color": "purple",
      "score": 22,
      "pct": 61,
      "trait": "Prospecting",
      "link": "https://www.16personalities.com/articles/tactics-judging-vs-prospecting",
      "titles": [null],
      "reverse": false,
      "description": "Prospecting individuals are very good at improvising and adapting to opportunities. They tend to be flexible nonconformists who value novelty above stability.",
      "snippet": "You’re likely very good at improvising and adapting. You tend to be flexible and value novelty above stability.",
      "imageAlt": "A scene showing a couple buying a bunch of items that are on sale.",
      "imageSrc": "https://www.16personalities.com/static/images/theory/traits/16personalities_trait_prospecting.svg"
    },
    {
      "key": "assertive",
      "label": "Identity",
      "color": "red",
      "score": 38,
      "pct": 69,
      "trait": "Assertive",
      "link": "https://www.16personalities.com/articles/identity-assertive-vs-turbulent",
      "titles": [null],
      "reverse": true,
      "description": "Assertive individuals are self-assured, even-tempered, and resistant to stress. They refuse to worry too much and tend to be self-confident when striving to achieve goals.",
      "snippet": "You’re likely self-assured, even-tempered, and resistant to stress, refusing to worry too much.",
      "imageAlt": "A scene showing a relaxed office worker paying no attention to their manager who is walking up to them.",
      "imageSrc": "https://www.16personalities.com/static/images/theory/traits/16personalities_trait_assertive.svg"
    }
  ]
}
```

# How to self deploy/run

1. Clone the repository

```bash
git clone https://github.com/SwapnilSoni1999/16personalities-api.git
```

2. Install the dependencies

```bash
pnpm install
```

3. Take reference from `.env.example` and create a `.env.dev` for development and `.env.prod` for production.

4. Build

```bash
pnpm run build
```

5. Start the server

for production

```bash
pnpm run start
```

for development

```bash
pnpm run dev
```

## Note

- For Developers and Users:

This project is not affiliated with 16Personalities in any way. It is an unofficial API. The data is fetched from the official website. The API may break if the website changes its structure. If you find any issues, please open an issue.

- For Official 16Personalities:

If you are from 16Personalities and want this project to be taken down, please contact me on my email. (You can find it on my GitHub profile)

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
