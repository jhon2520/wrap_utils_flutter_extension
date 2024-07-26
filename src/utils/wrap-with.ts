import { commands, SnippetString, window } from "vscode";
import { getSelectedText } from "./get-selected-text";

export const wrapWith = async (snippet:(widget:string) => string) =>{
    let editor = window.activeTextEditor;
    if(!editor) {return;};
    const selection = getSelectedText(editor);
    // TODO:agregar replace
    const widget = editor.document.getText(selection);
    editor.insertSnippet(new SnippetString(snippet(widget)), selection);
    await commands.executeCommand("editor.action.formatDocument");
};