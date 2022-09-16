import { useState } from "react";
import CodeWorkspace from "../../components/CodeWorkspace/CodeWorkspace";
import IntermediateStage from "../intermediate/IntermediateStage/IntermediateStage";

const initialCode = '// In this sandbox, you can test out JS freely. Have fun with it!\n// Try clicking "Run" above and see what this function does.\nfunction add(a, b) {\n  return a + b;\n}\n\nlet firstNumber = 1;\nlet secondNumber = 5;\n\nconsole.log(\n  firstNumber,\n  " + ",\n  secondNumber,\n  " = ",\n  add(firstNumber, secondNumber)\n);\n\nconsole.log("Hooray! It works!");';

function Sandbox() {
    const [code, setCode] = useState(initialCode);

    return (
        <div className="sandboxView">
            <CodeWorkspace code={code} setCode={setCode} lessonName="Sandbox" initialCode={initialCode}  />
            <IntermediateStage codeConsoleStyles={{minHeight: '100%'}} lesson={{details: {instructions: []}} as any} />
        </div>
    )
}

export default Sandbox;