import { Selection, TextEditor, window } from "vscode";

const openBracket = "(";
const closeBracket = ")";

export const getSelectedText =(editor:TextEditor):Selection =>{

    const emptySelection = new Selection(
        editor.document.positionAt(0),
        editor.document.positionAt(0)
    );


    const language = editor.document.languageId;
    if(language !== "dart"){ return emptySelection;}

    // obtain de line text where I am in the editor
    const line = editor.document.lineAt(editor.selection.start);
    const lineText = line.text;

    // valiate index open bracket, its return -1 if is not found
    // editor.selection.anchor => anchor: when selection starts 
    // editor.selection.active => anchor: when selection ends 
    // editor.selection.active.character => anchor: postion index 
    const openBracketIndex = line.text.indexOf(
        openBracket,
        editor.selection.anchor.character);
    
    // get widget start position
    let widgetStartIndex = openBracketIndex > 1 
    ? openBracketIndex - 1
    :  editor.selection.anchor.character;

    for(widgetStartIndex; widgetStartIndex > 0; widgetStartIndex--){
        // last chart of widget name
        const currentChar = lineText.charAt(widgetStartIndex);
        // const isBeginningOfWidget = currentChar ===
            window.showInformationMessage(`current chart  => ${currentChar}`);

    }

    window.showInformationMessage(`Texto selecionado => ${lineText}`);
    window.showInformationMessage(`Indice openBracketIndex  => ${openBracketIndex}`);


    return emptySelection;

};