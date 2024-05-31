// use of enums with switch statements
import inquirer from "inquirer";
import chalk from "chalk";

enum fruits{
    apple = "Apple",
    mango = "Mango",
    lemon = "Lemon",
    pomegranate = "Pomegranate",
}

async function fruitUse(){
    let answers = await inquirer.prompt(
        {
            name: "select",
            type:"list",
            message: chalk.greenBright.italic("\n Select one of the fruits from the list above:"),
            choices:Object.values(fruits)
        }
    );
    switch(answers.select){
        case fruits.apple:
            console.log(chalk.redBright.inverse("\n\t An apple a day keeps the doctor away!!!"))
            break;
            case fruits.lemon:
                console.log(chalk.greenBright.inverse("\n\t Lemon possesses great level of Vitamin C"));
                break;
                case fruits.mango:
                    console.log(chalk.yellowBright.inverse("\n\t Mangoes are great for bone health!!!"));
                    break;
                    case fruits.pomegranate:
                        console.log(chalk.red.inverse("\n\t Pomegranates are rich in vitamins and minerals and are good for health"));
                        
                    
                
    }
}
let fruitList = Object.values(fruits)
console.log(fruitList);
await fruitUse();
