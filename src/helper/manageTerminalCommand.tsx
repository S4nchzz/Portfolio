import { TerminalCommands } from "@/lib/constants/terminalCommands.enum"
import { ManageTerminalCommandType } from "@/types/types"

const manageTerminalCommand = ({ command }: ManageTerminalCommandType) => {
    const commandMap: Record<TerminalCommands, string> = {
        [TerminalCommands.whoami]: `
      :                        -             s4nchzz@Portfolio
       #.                     #.           ---------------------
       -@=                  :@+            OS: S4nchzzOS
        +@*                +@*             Host: s4nchzz.com
         +@@:            .@@#              Version: 0.0.1
          =@@#.         *@@+               Name: Iyan Sanchez
           .%@@%.     #@@@:                Related Projects: ['Readify', 'Fortune', 'PortfolioOS']
             -%@@#  #@@@=                  Linkedin: https://www.linkedin.com/in/s4nchzz/
               :-=%@@%=                    Tech stack: [
              .#@@@#-+%=                       Languajes: ['Java', 'Javascript', 'Typescript', 'Kotlin', 'PHP']
            #@@@%-  :#@@@%.                    Frameworks: ['SpringBoot', 'NestJS', 'NextJS', 'JavaFX', 'Laravel']
        -#@@%+:        :+%@@#-                 Experience: [
    -#@@*-.                .-*@@#-                 '(SMR) Technician in Microcomputer Systems and Networks) 2021-2023',
:=:                                :=-             '(DAM/DAW) Mobile and Web software development 2023-2026'
                                               ]
                                           ]
        `,
        [TerminalCommands.github]: "",
        [TerminalCommands.linkedin]: "",
        [TerminalCommands.help]: ""
    }

    return commandMap[command]
}

export default manageTerminalCommand