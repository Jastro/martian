import { InputParser } from "./module/martian-robots-solver/helper/input.parser";
import { OutputPrinter } from "./module/martian-robots-solver/helper/output.printer";
import { MartianRobotsSolver } from "./module/martian-robots-solver/martian-robots.solver";

const fileSelector = document.getElementById("file-selector");
fileSelector.addEventListener("change", (event) => {
  readFile(event);
});

const readFile = async (event) => {
  const file = event.target.files.item(0);
  const text = await file.text();
  const input = InputParser.fromString(text);
  const output = OutputPrinter.fromRobots({
    robots: new MartianRobotsSolver({ input }).solve(),
  });
  document.querySelector(".result").innerText = output;
};
