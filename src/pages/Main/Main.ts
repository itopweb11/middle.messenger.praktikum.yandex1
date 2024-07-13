document.querySelector<HTMLDivElement>('#app')!.innerHTML = Main()

export function Main() {
    return (
        `<main>
           <a href="/authorization">Авторизация</a>
           <a href="/registration">Регистрация</a>
        </main>`
    )
}