import { ExtensionContext, commands } from 'vscode';
import { wrapWithCustomContainer } from './commands/wrap-with.command';

export function activate(_context: ExtensionContext) {

	// console.log('Congratulations, your extension "wrap-with-utils-flutter" is now active!');
	// const disposable = vscode.commands.registerCommand('wrap-with-utils-flutter.helloWorld', () => {
	// 	vscode.window.showInformationMessage('Hello World from Wrap With Utils Flutter!');
	// });

	// context.subscriptions.push(disposable);

	_context.subscriptions.push(
		commands.registerCommand(
			"extension.wrap-customcontainer",
			wrapWithCustomContainer
		),
	);
}

// export function deactivate() {}
