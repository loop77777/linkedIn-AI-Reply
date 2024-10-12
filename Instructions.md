# ‘LinkedIn AI Reply’ Chrome Extension

## **Objective**

To build a Chrome extension that runs on LinkedIn and assists users in generating replies to messages. This is a demo extension, so there's no need to make actual API calls for generating responses.

_Although you may be unfamiliar with building Chrome extensions, completing this assignment will demonstrate your ability to learn new technologies._

## **Deadline**

Candidates should submit the assignment within 7 days of receiving it. Earlier submissions are preferred.

## **Languages**

React, TypeScript, and Tailwind CSS.

## Extension Design

Refer to this **[Figma file](https://www.figma.com/file/Ub2IeItSMfsgIGFJO98hKj/ChatGPT-Writer-Assignment?type=design&node-id=0%3A1&mode=design&t=bil5Pwb91kPCLnz7-1)** for the UI design.

## **Required Tasks**

Your Chrome extension should do below tasks:

1. Show the AI icon when the user focuses on the LinkedIn message input field _(refer Figma Screen 1)_.
2. The icon should disappear when the input field is no longer focused.
3. Display a center-aligned modal when clicking on the icon _(refer Figma Screen 2)_.
4. Clicking anywhere outside this modal should close it.
5. The user can enter any command in the modal's input field _(refer Figma Screen 3)_.
6. Clicking on the “Generate” button should just display this dummy response: `Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask.` _(refer Figma Screen 4)_
   1. The “Regenerate” button should be non-functional _._
7. When the user clicks on the insert button, the generated static text should be inserted properly into the message input field _(refer Figma Screen 5)._

## Constraints

- You must use [**WXT Framework**](https://wxt.dev/) for building the extension. This demonstrates that you are capable of learning new frameworks quickly.
- You must use `React` with `TypeScript`.
- You must use `Tailwind CSS` for styling.
- Avoid using any other third-party libraries for UI or icons. In Figma, you can click on an icon and export it as an SVG.
- Don't do anything extra that is not part of the required task. Instead, if you have some time left, focus on handling any edge cases and improving code quality.

## **Out of Scope**

- No need to make actual API calls to generate responses.
- User authentication is not necessary.
- Unit tests are not needed.
- A database is not needed.

## **Evaluation Criteria**

Your assignment will be evaluated based on the following 5 criteria:

1. **Problem-Solving Skills**

   You can solve new challenges even if you have never worked with chrome extensions or DOM manipulations.

2. **Ability to Follow Instructions**

   You have completed all required tasks (1 to 7).

3. **Attention to Detail**

   How closely does the UI match the Figma design.

4. **Code Quality**

   _There are numerous ways to solve this assignment, and none of them are wrong. We are looking for a candidate who knows which solution is better than the others._

**Qualities of good code:**

1. **Readable**
   - Code is [Organized](https://gourav.io/blog/organize-code) and [Linear](https://gourav.io/blog/linear-code).
   - Descriptive naming of variables, functions, etc. Follows naming convention.
   - Comments are added wherever necessary.
2. **Performant**

   The code should be optimized for performance where necessary, without sacrificing readability.

3. **Failproof**
   - Consideration of edge cases (Make sure to thoroughly test your code for any subtle bugs).
   - Error handling.
4. **Extensible**

   Easy to modify and extend by you and others when needed.

5. **Execution Speed**

   Efficiently complete the project within the given timeframe.

## **Submission Instructions**

1. Create a public GitHub repository under your name with all your changes and share the link in the form provided below.
2. Record a short video (<30sec and without any audio) **demonstrating all tasks (1 to 7)** as mentioned. [Embed the video](https://stackoverflow.com/a/78521560/3073272) in the `README.md` file for direct playback without the need to download.
3. **Submit your work using this form**: **https://forms.gle/yWkbGN58LCEkccam8**

That’s it. If you are shortlisted, you will hear from us within 10 days of submitting the form.

For any questions or clarifications, please contact *gourav@chatgptwriter.ai*
