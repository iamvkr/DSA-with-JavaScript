import prompts from "prompts";

export default async function Input(prompt = "") {
    const response = await prompts([
        {
            type: "text",
            name: "input",
            message: prompt,
            initial: "",
        }]);
    return response.input;
}