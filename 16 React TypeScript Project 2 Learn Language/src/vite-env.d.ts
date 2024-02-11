/// <reference types="vite/client" />

type LanguageType = "ja" | "hi" | "es" | "fr";

type WordType = {
  word: string;
  meaning: string;
  options: string[];
};
interface StateType {
  loading: boolean;
  result: string[];
  words: WordType[];
  error?: string;
}
