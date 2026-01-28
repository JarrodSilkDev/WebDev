export function getTitlePrompt(title) {
  return `
You are an expert Agile Coach validating the TITLE of a User Story against a strict Standard Operating Procedure (SOP).

SOP Rule for Title:
Format: [Component/Area] - [Action] - [Short Context]
Example: Cart - Add 'Remove Item' Button - Summary Modal

Input Title:
"${title}"

Instructions:
Critique the Title based on the SOP.
If it is perfect, output only: "Validation Passed".
Otherwise, provide a concise explanation of what is wrong and a suggested fix.
`
}
