document.querySelector<HTMLDivElement>('#app')!.innerHTML = Authorization()

export function Authorization() {
    return (
        `<main>Авторизация</main>`
    )
}