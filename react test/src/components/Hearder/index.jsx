import { RiShutDownLine } from "react-icons/ri";
import { ContainerHeader, Profile, Logout } from "./style";

export function MyHeader() {
    return (
        <ContainerHeader>
            <Profile>
                <img src="http://github.com/migueldeep.png"
                    alt="Foto do usuario"
                />
                <div>
                    <span>Bem-Vindo</span>
                    <strong>Miguel Manuel</strong>
                </div>
            </Profile>
            <Logout>
                <RiShutDownLine />
            </Logout>
        </ContainerHeader>
    )
}