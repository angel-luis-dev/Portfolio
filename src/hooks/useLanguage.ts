import { useContext } from "react";
import { ConfigContext } from "../context/ConfigProvider";
import { Translations } from "../types";

const useLanguage = () => {
    const {language, setLanguage, translations} = useContext(ConfigContext);
    const getLabel = (label: keyof Translations) => {
        return translations[label];
    }
    return {language, setLanguage, getLabel };
}
 
export default useLanguage;