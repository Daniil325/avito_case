import {Avatar} from "primereact/avatar";

export const Header = () => {
    return (
        <div className="flex align-items-center justify-content-center w-10 m-auto p-4">
            <img src="../../../public/logo.png" alt="Image" className="mr-auto" width="200"/>
            <div className="flex gap-2 justify-content-center align-items-center">
                <Avatar icon="pi pi-bell" shape="circle"/>
                <Avatar icon="pi pi-user" size="xlarge" shape="circle"/>
            </div>

        </div>
    )
}