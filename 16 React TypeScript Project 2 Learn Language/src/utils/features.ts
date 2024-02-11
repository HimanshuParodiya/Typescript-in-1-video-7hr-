import axios from "axios";
import { generate } from "random-words";

export const translateWords = async (
  params: LanguageType
): Promise<WordType[]> => {
  try {
    const words = (generate(8) as string[]).map((item) => ({
      Text: item,
    }));
    const respone = await axios.post(
      " https://microsoft-translator-text.p.rapidapi.com/translate",
      words,
      {
        params: {
          "to[0]": params,
          "api-version": "3.0",
          profanityAction: "NoAction",
          textType: "plain",
        },
        headers: {
          "content-type": "application/json",
          "X-RapidAPI-Key":
            "9dd8b3f549msh458d4fea8782fdbp10b9a4jsne3d70cb22518",
          "X-RapidAPI-Host": "microsoft-translator-text.p.rapidapi.com",
        },
      }
    );

    const receive: FetchedDataType[] = respone.data;
    receive[0].translations[0].text;
    const arr: WordType[] = receive.map((item, index) => {
      return {
        word: item.translations[0].text,
        meaning: words[index].Text,
        options: ["asd"],
      };
    });

    return arr;
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong!");
  }
};
