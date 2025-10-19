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
        [TerminalCommands.github]: `
             OOOOOOOOOOOOOOOO             
         OOOOOOOOOOOOOOOOOOOOOOOO         
       OOOOOOOOOOOOOOOOOOOOOOOOOOOO       
     OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO     
    OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO   
  OOOOOOOO    OOOOOOOOOOOOOO    OOOOOOOO  
 OOOOOOOOO                      OOOOOOOOO 
OOOOOOOOOO                      OOOOOOOOOO
OOOOOOOOOO                       OOOOOOOOO
OOOOOOOOO                         OOOOOOOO
OOOOOOOO                          OOOOOOOO      GITHUB: https://github.com/S4nchzz
OOOOOOOO                          OOOOOOOO
OOOOOOOOO                         OOOOOOOO
OOOOOOOOO                        OOOOOOOOO
OOOOOOOOOO                      OOOOOOOOOO
 OOOOOOOOOOOO                OOOOOOOOOOOO 
 OOOOOO OOOOOOOOO        OOOOOOOOOOOOOOOO 
   OOOOOO OOOOOOO        OOOOOOOOOOOOOO   
    OOOOOO                OOOOOOOOOOOO    
     OOOOOOOOOOO          OOOOOOOOOOO     
        OOOOOOOO          OOOOOOOOO       
           OOOOO          OOOOO           
                                                
                                          
        `,
        [TerminalCommands.linkedin]: "",
        [TerminalCommands.help]: ""
    }

    return commandMap[command]
}

export default manageTerminalCommand