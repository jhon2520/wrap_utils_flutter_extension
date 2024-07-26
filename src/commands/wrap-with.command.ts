import { wrapWith } from "../utils/wrap-with";

const containerCustomSnippet = (Widget: string) => {
    return `Container(
        child: SizedBox(),
    )`;
};


export const wrapWithCustomContainer = async()=> wrapWith(containerCustomSnippet);