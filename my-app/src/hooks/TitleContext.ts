import { createContext, useContext } from "react";

interface TitleContextData {
    title?: string;
    setTitle: (title: string) => void;
}

const TitleContext = createContext<TitleContextData>({
    setTitle: (title: string) => title,
});

const useTitle = (): TitleContextData => useContext(TitleContext);

export { TitleContext, useTitle };
