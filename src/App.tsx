import {Refine} from "@refinedev/core";
import {BrowserRouter, Outlet, Route, Routes} from "react-router-dom";
import {dataProvider} from "@/providers/data-provider.ts";
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import {addLocale, PrimeReactProvider} from "primereact/api";
import {RefineKbar, RefineKbarProvider} from "@refinedev/kbar";
import {DevtoolsProvider} from "@refinedev/devtools";
import routerBindings, {DocumentTitleHandler, NavigateToResource} from "@refinedev/react-router-v6";
import ru_locale from '../src/locales/ru.json'
import {ConfirmDialog} from "primereact/confirmdialog";
import {Layout} from "@/components/layout";
import {notificationProvider} from "@/providers/notificationProvider.tsx";
import {ToastContainer} from "react-toastify";

addLocale('ru', ru_locale);

function App() {
    const config = {
        locale: 'ru'
    };

    return (
        <BrowserRouter>
            <PrimeReactProvider value={config}>
                <RefineKbarProvider>
                    <DevtoolsProvider>
                        <Refine
                            dataProvider={dataProvider}
                            routerProvider={routerBindings}
                            notificationProvider={notificationProvider}
                            options={{
                                syncWithLocation: true,
                                warnWhenUnsavedChanges: true,
                                useNewQueryKeys: true,
                            }}
                        >
                            <Routes>
                                <Route
                                    element={
                                        <Layout>
                                            <ToastContainer/>
                                            <Outlet/>
                                        </Layout>
                                    } >
                                    <Route
                                        index
                                        element={<NavigateToResource resource="page"/>}/>

                                </Route>

                            </Routes>
                            <RefineKbar/>
                            <DocumentTitleHandler/>
                            <ConfirmDialog/>
                        </Refine>
                    </DevtoolsProvider>
                </RefineKbarProvider>
            </PrimeReactProvider>
        </BrowserRouter>
)
}

export default App
