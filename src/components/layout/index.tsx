import React, {PropsWithChildren} from "react";
import {Header} from "@/components/header";


export const Layout: React.FC<PropsWithChildren> = ({children}) => {
    return  (
        <div >
            <Header/>
            <div className="p-3 w-full">
                {children}
            </div>
        </div>
    )
}