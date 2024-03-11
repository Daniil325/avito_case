import { Refine, WelcomePage } from "@refinedev/core";
import {dataProvider} from "@/data-provider.ts";

function App() {
    return (
        <Refine
            dataProvider={dataProvider}
        >
            <WelcomePage/>
        </Refine>
    )
}

export default App
