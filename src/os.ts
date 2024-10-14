/*
# 2) Operating Systems

The `OperatingSystem` class below is used to manage files on a computer. 
It has methods for opening files of different types. However, the current
implementation uses separate methods for opening each type of file. This
makes the code difficult to maintain and extend.

2.1. Refactor the `OperatingSystem` class to have:
    - a single private `files` field (choose an appropriate type for this field, based on
        Polymorphism. You should NOT create any new classes for this field),
    - an `openFile` method that takes a string and returns a `BasicFile` object.
        If the file is not found, then return a new `BasicFile` object with the given
        name and an empty string as the contents.
    - a single `createFile` methods that consumes a `BasicFile` object and adds it to 
        the `files` field.
2.2. Create a new function called `makeTestOS` that consumes nothing and returns
    a new OperatingSystem object with several files. The OS should contain (in order):
    - one `BasicFile` with the name "first.txt" and the contents "Hello, world!"
    - one `EditableFile` with the name "second.txt" and the contents "Hola, mundo!"
    - one `ColorfulFile` with the name "third.txt" and the contents "[blue]Wow![reset]"
*/

import { BasicFile, ColorfulFile, EditableFile } from "./utilities/files";

export class OperatingSystem {
    private files: BasicFile[] = [];

    openFile(fileName: string): BasicFile {
        for (let file of this.files) {
            if (file.getName() === fileName) {
                return file;
            }
        }
        let newFile: BasicFile = new BasicFile(fileName, "");
        return newFile;
    }
    /* a single `createFile` methods that consumes a `BasicFile` object and adds it to 
        the `files` field.
    */
    createFile(file: BasicFile): void {
        this.files.push(file);
    }
}

/*
    Create a new function called `makeTestOS` that consumes nothing and returns
    a new OperatingSystem object with several files. The OS should contain (in order):
    - one `BasicFile` with the name "first.txt" and the contents "Hello, world!"
    - one `EditableFile` with the name "second.txt" and the contents "Hola, mundo!"
    - one `ColorfulFile` with the name "third.txt" and the contents "[blue]Wow![reset]"
    */

export function makeTestOS(): OperatingSystem {
    let basicFile: BasicFile = new BasicFile("first.txt", "Hello, world!");
    let editableFile: EditableFile = new EditableFile(
        "second.txt",
        "Hola, mundo!",
    );
    let colorfulFile: ColorfulFile = new ColorfulFile(
        "third.txt",
        "[blue]Wow![reset]",
    );

    let final: OperatingSystem = new OperatingSystem();
    final.createFile(basicFile);
    final.createFile(editableFile);
    final.createFile(colorfulFile);
    return final;
}
